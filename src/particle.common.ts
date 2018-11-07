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

export interface TNSParticleEvent {
  event: string;
  data: string;
  date: Date;
  deviceID: string;
}

export interface TNSParticleDevice {
  id: string;
  name: string;
  status: string;
  connected: boolean;
  type: TNSParticleDeviceType;
  functions: Array<string>;
  variables: Array<TNSParticleDeviceVariable>;
  eventIds: Array<any>;
  rename: (name: string) => Promise<void>;
  getVariable: (name: string) => Promise<any>;
  callFunction: (name: string, ...args) => Promise<number>;
  // TODO return an unsubscribe handler
  subscribe: (prefix: string, eventHandler: (event: TNSParticleEvent) => void) => void;
  unsubscribe: () => void;
}

export interface TNSParticleLoginOptions {
  username: string;
  password: string;
}

export interface TNSParticleAPI {
  eventIds: Array<any>;

  login(options: TNSParticleLoginOptions): Promise<void>;

  loginWithToken(token: string): void;

  setOAuthConfig(id: string, secret: string): void;

  logout(): void;

  isAuthenticated(): boolean;

  accessToken(): string;

  listDevices(): Promise<Array<TNSParticleDevice>>;

  startDeviceSetupWizard(): Promise<boolean>;

  getDeviceSetupCustomizer(): any;

  subscribe: (prefix: string, eventHandler: (event: TNSParticleEvent) => void) => void;

  unsubscribe: () => void;

  publish(name: string, data: string, isPrivate: boolean, ttl?: number): Promise<void>;
}

