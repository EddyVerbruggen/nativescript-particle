import {
  getDeviceType,
  TNSParticleDevice,
  TNSParticleDeviceType,
  TNSParticleDeviceVariable,
  TNSParticleEvent
} from "./particle.common";

export class MyTNSParticleDevice implements TNSParticleDevice {
  id: string;
  name: string;
  status: string;
  connected: boolean;
  type: TNSParticleDeviceType;
  functions: Array<string>;
  variables: Array<TNSParticleDeviceVariable>;
  eventIds: Array<any>;

  constructor(public particleDevice: any) {
    this.id = particleDevice.getID();
    this.name = particleDevice.getName();
    this.status = particleDevice.isConnected() ? particleDevice.getStatus() : "offline";
    this.connected = particleDevice.isConnected();
    this.type = getDeviceType(particleDevice.getProductID());
    this.functions = toJsArray(particleDevice.getFunctions());
    this.variables = toJsonVariables(particleDevice.getVariables());
    this.eventIds = [];
  }

  rename(name: string): Promise<void> {
    return new Promise<any>((resolve, reject) => {
      this.particleDevice.setName(name);
      resolve();
    });
  }

  getVariable(name: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        const result: any = this.particleDevice.getVariable(name);
        const className = result.getClass ? result.getClass().getName() : "default";
        switch (className) {
          case "java.lang.Integer":
          case "java.lang.Long":
          case "java.lang.Double":
            resolve(Number(String(result)));
            break;
          default:
            resolve(String(result));
        }
      } catch (e) {
        reject(e.nativeException.getBestMessage());
      }
    });
  }

  callFunction(name: string, ...args): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      try {
        resolve(this.particleDevice.callFunction(name, java.util.Arrays.asList(args)));
      } catch (e) {
        reject(e.nativeException.getBestMessage());
      }
    });
  }

  subscribe(prefix: string, eventHandler?: (event: TNSParticleEvent) => void): void {
    try {
      const handler = new io.particle.android.sdk.cloud.ParticleEventHandler({
        onEventError(exception: java.lang.Exception) {
          (<any>global).postMessage({success: false});
        },
        onEvent(eventName: string, event: io.particle.android.sdk.cloud.ParticleEvent) {
          if (event) {
            (<any>global).postMessage({
              success: true,
              data: <TNSParticleEvent>{
                event: eventName,
                data: event.dataPayload,
                date: new Date(event.publishedAt.getTime()),
                deviceID: event.deviceId
              }
            });
          }
        }
      });

      const id = this.particleDevice.subscribeToEvents(prefix, handler);
      this.eventIds.push(id);
    } catch (e) {
      console.log(e.nativeException.getBestMessage());
    }
  }

  unsubscribe(): void {
    this.eventIds.forEach((element: number) => {
      this.particleDevice.unsubscribeFromEvents(element);
    });
    this.eventIds = [];
  }
}


const toJsArray = (nativeSet: java.util.Set<any>): Array<any> => {
  const result: Array<any> = [];
  if (nativeSet) {
    const it = nativeSet.iterator();
    while (it.hasNext()) {
      result.push(it.next());
    }
  }
  return result;
};

const toJsonVariables = (nativeMap: java.util.Map<any, any>): Array<TNSParticleDeviceVariable> => {
  const result: Array<TNSParticleDeviceVariable> = [];
  if (nativeMap) {
    const it = nativeMap.keySet().iterator();
    while (it.hasNext()) {
      const name = it.next();
      const type = nativeMap.get(name).toString();
      result.push({name, type});
    }
  }
  return result;
};
