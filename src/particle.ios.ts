import {
  getDeviceType,
  TNSParticleAPI,
  TNSParticleDevice,
  TNSParticleDeviceType,
  TNSParticleDeviceVariable,
  TNSParticleLoginOptions
} from "./particle.common";
import * as frameModule from 'tns-core-modules/ui/frame';

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
  eventIds: string[] = [];
  
  constructor(public nativeDevice: ParticleDevice) {
    this.id = nativeDevice.id;
    this.name = nativeDevice.name;
    this.status = nativeDevice.status;
    this.type = getDeviceType(nativeDevice.type);
    this.functions = toJsArray(nativeDevice.functions);
    this.variables = toJsonVariables(nativeDevice.variables);
  }

  getVariable(name: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.nativeDevice.getVariableCompletion(
          name,
          (result, error) => error ? reject(error.localizedDescription) : resolve(result));
    });
  }

  callFunction(name: string, ...args): Promise<number> {
    return new Promise<number>((resolve, reject) => {
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

  subscribe(name: string, eventHandler:any): void {
      const id = this.nativeDevice.subscribeToEventsWithPrefixHandler(name, (event: ParticleEvent, error: NSError) => {
        if (!error){
          if (event.data) eventHandler(event.data);
        } else {
          console.log(`Error subscribing to event: ${error}`);
        }
      });  
      this.eventIds.push(id);
  }

  unsubscribe(): void {
    this.eventIds.forEach(element => {
      this.nativeDevice.unsubscribeFromEventWithID(element);
    });
  }
}

export class Particle implements TNSParticleAPI {

  private wizardDelegate : ParticleSetupControllerDelegateImpl;

  public login(options: TNSParticleLoginOptions): Promise<void> {
    return new Promise<void>((resolve, reject) => {
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

  public loginWithToken(token: string): void {
    ParticleCloud.sharedInstance().injectSessionAccessToken(token);
  }

  public setOAuthConfig(id:string, secret:string): void{
    ParticleCloud.sharedInstance().oAuthClientId = id;
    ParticleCloud.sharedInstance().oAuthClientSecret = secret;
  }

  public logout(): void {
    ParticleCloud.sharedInstance().logout();
  }

  public isAuthenticated(): Boolean {
    return ParticleCloud.sharedInstance().isAuthenticated;
}
  
  public accessToken(): string {
      return ParticleCloud.sharedInstance().accessToken;
  }

  public listDevices(): Promise<Array<TNSParticleDevice>> {
    return new Promise<Array<TNSParticleDevice>>((resolve, reject) => {
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

  public startDeviceSetupWizard(finishHandler: any): void{
    console.log('Particle.startDeviceSetup');
    const setupController = new ParticleSetupMainController();
    this.wizardDelegate = new ParticleSetupControllerDelegateImpl();
    this.wizardDelegate.cb = finishHandler;
    setupController.delegate = this.wizardDelegate;
    var ctrl = frameModule.topmost().ios.controller;
    ctrl.navigationBarHidden = true;
    ctrl.pushViewControllerAnimated(setupController, true);
  }

  public getDeviceSetupCustomizer(): any{
    return ParticleSetupCustomization.sharedInstance();
  }
}


declare var ParticleSetupMainController : any;
declare var ParticleSetupCustomization : any;
class ParticleSetupControllerDelegateImpl extends NSObject implements ParticleSetupMainControllerDelegate {
  static ObjCProtocols = [ParticleSetupMainControllerDelegate] // define our native protocalls

  static new(): ParticleSetupControllerDelegateImpl {
      return <ParticleSetupControllerDelegateImpl>super.new() // calls new() on the NSObject
  }
  cb :any;

  public particleSetupViewControllerDidFinishWithResultDevice(controller, result, device){
      console.log('particleSetupViewControllerDidFinishWithResultDevice');
      
      if(this.cb){
          this.cb(result);
      }
  }
}
interface ParticleSetupMainControllerDelegate {
	particleSetupViewControllerDidFinishWithResultDevice(controller: any, result: any, device: any): void;
	particleSetupViewControllerDidNotSucceeedWithDeviceID?(controller: any, deviceID: string): void;
}
declare var ParticleSetupMainControllerDelegate: {
	prototype: ParticleSetupMainControllerDelegate;
};