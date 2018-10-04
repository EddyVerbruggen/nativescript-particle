# NativeScript Particle plugin

[![NPM version][npm-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-particle.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-particle
[npm-image]:https://img.shields.io/npm/v/nativescript-particle.svg
[npm-url]:https://npmjs.org/package/nativescript-particle
[downloads-image]:https://img.shields.io/npm/dm/nativescript-particle.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

<img src="https://github.com/EddyVerbruggen/nativescript-particle/raw/master/demo/app/images/particle-logo.png" width="250px" alt="Particle.io logo"/><br/>

## Prerequisites
Hop on over to [the Particle.io store](https://store.particle.io) and order any of their cool devices.

> While developing this plugin and the [demo app](demo/) I used a [Photon Kit](https://store.particle.io/collections/photon) and it was a joy to work with.
>
> Thanks, [Brandon Satrom](https://twitter.com/BrandonSatrom) for sending one over!

## Installation
```bash
tns plugin add nativescript-particle
```

## Demo app
If you want to just play with your Particle device without writing code yet,
follow these steps to install the demo app I've created with NativeScript Core:

```bash
git clone https://github.com/EddyVerbruggen/nativescript-particle
cd nativescript-particle/src
npm i
npm run demo.ios # or demo.android
``` 

> Tip: If you get tired entering your login credentials every time you log in, set the [`PARTICLE_USERNAME` and `PARTICLE_PASSWORD` properties to reflect your own](https://github.com/EddyVerbruggen/nativescript-particle/blob/618dea7d0a5d3c1cd9cb287e70142375547faa60/demo/app/main-view-model.ts#L7-L8).

Want to see the demo in action? Check out [this short video 📺](https://www.youtube.com/watch?v=c49mXdduyMo).

## API
All examples below assume you have these imports and instantiated the `Particle` class:
 
```typescript
import { Particle, TNSParticleDevice } from "nativescript-particle";
const particle = new Particle();
```

### `login`
Communication between your app and a device is HTTP (REST) based,
so the first step is authenticating yourself with the Particle Cloud:

```typescript
particle.login(
    {
      username: "my-particle-username@mydomain.com",
      password: "my-particle-password"
    })
    .then(() => console.log("Login successful"))
    .catch(error => console.log(`Login error: ${error}`));
```

### `logout`
Once done interacting with your device(s) it's best to log out as this will do a little cleanup in the plugin and underlying SDK.

There's no reason not to because it couldn't be easier:

```typescript
particle.logout();
```

### `listDevices`
Make sure you've claimed a device in your Particle account, then do this to list them in your app:

```typescript
particle.listDevices()
    .then((devices: Array<TNSParticleDevice>) => {
      if (devices.length === 0) {
        console.log("No devices have been claimed in this account.");
      } else {
        console.log("Devices fetched.. now do something neat with 'em.");
      }
    })
    .catch(error => console.log(`Error fetching devices: ${error}`));
```

The returned list of `TNSParticleDevice` objects has these properties and functions:

| Property | Type | Description |
| --- | --- | --- |
| id | `string` | The unique ID of this device. |
| name | `string` | The given name of this device. |
| status | `string` | The current status of the device, usually `normal`. |
| type | [`TNSParticleDeviceType`](https://github.com/EddyVerbruggen/nativescript-particle/blob/618dea7d0a5d3c1cd9cb287e70142375547faa60/src/particle.common.ts#L1-L10) | One of `Unknown`, `Core`, `Photon`, `P1`, `Electron`, `RaspberryPi`, `DigistumpOak`, `RedBearDuo`, `Bluz`. |
| functions | `Array<string>` | The list of functions currently available on the device. You can invoke these with `callFunction` (see below). |
| variables | `Array<`[`TNSParticleDeviceVariable`](https://github.com/EddyVerbruggen/nativescript-particle/blob/618dea7d0a5d3c1cd9cb287e70142375547faa60/src/particle.common.ts#L38-L41)`>` | The list of variables currently available on the device. You can get their values with `getVariable` (see below). |

#### `<device>.callFunction`
You can invoke any of the `functions` you discovered on the device.

As an example let's assume you've flashed [this code tutorial](https://docs.particle.io/guide/getting-started/examples/photon/#read-your-photoresistor-function-and-variable) to your device,
so there's a `led` function which takes 1 argument: the value must be either `"on"`, or `"off"`:

```typescript
const myDevice: TNSParticleDevice = null; // you got this from 'listDevices'

myDevice.callFunction("led", "on")
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.log(`Error in callFunction: ${error}`));
```

What if you have a function which takes multiple arguments? Let's assume you're using the [tinker app](https://docs.particle.io/guide/getting-started/examples/photon/#tinker) and want to set `"D7"` to `"HIGH"` via the `"digitalWrite"` function:

```typescript
myDevice.callFunction("digitalWrite", "D7", "HIGH")
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.log(`Error in callFunction: ${error}`));
```

#### `<device>.getVariable`
Getting a variable is quite similar to `callFunction`.

Let's say you have a variable named `"analogvalue"`, then this will give you the current state of that variable:

```typescript
const myDevice: TNSParticleDevice = null; // you got this from 'listDevices'

myDevice.getVariable("analogvalue")
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.log(`Error in getVariable: ${error}`));
```

## Thanks!
[markoImake](https://github.com/markoImake) for adding a few [very cool features](https://github.com/EddyVerbruggen/nativescript-particle/pull/2).


Happy IoT'ing! 🕹🤖🚪🖲💡📸🎙⛈🚦🛎🔊
