export type TNSParticleDeviceType =
    "Unknown"
    | "Core"
    | "Photon"
    | "P1"
    | "Electron"
    | "RaspberryPi"
    | "DigistumpOak"
    | "RedBearDuo"
    | "Bluz"
    | "GFConical";

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
    case 7822:
      return "GFConical";
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
  connected : boolean;
  type: TNSParticleDeviceType;
  functions: Array<string>;
  variables: Array<TNSParticleDeviceVariable>;
  eventIds: number[];
  getVariable: (name: string) => Promise<any>;
  callFunction: (name: string, ...args) => Promise<number>;
  subscribe: (name: string, eventHandler: any) => void;
  unsubscribe: () => void;
}

export interface TNSParticleLoginOptions {
  username: string;
  password: string;
}

export interface TNSParticleAPI {
  login(options: TNSParticleLoginOptions): Promise<void>;
  loginWithToken(token: string): void;
  setOAuthConfig(id: string, secret: string): void;
  logout(): void;
  isAuthenticated(): boolean;
  accessToken(): string;
  listDevices(): Promise<Array<TNSParticleDevice>>;
  startDeviceSetupWizard(): Promise<boolean>;
  getDeviceSetupCustomizer(): any;
}

