require("globals"); // necessary to bootstrap tns modules on the new thread

import { MyTNSParticleDevice } from "./particle-worker-base";
import { TNSParticleDevice, TNSParticleLoginOptions } from "./particle.common";

let cachedDevices: Array<MyTNSParticleDevice>;

const login = (options: TNSParticleLoginOptions): void => {
  try {
    io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().logIn(options.username, options.password);
    (<any>global).postMessage({success: true});
  } catch (e) {
    (<any>global).postMessage({success: false, error: e.nativeException.getBestMessage()});
  }
};

const listDevices = (): void => {
  try {
    const particleDevices = io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().getDevices();
    cachedDevices = [];
    for (let i = 0; i < particleDevices.size(); i++) {
      cachedDevices.push(new MyTNSParticleDevice(particleDevices.get(i)));
    }
    (<any>global).postMessage({success: true, devices: cachedDevices});
  } catch (e) {
    (<any>global).postMessage({success: false, error: e.nativeException.getBestMessage()});
  }
};

const getVariable = (device: MyTNSParticleDevice, name: string): void => {
  device.getVariable(name)
      .then(result => ((<any>global).postMessage({success: true, result})))
      .catch(error => (<any>global).postMessage({success: false, error}));
};

const callFunction = (device: MyTNSParticleDevice, name: string, args): void => {
  device.callFunction(name, args)
      .then(result => (<any>global).postMessage({success: true, result: result}))
      .catch(error => (<any>global).postMessage({success: false, error}));
};

const renameDevice = (device: MyTNSParticleDevice, name: string): void => {
  device.rename(name)
      .then(result => (<any>global).postMessage({success: true}))
      .catch(error => (<any>global).postMessage({success: false, error}));
};

const publish = (name: string, data: string, isPrivate: boolean, ttl: number): void => {
  io.particle.android.sdk.cloud.ParticleCloudSDK.getCloud().publishEvent(
      name,
      data,
      isPrivate ? io.particle.android.sdk.cloud.ParticleEventVisibility.PRIVATE : io.particle.android.sdk.cloud.ParticleEventVisibility.PUBLIC,
      ttl);
};

const getDevice = (id: string): MyTNSParticleDevice => {
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
  } else if (request.action === "rename") {
    renameDevice(getDevice(request.options.deviceId), request.options.name);
    return;
  } else if (request.action === "callFunction") {
    callFunction(getDevice(request.options.deviceId), request.options.name, request.options.args);
    return;
  } else if (request.action === "getVariable") {
    getVariable(getDevice(request.options.deviceId), request.options.name);
    return;
  } else if (request.action === "publish") {
    publish(request.options.name, request.options.data, request.options.isPrivate, request.options.ttl);
    return;
  } else {
    (<any>global).postMessage({success: false, error: `Unsupported action sent to worker: '${request.action}'`});
  }
};
