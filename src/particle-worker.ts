require("globals"); // necessary to bootstrap tns modules on the new thread
import {
  TNSParticleDevice,
  TNSParticleDeviceVariable,
  getDeviceType,
  TNSParticleLoginOptions,
  TNSParticleDeviceType
} from "./particle.common";

declare const io: any;
const ParticleCloudSDK = io.particle.android.sdk.cloud.ParticleCloudSDK;
let cachedDevices: Array<MyTNSParticleDevice>;

class MyTNSParticleDevice implements TNSParticleDevice {
  id: string;
  name: string;
  status: string;
  type: TNSParticleDeviceType;
  functions: Array<string>;
  variables: Array<TNSParticleDeviceVariable>;
  eventIds: string[];

  constructor(public particleDevice: any) {
    this.id = particleDevice.getID();
    this.name = particleDevice.getName();
    this.status = particleDevice.getStatus();
    this.type = getDeviceType(particleDevice.getProductID());
    this.functions = toJsArray(particleDevice.getFunctions());
    this.variables = toJsonVariables(particleDevice.getVariables());
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
  subscribe(name: string, eventHandler:any): void {
    // function stub
  }
  unsubscribe(): void {
    // function stub
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

const login = (options: TNSParticleLoginOptions): void => {
  try {
    ParticleCloudSDK.getCloud().logIn(options.username, options.password);
    (<any>global).postMessage({success: true});
  } catch (e) {
    (<any>global).postMessage({success: false, error: e.nativeException.getBestMessage()});
  }
};

const listDevices = (): void => {
  try {
    const particleDevices = ParticleCloudSDK.getCloud().getDevices();
    cachedDevices = [];
    for (let i = 0; i < particleDevices.size(); i++) {
      cachedDevices.push(new MyTNSParticleDevice(particleDevices.get(i)));
    }
    (<any>global).postMessage({success: true, devices: cachedDevices});
  } catch (e) {
    (<any>global).postMessage({success: false, error: e.nativeException.getBestMessage()});
  }
};

const getVariable = (device: TNSParticleDevice, name: string): void => {
  device.getVariable(name)
      .then(result => ((<any>global).postMessage({success: true, result})))
      .catch(error => (<any>global).postMessage({success: false, error}));
};

const callFunction = (device: TNSParticleDevice, name: string, args): void => {
  device.callFunction(name, args)
      .then(result => (<any>global).postMessage({success: true, result: result}))
      .catch(error => (<any>global).postMessage({success: false, error}));
};

const getDevice = (id: string): TNSParticleDevice => {
  return cachedDevices.filter(cachedDevice => cachedDevice.id === id)[0];
};

(<any>global).onmessage = msg => {
  let request = msg.data;

  if (request.action === "login") {
    login(request.options);
    return;
  } else if (request.action === "listDevices") {
    listDevices();
    return;
  } else if (request.action === "callFunction") {
    callFunction(getDevice(request.options.deviceId), request.options.name, request.options.args);
    return;
  } else if (request.action === "getVariable") {
    getVariable(getDevice(request.options.deviceId), request.options.name);
    return;
  } else {
    (<any>global).postMessage({success: false, error: `Unsupported action sent to worker: '${request.action}'`});
  }
};
