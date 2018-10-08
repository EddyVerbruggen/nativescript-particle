import { TNSParticleAPI, TNSParticleDevice, TNSParticleLoginOptions } from "./particle.common";
import * as utils from "tns-core-modules/utils/utils";
import { android as AndroidApp } from "tns-core-modules/application";

// keep this baby active while logged in as it holds state (our devices)
let worker;
let eventWorker;
let cbArr: any = undefined;

export class Particle implements TNSParticleAPI {

  constructor() {
    io.particle.android.sdk.cloud.ParticleCloudSDK.init(utils.ad.getApplicationContext());
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
    io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().setAccessToken(token);
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
    io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().logOut();
    if (worker) worker.terminate();
    if (eventWorker) eventWorker.terminate();
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

          // start event subscription worker and get device list
          if (!eventWorker) {
            if (global["TNS_WEBPACK"]) {
              const EventWorkerScript = require("nativescript-worker-loader!./particle-event-worker.js");
              eventWorker = new EventWorkerScript();
            } else {
              eventWorker = new Worker("./particle-event-worker.js");
            }
          }
          eventWorker.postMessage({
            action: "listDevices"
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
    eventWorker.postMessage({
      action: "unsubscribe",
      options: {
        deviceId
      }
    });
    cbArr = undefined;
  }

  private subscribe(deviceId: string, name: string, eventHandler: any): void {
    if (cbArr === undefined) {
      cbArr = {};
    }
    cbArr[name] = eventHandler;
    console.dir(cbArr);

    eventWorker.postMessage({
      action: "subscribe",
      options: {
        deviceId,
        name
      }
    });

    eventWorker.onmessage = (msg) => {
      if (msg.data.success) {
        const d = msg.data.data;
        // console.log(`${d.name}: ${d.data}`);
        const cb = cbArr[d.name];
        cb && cb(d.data);
      }
    };
  }

  public isAuthenticated(): boolean {
    return io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().isLoggedIn();
  }

  public accessToken(): string {
    return io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().getAccessToken();
  }

  public startDeviceSetupWizard(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // note that since we _have_ to return an intent, the activity is relaunched, so there's some state juggling required in the app
      const intent = AndroidApp.foregroundActivity.getIntent();
      io.particle.android.sdk.devicesetup.ParticleDeviceSetupLibrary.init(utils.ad.getApplicationContext());
      const builder = new io.particle.android.sdk.devicesetup.SetupCompleteIntentBuilder({
        buildIntent: (context: globalAndroid.content.Context, setupResult: io.particle.android.sdk.devicesetup.SetupResult): globalAndroid.content.Intent => {
          resolve(setupResult.wasSuccessful());
          return intent;
        }
      });

      io.particle.android.sdk.devicesetup.ParticleDeviceSetupLibrary.startDeviceSetup(utils.ad.getApplicationContext(), builder);
    });
  }

  public getDeviceSetupCustomizer(): any {
    // stub for getDeviceSetupCustomizer
  }
}
