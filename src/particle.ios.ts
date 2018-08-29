import {
  getDeviceType,
  TNSParticleAPI,
  TNSParticleDevice,
  TNSParticleDeviceType,
  TNSParticleDeviceVariable,
  TNSParticleLoginOptions
} from "./particle.common";

const toJsArray = (nativeArray: NSArray<any>): Array<any> => {
  const result: Array<any> = [];
  if (nativeArray) {
    for (let i = 0; i < nativeArray.count; i++) {
      result.push(nativeArray.objectAtIndex(i));
    }
  }
  return result;
};

const toJsonVariables = (nativeDictionary: NSDictionary<string, string>): Array<TNSParticleDeviceVariable> => {
  const result: Array<TNSParticleDeviceVariable> = [];
  if (nativeDictionary) {
    for (let i = 0; i < nativeDictionary.allKeys.count; i++) {
      const name = nativeDictionary.allKeys.objectAtIndex(i);
      const val = nativeDictionary.valueForKey(name);
      let type;
      switch (val) {
        case "int32":
          type = "INT";
          break;
        case "double":
          type = "DOUBLE";
          break;
        case "string":
          type = "STRING";
          break;
        default:
          console.log(`Unsupported type (${val}), falling back to STRING.`);
          type = "STRING";
      }
      result.push({name, type});
    }
  }
  return result;
};

class MyTNSParticleDevice implements TNSParticleDevice {
  id: string;
  name: string;
  status: string;
  type: TNSParticleDeviceType;
  functions: Array<string>;
  variables: Array<TNSParticleDeviceVariable>;

  constructor(public nativeDevice: ParticleDevice) {
    this.id = nativeDevice.id;
    this.name = nativeDevice.name;
    this.status = nativeDevice.status;
    this.type = getDeviceType(nativeDevice.type);
    this.functions = toJsArray(nativeDevice.functions);
    this.variables = toJsonVariables(nativeDevice.variables);
  }

  getVariable(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.nativeDevice.getVariableCompletion(
          name,
          (result, error) => error ? reject(error.localizedDescription) : resolve(result));
    });
  }

  callFunction(name: string, ...args): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        this.nativeDevice.callFunctionWithArgumentsCompletion(
            name,
            <any>args,
            (resultCode: number, error: NSError) => error ? reject(error.localizedDescription) : resolve(resultCode));
      } catch (e) {
        reject(e);
      }
    });
  }
}

export class Particle implements TNSParticleAPI {

  public login(options: TNSParticleLoginOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        ParticleCloud.sharedInstance().loginWithUserPasswordCompletion(
            options.username,
            options.password,
            (error: NSError) => error ? reject(error.localizedDescription) : resolve());
      } catch (e) {
        reject(e);
      }
    });
  }

  public logout(): void {
    ParticleCloud.sharedInstance().logout();
  }

  public listDevices(): Promise<Array<TNSParticleDevice>> {
    return new Promise((resolve, reject) => {
      ParticleCloud.sharedInstance().getDevices((particleDevices: NSArray<ParticleDevice>, error: NSError) => {
        if (error) {
          reject(error.localizedDescription);
          return;
        }

        const devices = [];
        for (let i = 0; i < particleDevices.count; i++) {
          devices.push(new MyTNSParticleDevice(particleDevices.objectAtIndex(i)));
        }
        resolve(devices);
      });
    });
  }
}
