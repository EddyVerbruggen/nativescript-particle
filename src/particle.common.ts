export type TNSParticleDeviceType =
    "Unknown"
    | "Core"
    | "Photon"
    | "P1"
    | "Electron"
    | "RaspberryPi"
    | "DigistumpOak"
    | "RedBearDuo"
    | "Bluz";

export type VariableType = "INT" | "DOUBLE" | "STRING";

export function getDeviceType(id: number): TNSParticleDeviceType {
  switch (id) {
    case 0:
      return "Core";
    case 6:
      return "Photon";
    case 8:
      return "P1";
    case 10:
      return "Electron";
    case 31:
      return "RaspberryPi";
    case 82:
      return "DigistumpOak";
    case 88:
      return "RedBearDuo";
    case 103:
      return "Bluz";
    default:
      console.log(`Unknown device type (id: ${id})`);
      return "Unknown";
  }
}

export interface TNSParticleDeviceVariable {
  name: string;
  type: VariableType;
}

export interface TNSParticleDevice {
  id: string;
  name: string;
  status: string;
  type: TNSParticleDeviceType;
  functions: Array<string>;
  variables: Array<TNSParticleDeviceVariable>;
  getVariable: (name: string) => Promise<any>;
  callFunction: (name: string, ...args) => Promise<number>;
}

export interface TNSParticleLoginOptions {
  username: string;
  password: string;
}

export interface TNSParticleAPI {
  login(options: TNSParticleLoginOptions): Promise<void>;

  logout(): void;

  listDevices(): Promise<Array<TNSParticleDevice>>;
}
