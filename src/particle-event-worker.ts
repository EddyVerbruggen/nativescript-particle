require("globals"); // necessary to bootstrap tns modules on the new thread
import { getDeviceType, TNSParticleDevice, TNSParticleDeviceType, TNSParticleDeviceVariable } from "./particle.common";

let cachedDevices: Array<MyTNSParticleDevice>;

class MyTNSParticleDevice implements TNSParticleDevice {
  id: string;
  name: string;
  status: string;
  type: TNSParticleDeviceType;
  functions: Array<string>;
  variables: Array<TNSParticleDeviceVariable>;
  eventIds: Array<number>;

  constructor(public particleDevice: any) {
    this.id = particleDevice.getID();
    this.name = particleDevice.getName();
    this.status = particleDevice.getStatus();
    this.type = getDeviceType(particleDevice.getProductID());
    this.functions = toJsArray(particleDevice.getFunctions());
    this.variables = toJsonVariables(particleDevice.getVariables());
    this.eventIds = [];
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

  subscribe(name: string, eventHandler: any): void {
    try {
      const handler = new io.particle.android.sdk.cloud.ParticleEventHandler({
        onEventError(exception: java.lang.Exception) {
          (<any>global).postMessage({success: kCMTextDisplayFlag_allSubtitlesForced});
        },
        onEvent(param0: string, event: io.particle.android.sdk.cloud.ParticleEvent) {
          if (event) {
            (<any>global).postMessage({success: true, data: {data: event.dataPayload, name: param0}});
          }
        }
      });

      const id = this.particleDevice.subscribeToEvents(null, handler);
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


const listDevices = (): void => {
  console.log(`worker2 listdevices`);

  try {
    const particleDevices = io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().getDevices();
    cachedDevices = [];
    for (let i = 0; i < particleDevices.size(); i++) {
      cachedDevices.push(new MyTNSParticleDevice(particleDevices.get(i)));
    }
    console.log(`worker 2 got devices`);

    // (<any>global).postMessage({success: true, devices: cachedDevices});
  } catch (e) {
    // (<any>global).postMessage({success: false, error: e.nativeException.getBestMessage()});
  }
};

const subcribeFunction = (device: TNSParticleDevice, name: string): void => {
  device.subscribe(name, null);
};

const unsubcribeFunction = (device: TNSParticleDevice): void => {
  device.unsubscribe();
};

const getDevice = (id: string): TNSParticleDevice => {
  return cachedDevices.filter(cachedDevice => cachedDevice.id === id)[0];
};

(<any>global).onmessage = msg => {
  let request = msg.data;

  if (request.action === "listDevices") {
    listDevices();
    return;
  } else if (request.action === "subscribe") {
    subcribeFunction(getDevice(request.options.deviceId), request.options.name);
    return;
  } else if (request.action === "unsubscribe") {
    unsubcribeFunction(getDevice(request.options.deviceId));
    return;
  } else {
    (<any>global).postMessage({success: false, error: `Unsupported action sent to worker: '${request.action}'`});
  }
};
