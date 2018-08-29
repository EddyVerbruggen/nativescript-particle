import { Observable } from "tns-core-modules/data/observable";
import { Particle, TNSParticleDevice } from "nativescript-particle";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { prompt } from "tns-core-modules/ui/dialogs";

/************ SET THESE FOR QUICK LOGIN ************/
const PARTICLE_USERNAME = undefined;
const PARTICLE_PASSWORD = undefined;
/***************************************************/

export class HelloWorldModel extends Observable {
  private static MESSAGE_KEY = "message";
  private static LOGGED_IN_KEY = "loggedIn";
  private static SELECTED_DEVICE_KEY = "selectedDevice";

  loggedIn: boolean = false;
  message: string = "Log in to get started";
  devices: ObservableArray<TNSParticleDevice> = new ObservableArray<TNSParticleDevice>();
  selectedDevice: TNSParticleDevice;

  private particle: Particle;

  constructor() {
    super();

    this.particle = new Particle();
  }

  login(): void {
    if (PARTICLE_USERNAME && PARTICLE_PASSWORD) {
      this.doLogin(PARTICLE_USERNAME, PARTICLE_PASSWORD);
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
    this.set(HelloWorldModel.MESSAGE_KEY, `Selected: ${this.selectedDevice.name}`);
  }

  onFunctionTap(args): void {
    const fnc = this.selectedDevice.functions[args.index];
    prompt({
      title: fnc,
      message: "Enter a comma-sep list of commands to send to this function",
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
}
