import { TNSParticleAPI, TNSParticleDevice, TNSParticleEvent, TNSParticleLoginOptions } from "./particle.common";
import * as utils from "tns-core-modules/utils/utils";
import { android as AndroidApp } from "tns-core-modules/application";

// keep this baby active while logged in as it holds state (our devices)
let worker;
let eventWorker;
let cbArr: any = undefined;

export class Particle implements TNSParticleAPI {

  eventIds: Array<any> = [];

  constructor() {
    io.particle.android.sdk.cloud.ParticleCloudSDK.init(utils.ad.getApplicationContext());
  }

  private initWorkerIfNeeded(): void {
    if (!worker) {
      if (global["TNS_WEBPACK"]) {
        const WorkerScript = require("nativescript-worker-loader!./particle-worker.js");
        worker = new WorkerScript();
      } else {
        worker = new Worker("./particle-worker.js");
      }
    }
  }

  private initEventWorkerIfNeeded(): void {
    if (!eventWorker) {
      if (global["TNS_WEBPACK"]) {
        const EventWorkerScript = require("nativescript-worker-loader!./particle-event-worker.js");
        eventWorker = new EventWorkerScript();
      } else {
        eventWorker = new Worker("./particle-event-worker.js");
      }
    }
  }

  public login(options: TNSParticleLoginOptions): Promise<void> {
    this.initWorkerIfNeeded();

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
  }

  public setOAuthConfig(id: string, secret: string): void {
    console.log("'setOAuthConfig' is not currently implemented on Android. Feel like doing a PR? :)");
  }

  public logout(): void {
    // no need for a worker here because there are no network calls involved
    io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().logOut();
    worker && worker.terminate();
    eventWorker && eventWorker.terminate();
  }

  public publish(name: string, data: string, isPrivate: boolean, ttl: number = 60): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.initWorkerIfNeeded();

      worker.postMessage({
        action: "publish",
        options: {
          name,
          data,
          isPrivate,
          ttl
        }
      });

      // 'publish' is fire & forget, so resolve immediately
      resolve();
    });
  }

  public subscribe(prefix: string, eventHandler: (event: TNSParticleEvent) => void): void {
    this.eventIds[prefix] = eventHandler; // TODO we're not actually using this
    console.dir(this.eventIds);

    this.initEventWorkerIfNeeded();

    eventWorker.postMessage({
      action: "subscribe",
      options: {
        prefix
      }
    });

    eventWorker.onmessage = msg => {
      if (eventHandler && msg.data.success) {
        eventHandler(msg.data.data);
      }
    };
  }

  public unsubscribe(): void {
    this.initEventWorkerIfNeeded();

    eventWorker.postMessage({
      action: "unsubscribe",
    });
    this.eventIds = [];
  }

  public listDevices(): Promise<Array<TNSParticleDevice>> {
    return new Promise<Array<TNSParticleDevice>>((resolve, reject) => {
      this.initWorkerIfNeeded();

      worker.postMessage({
        action: "listDevices"
      });


      worker.onmessage = msg => {
        if (msg.data.success) {
          const devices: Array<TNSParticleDevice> = msg.data.devices;
          // since the worker strips the functions, we're adding 'em back here as proxies to those implemented in the worker
          devices.map(device => {
            device.rename = (name: string): Promise<void> => this.renameDevice(device.id, name);
            device.callFunction = (name: string, args): Promise<number> => this.callFunction(device.id, name, args);
            device.getVariable = (name: string): Promise<any> => this.getVariable(device.id, name);
            device.subscribe = (prefix: string, eventHandler: (event: TNSParticleEvent) => void): void => this.subscribeDevice(device.id, prefix, eventHandler);
            device.unsubscribe = (): void => this.unsubscribeDevice(device.id);
          });

          // start event subscription worker and get device list
          this.initEventWorkerIfNeeded();

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

  private renameDevice(deviceId: string, name: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.initWorkerIfNeeded();

      worker.postMessage({
        action: "rename",
        options: {
          deviceId,
          name
        }
      });

      worker.onmessage = msg => msg.data.success ? resolve() : reject(msg.data.error);
    });
  }

  private callFunction(deviceId: string, name: string, args): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.initWorkerIfNeeded();

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
      this.initWorkerIfNeeded();

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

  private subscribeDevice(deviceId: string, prefix: string, eventHandler: (event: TNSParticleEvent) => void): void {
    if (cbArr === undefined) {
      cbArr = {};
    }
    cbArr[prefix] = eventHandler;
    console.dir(cbArr);

    this.initEventWorkerIfNeeded();

    eventWorker.postMessage({
      action: "subscribeDevice",
      options: {
        deviceId,
        prefix
      }
    });

    eventWorker.onmessage = (msg) => {
      if (msg.data.success) {
        // TODO return more than 'data'
        const d: TNSParticleEvent = msg.data.data;
        // TODO this won't work, because the prefix <> eventname
        // const cb = cbArr[d.name];
        // cb && cb(d);
        eventHandler && eventHandler(d);
      }
    };
  }

  private unsubscribeDevice(deviceId: string): void {
    this.initEventWorkerIfNeeded();

    eventWorker.postMessage({
      action: "unsubscribeDevice",
      options: {
        deviceId
      }
    });
    cbArr = undefined;
  }
}
