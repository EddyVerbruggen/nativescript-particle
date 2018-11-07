import { Observable } from "tns-core-modules/data/observable";
import { Particle, TNSParticleDevice, TNSParticleEvent } from "nativescript-particle";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { prompt } from "tns-core-modules/ui/dialogs";

/************ SET THESE FOR QUICK LOGIN ************/
const PARTICLE_USERNAME = "eddyverbruggen@gmail.com";
const PARTICLE_PASSWORD = "XS4alles";
/************ ALT LOGIN WITH TOKEN ************/
const PARTICLE_TOKEN = undefined;
/************ SET PARTICLE EVENT NAME ************/
const PARTICLE_DEVICE_EVENT_NAME = "beamStatus"; // this can be used in case the 'Publish' app is flashed onto the device
const PARTICLE_EVENT_NAME = "temp";
const PARTICLE_EVENT_NAME_ALT = "tempC";

/***************************************************/

export class HelloWorldModel extends Observable {
  private static MESSAGE_KEY = "message";
  private static LOGGED_IN_KEY = "loggedIn";
  private static SELECTED_DEVICE_KEY = "selectedDevice";
  private static SUBSCRIBE_BUTTON_KEY = "subButtonText";
  private static SUBSCRIBE_ALT_BUTTON_KEY = "subButtonTextAlt";
  private static SUBSCRIBE_DEVICE_BUTTON_KEY = "subDeviceButtonText";

  loggedIn: boolean = false;
  message: string = "Log in to get started";
  devices: ObservableArray<TNSParticleDevice> = new ObservableArray<TNSParticleDevice>();
  selectedDevice: TNSParticleDevice;
  subscribed: boolean = false;
  subscribedAlt: boolean = false;
  subscribedDevice: boolean = false;
  subButtonText: string = "Subscr.";
  subButtonTextAlt: string = "Subscr. alt";
  subDeviceButtonText: string = "Subscribe to Device Events";

  private particle: Particle;

  constructor() {
    super();
    this.particle = new Particle();
  }

  login(): void {
    if (PARTICLE_USERNAME && PARTICLE_PASSWORD) {
      this.doLogin(PARTICLE_USERNAME, PARTICLE_PASSWORD);
    } else if (PARTICLE_TOKEN) {
      console.log("login tap, go for loginwithtoken option");

      this.doLoginWithToken(PARTICLE_TOKEN);
    } else {
      prompt({
        title: "Particle username",
        message: "This is an e-mailaddress",
        inputType: "email",
        cancelButtonText: "cancel",
        okButtonText: "OK"
      }).then(usernameResult => {
        usernameResult.result && prompt({
          title: "Particle password",
          inputType: "password",
          cancelButtonText: "cancel",
          okButtonText: "OK"
        }).then(passwordResult => {
          passwordResult.result && this.doLogin(usernameResult.text, passwordResult.text);
        });
      });
    }
  }

  private doLogin(username: string, password: string): void {
    this.particle.login({username, password})
        .then(() => {
          this.set(HelloWorldModel.LOGGED_IN_KEY, true);
          this.set(HelloWorldModel.MESSAGE_KEY, "Logged in");
        })
        .catch(error => this.set(HelloWorldModel.MESSAGE_KEY, error));
  }

  private doLoginWithToken(token: string): void {
    this.particle.loginWithToken(PARTICLE_TOKEN);
    this.set(HelloWorldModel.LOGGED_IN_KEY, true);
    this.set(HelloWorldModel.MESSAGE_KEY, "Logged in");
  }

  logout(): void {
    this.particle.logout();
    this.devices.splice(0, this.devices.length);
    this.set(HelloWorldModel.LOGGED_IN_KEY, false);
    this.set(HelloWorldModel.SELECTED_DEVICE_KEY, undefined);
    this.set(HelloWorldModel.MESSAGE_KEY, "Logged out");
  }

  listDevices(): void {
    // reset
    this.devices.splice(0, this.devices.length);
    this.set(HelloWorldModel.SELECTED_DEVICE_KEY, undefined);

    this.particle.listDevices()
        .then(devices => {
          if (devices.length === 0) {
            this.set(HelloWorldModel.MESSAGE_KEY, "No devices have been claimed in this account. Go to particle.io for details.");
          } else {
            this.set(HelloWorldModel.MESSAGE_KEY, "Select a device below:");
          }
          this.devices.push(devices);
        })
        .catch(error => this.set(HelloWorldModel.MESSAGE_KEY, error));
  }

  onDeviceTap(args): void {
    this.set(HelloWorldModel.SELECTED_DEVICE_KEY, this.devices.getItem(args.index));
    this.set(HelloWorldModel.MESSAGE_KEY, `Selected '${this.selectedDevice.name}', now tap any of the functions or variables below`);
  }

  onFunctionTap(args): void {
    const fnc = this.selectedDevice.functions[args.index];
    prompt({
      title: fnc,
      message: "Enter a comma-sep list of commands to send to this function (fi: 'on').",
      cancelButtonText: "cancel",
      okButtonText: "Send!"
    }).then(paramsResult => {
      if (paramsResult.result) {
        const params: Array<string> = [];
        paramsResult.text.split(",").forEach(param => params.push(param.trim()));

        this.selectedDevice.callFunction(fnc, ...params)
            .then(result => this.set(HelloWorldModel.MESSAGE_KEY, `${fnc} result: ${result}`))
            .catch(error => this.set(HelloWorldModel.MESSAGE_KEY, error));
      }
    });
  }

  onVariableTap(args): void {
    const vari = this.selectedDevice.variables[args.index];
    this.selectedDevice.getVariable(vari.name)
        .then(result => this.set(HelloWorldModel.MESSAGE_KEY, `${vari.name} result: ${result}`))
        .catch(error => this.set(HelloWorldModel.MESSAGE_KEY, error));
  }

  onSubscribe(args): void {
    this.subscribed = !this.subscribed;
    this.set(HelloWorldModel.SUBSCRIBE_BUTTON_KEY, this.subscribed ? "Unsub." : "Subscr.");
    if (this.subscribed) {
      this.particle.subscribe(
          PARTICLE_EVENT_NAME,
          (event: TNSParticleEvent) => console.log(`global subscribe activity, eventdata: ${JSON.stringify(event)}`));
    } else {
      this.particle.unsubscribe(PARTICLE_EVENT_NAME);
    }
  }

  onSubscribeAlt(args): void {
    this.subscribedAlt = !this.subscribedAlt;
    this.set(HelloWorldModel.SUBSCRIBE_ALT_BUTTON_KEY, this.subscribedAlt ? "Unsub." : "Subscr. alt");
    if (this.subscribedAlt) {
      this.particle.subscribe(
          PARTICLE_EVENT_NAME_ALT,
          (event: TNSParticleEvent) => console.log(`global subscribe activity (alt), eventdata: ${JSON.stringify(event)}`));
    } else {
      this.particle.unsubscribe(PARTICLE_EVENT_NAME_ALT);
    }
  }

  onDeviceSubscribe(args): void {
    this.subscribedDevice = !this.subscribedDevice;
    this.set(HelloWorldModel.SUBSCRIBE_DEVICE_BUTTON_KEY, this.subscribedDevice ? "Unsubscribe" : "Subscribe to Device Events");
    if (this.subscribedDevice) {
      this.selectedDevice.subscribe(
          PARTICLE_DEVICE_EVENT_NAME,
          (event: TNSParticleEvent) => console.log(`device subscribe activity, eventdata: ${JSON.stringify(event)}`));
    } else {
      this.selectedDevice.unsubscribe(PARTICLE_DEVICE_EVENT_NAME);
    }
  }

  onPublish(): void {
    // you will catch this event only in 'onSubscribe'
    this.particle.publish(
        PARTICLE_EVENT_NAME,
        "Testing 1-2-3",
        true);
  }

  startwizard(): void {
    console.log("start wizard tapped");
    this.particle.startDeviceSetupWizard().then(success => console.log("wizard callback: " + success));
  }

  renameDevice(): void {
    prompt({
      title: `Rename '${this.selectedDevice.name}'`,
      message: "What should be the new name of this device?",
      cancelButtonText: "cancel",
      okButtonText: "Rename!"
    }).then(paramsResult => {
      if (paramsResult.result && paramsResult.text) {
        this.selectedDevice.rename(paramsResult.text.trim()).then(() => {
          this.set(HelloWorldModel.MESSAGE_KEY, `Device renamed from '${this.selectedDevice.name}' to '${paramsResult.text.trim()}'`);
          // added a little delay so that message above can be read
          setTimeout(() => this.listDevices(), 1000);
        });
      }
    });
  }
}
