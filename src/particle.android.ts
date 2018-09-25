import { TNSParticleAPI, TNSParticleDevice, TNSParticleLoginOptions } from "./particle.common";
import * as utils from "tns-core-modules/utils/utils";

// keep this baby active while logged in as it holds state (our devices)
let worker;

declare const io: any;
const ParticleCloudSDK = io.particle.android.sdk.cloud.ParticleCloudSDK;

export class Particle implements TNSParticleAPI {

  constructor() {
    ParticleCloudSDK.init(utils.ad.getApplicationContext());
    // ParticleCloudSDK.initWithOauthCredentialsProvider(utils.ad.getApplicationContext(),
    //   new OauthBasicAuthCredentialsProvider() {
    //       getClientId():string  {
    //           return 'xxxxx';
    //       }
    //       getClientSecret():string  {
    //           return 'xxxxx';
    //       }
    //   });
  }

  public login(options: TNSParticleLoginOptions): Promise<void> {
    if (global["TNS_WEBPACK"]) {
      const WorkerScript = require("nativescript-worker-loader!./particle-worker.js");
      worker = new WorkerScript();
    } else {
      worker = new Worker("./particle-worker.js");
    }

    return new Promise<void>((resolve, reject) => {
      worker.postMessage({
        action: "login",
        options
      });

      worker.onmessage = msg => msg.data.success ? resolve() : reject(msg.data.error);
    });
  }

  public loginWithToken(token: string): void {
    ParticleCloudSDK.getCloud().setAccessToken(token);
    if (global["TNS_WEBPACK"]) {
      const WorkerScript = require("nativescript-worker-loader!./particle-worker.js");
      worker = new WorkerScript();
    } else {
      worker = new Worker("./particle-worker.js");
    }
  }
 
  public setOAuthConfig(id: string, secret: string): void {

  }

  public logout(): void {
    // no need for a worker here because there are no network calls involved
    ParticleCloudSDK.getCloud().logOut();
    worker.terminate();
  }

  public listDevices(): Promise<Array<TNSParticleDevice>> {
    return new Promise<Array<TNSParticleDevice>>((resolve, reject) => {
      worker.postMessage({
        action: "listDevices"
      });

      worker.onmessage = msg => {
        if (msg.data.success) {
          const devices: Array<TNSParticleDevice> = msg.data.devices;
          // since the worker strips the functions, we're adding 'em back here as proxies to those implemented in the worker
          devices.map(device => {
            device.callFunction = (name: string, args): Promise<number> => this.callFunction(device.id, name, args);
            device.getVariable = (name: string): Promise<any> => this.getVariable(device.id, name);
            device.subscribe = (name: string, eventHandler: any): void => this.subscribe(device.id, name, eventHandler);
            device.unsubscribe = (): void => this.unsubscribe(device.id);
          });
          resolve(devices);
        } else {
          reject(msg.data.error);
        }
      };
    });
  }

  private callFunction(deviceId: string, name: string, args): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      worker.postMessage({
        action: "callFunction",
        options: {
          deviceId,
          name,
          args
        }
      });

      worker.onmessage = msg => msg.data.success ? resolve(msg.data.result) : reject(msg.data.error);
    });
  }

  private getVariable(deviceId: string, name: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      worker.postMessage({
        action: "getVariable",
        options: {
          deviceId,
          name
        }
      });

      worker.onmessage = msg => msg.data.success ? resolve(msg.data.result) : reject(msg.data.error);
    });
  }

  private unsubscribe(deviceId: string): void {
    worker.postMessage({
      action: "unsubscribe",
      options: { 
        deviceId}
    });
  }

  private subscribe(deviceId: string, name: string, eventHandler: any): void {
    worker.postMessage({
      action: "subscribe",
      options: { 
        deviceId,
        name
      }
    });

    worker.onmessage = (msg) => {
      if (msg.data.success) eventHandler(msg.data.data);
    }
  }

  public isAuthenticated(): Boolean {
    return ParticleCloudSDK.getCloud().isLoggedIn();
}
  
  public accessToken(): string {
    return ParticleCloudSDK.getCloud().getAccessToken();
  }

  public startDeviceSetupWizard(cb:any): void {
    console.log('stub for startDeviceSetupWizard');
  }

  public getDeviceSetupCustomizer(): any {
    console.log('stub for startDeviceSetupWizard');
  }
}
