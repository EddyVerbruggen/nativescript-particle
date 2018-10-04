declare const enum NetworkStatus {

  NotReachable = 0,

  ReachableViaWiFi = 1,

  ReachableViaWWAN = 2
}

declare class ParticleConnectingProgressViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleConnectingProgressViewController; // inherited from NSObject

  static new(): ParticleConnectingProgressViewController; // inherited from NSObject

  channel: number;

  deviceID: string;

  needToClaimDevice: boolean;

  networkName: string;

  password: string;

  security: number;
}

declare class ParticleDiscoverDeviceViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleDiscoverDeviceViewController; // inherited from NSObject

  static new(): ParticleDiscoverDeviceViewController; // inherited from NSObject

  claimCode: string;

  claimedDevices: NSArray<any>;
}

declare class ParticleGetReadyViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleGetReadyViewController; // inherited from NSObject

  static new(): ParticleGetReadyViewController; // inherited from NSObject
}

declare class ParticleManualNetworkViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleManualNetworkViewController; // inherited from NSObject

  static new(): ParticleManualNetworkViewController; // inherited from NSObject

  deviceID: string;

  needToClaimDevice: boolean;
}

declare class ParticleSelectNetworkViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleSelectNetworkViewController; // inherited from NSObject

  static new(): ParticleSelectNetworkViewController; // inherited from NSObject

  delegate: ParticleSelectNetworkViewControllerDelegate;

  deviceID: string;

  needToClaimDevice: boolean;

  wifiList: NSArray<any>;
}

interface ParticleSelectNetworkViewControllerDelegate extends NSObjectProtocol {

  willPopBackToDeviceDiscovery(): void;
}

declare var ParticleSelectNetworkViewControllerDelegate: {

  prototype: ParticleSelectNetworkViewControllerDelegate;
};

declare class ParticleSetupCommManager extends NSObject {

  static alloc(): ParticleSetupCommManager; // inherited from NSObject

  static checkParticleDeviceWifiConnection(networkPrefix: string): boolean;

  static new(): ParticleSetupCommManager; // inherited from NSObject

  constructor(o: { networkPrefix: string; });

  configureAPPasscodeSecurityChannelCompletion(ssid: string, passcode: string, securityType: number, channel: number, completion: (p1: any, p2: NSError) => void): void;

  connectAP(completion: (p1: any, p2: NSError) => void): void;

  deviceID(completion: (p1: any, p2: NSError) => void): void;

  initWithNetworkPrefix(networkPrefix: string): this;

  publicKey(completion: (p1: any, p2: NSError) => void): void;

  scanAP(completion: (p1: any, p2: NSError) => void): void;

  setClaimCodeCompletion(claimCode: string, completion: (p1: any, p2: NSError) => void): void;

  version(completion: (p1: any, p2: NSError) => void): void;
}

declare class ParticleSetupConnection extends NSObject {

  static alloc(): ParticleSetupConnection; // inherited from NSObject

  static new(): ParticleSetupConnection; // inherited from NSObject

  delegate: ParticleSetupConnectionDelegate;

  readonly state: ParticleSetupConnectionState;

  constructor(o: { IPAddress: string; port: number; });

  close(): void;

  initWithIPAddressPort(IPAddr: string, port: number): this;

  writeStringCompletion(string: string, completion: (p1: NSError) => void): void;
}

interface ParticleSetupConnectionDelegate extends NSObjectProtocol {

  ParticleSetupConnectionDidReceiveData(connection: ParticleSetupConnection, data: string): void;

  ParticleSetupConnectionDidUpdateStateError?(connection: ParticleSetupConnection, state: ParticleSetupConnectionState, error: NSError): void;
}

declare var ParticleSetupConnectionDelegate: {

  prototype: ParticleSetupConnectionDelegate;
};

declare const enum ParticleSetupConnectionState {

  StateOpened = 0,

  StateClosed = 1,

  OpenTimeout = 2,

  StateError = 3,

  StateUnknown = 4
}

declare class ParticleSetupCustomization extends NSObject {

  static alloc(): ParticleSetupCustomization; // inherited from NSObject

  static new(): ParticleSetupCustomization; // inherited from NSObject

  static sharedInstance(): ParticleSetupCustomization;

  allowPasswordManager: boolean;

  allowSkipAuthentication: boolean;

  boldTextFontName: string;

  brandImage: UIImage;

  brandImageBackgroundColor: UIColor;

  brandImageBackgroundImage: UIImage;

  brandName: string;

  deviceName: string;

  disableLogOutOption: boolean;

  elementBackgroundColor: UIColor;

  elementTextColor: UIColor;

  fontSizeOffset: number;

  forgotPasswordHTMLFile: string;

  forgotPasswordLinkURL: NSURL;

  headerTextFontName: string;

  instructionalVideoFilename: string;

  lightStatusAndNavBar: boolean;

  linkTextColor: UIColor;

  listenModeLEDColorName: string;

  modeButtonName: string;

  networkNamePrefix: string;

  normalTextColor: UIColor;

  normalTextFontName: string;

  organization: boolean;

  organizationName: string;

  organizationSlug: string;

  pageBackgroundColor: UIColor;

  pageBackgroundImage: UIImage;

  privacyPolicyHTMLFile: string;

  privacyPolicyLinkURL: NSURL;

  productId: number;

  productImage: UIImage;

  productMode: boolean;

  productName: string;

  productSlug: string;

  skipAuthenticationMessage: string;

  termsOfServiceHTMLFile: string;

  termsOfServiceLinkURL: NSURL;

  tintSetupImages: boolean;

  troubleshootingHTMLFile: string;

  troubleshootingLinkURL: NSURL;
}

declare class ParticleSetupMainController extends UIViewController {

  static alloc(): ParticleSetupMainController; // inherited from NSObject

  static getResourcesBundle(): NSBundle;

  static getSetupStoryboard(): UIStoryboard;

  static loadImageFromResourceBundle(imageName: string): UIImage;

  static new(): ParticleSetupMainController; // inherited from NSObject

  delegate: UIViewController;

  constructor(o: { authenticationOnly: boolean; });

  constructor(o: { setupOnly: boolean; });

  initWithAuthenticationOnly(yesOrNo: boolean): this;

  initWithSetupOnly(yesOrNo: boolean): this;

  showSignupWithPredefinedActivationCode(activationCode: string): void;
}

interface ParticleSetupMainControllerDelegate {

  particleSetupViewControllerDidFinishWithResultDevice(controller: ParticleSetupMainController, result: ParticleSetupMainControllerResult, device: ParticleDevice): void;

  particleSetupViewControllerDidNotSucceeedWithDeviceID?(controller: ParticleSetupMainController, deviceID: string): void;
}

declare var ParticleSetupMainControllerDelegate: {

  prototype: ParticleSetupMainControllerDelegate;
};

declare const enum ParticleSetupMainControllerResult {

  Success = 1,

  UserCancel = 2,

  LoggedIn = 3,

  SkippedAuth = 4,

  SuccessNotClaimed = 5,

  SuccessDeviceOffline = 6,

  FailureClaiming = 7,

  FailureConfigure = 8,

  FailureCannotDisconnectFromDevice = 9,

  FailureLostConnectionToDevice = 10
}

declare class ParticleSetupPasswordEntryViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleSetupPasswordEntryViewController; // inherited from NSObject

  static new(): ParticleSetupPasswordEntryViewController; // inherited from NSObject

  channel: number;

  deviceID: string;

  needToClaimDevice: boolean;

  networkName: string;

  security: number;
}

declare class ParticleSetupResultViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleSetupResultViewController; // inherited from NSObject

  static new(): ParticleSetupResultViewController; // inherited from NSObject

  device: ParticleDevice;

  deviceID: string;

  setupResult: ParticleSetupMainControllerResult;
}

declare class ParticleSetupSecurityManager extends NSObject {

  static alloc(): ParticleSetupSecurityManager; // inherited from NSObject

  static decodeDataFromHexString(hexEncodedString: string): NSData;

  static encodeDataToHexString(buffer: NSData): string;

  static encryptWithPublicKeyPlainText(pubKey: any, plainText: NSData): NSData;

  static getPublicKey(): any;

  static new(): ParticleSetupSecurityManager; // inherited from NSObject

  static setPublicKey(rawASN1FormattedKey: NSData): boolean;
}

declare class ParticleSetupSpacerView extends UIView {

  static alloc(): ParticleSetupSpacerView; // inherited from NSObject

  static appearance(): ParticleSetupSpacerView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): ParticleSetupSpacerView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ParticleSetupSpacerView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ParticleSetupSpacerView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ParticleSetupSpacerView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ParticleSetupSpacerView; // inherited from UIAppearance

  static new(): ParticleSetupSpacerView; // inherited from NSObject
}

declare class ParticleSetupUIButton extends UIButton {

  static alloc(): ParticleSetupUIButton; // inherited from NSObject

  static appearance(): ParticleSetupUIButton; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): ParticleSetupUIButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ParticleSetupUIButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ParticleSetupUIButton; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ParticleSetupUIButton; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ParticleSetupUIButton; // inherited from UIAppearance

  static buttonWithType(buttonType: UIButtonType): ParticleSetupUIButton; // inherited from UIButton

  static new(): ParticleSetupUIButton; // inherited from NSObject

  type: string;
}

declare class ParticleSetupUILabel extends UILabel {

  static alloc(): ParticleSetupUILabel; // inherited from NSObject

  static appearance(): ParticleSetupUILabel; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): ParticleSetupUILabel; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ParticleSetupUILabel; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ParticleSetupUILabel; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ParticleSetupUILabel; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ParticleSetupUILabel; // inherited from UIAppearance

  static new(): ParticleSetupUILabel; // inherited from NSObject

  type: string;
}

declare class ParticleSetupUISpinner extends UIImageView {

  static alloc(): ParticleSetupUISpinner; // inherited from NSObject

  static appearance(): ParticleSetupUISpinner; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): ParticleSetupUISpinner; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ParticleSetupUISpinner; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ParticleSetupUISpinner; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ParticleSetupUISpinner; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ParticleSetupUISpinner; // inherited from UIAppearance

  static new(): ParticleSetupUISpinner; // inherited from NSObject

  type: string;

  constructor(o: { type: string; });

  initWithType(type: string): this;
}

declare class ParticleSetupUIViewController extends UIViewController {

  static alloc(): ParticleSetupUIViewController; // inherited from NSObject

  static new(): ParticleSetupUIViewController; // inherited from NSObject

  backgroundView: UIView;

  disableKeyboardMovesViewUp(): void;

  isValidEmail(checkString: string): boolean;

  trimTextFieldValue(textfield: UITextField): void;
}

declare var ParticleSetupVersionNumber: number;

declare var ParticleSetupVersionString: interop.Reference<number>;

declare class ParticleSetupVideoViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleSetupVideoViewController; // inherited from NSObject

  static new(): ParticleSetupVideoViewController; // inherited from NSObject

  videoFilePath: string;
}

declare class ParticleSetupWebViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleSetupWebViewController; // inherited from NSObject

  static new(): ParticleSetupWebViewController; // inherited from NSObject

  htmlFileDirectory: string;

  htmlFilename: string;

  link: NSURL;
}

declare const enum ParticleSetupWifiSecurityType {

  Open = 0,

  WEP_PSK = 1,

  WEP_SHARED = 32769,

  WPA_TKIP_PSK = 2097154,

  WPA_AES_PSK = 2097156,

  WPA2_AES_PSK = 4194308,

  WPA2_TKIP_PSK = 4194306,

  WPA2_MIXED_PSK = 4194310
}

declare class ParticleSetupWifiTableViewCell extends UITableViewCell {

  static alloc(): ParticleSetupWifiTableViewCell; // inherited from NSObject

  static appearance(): ParticleSetupWifiTableViewCell; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): ParticleSetupWifiTableViewCell; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ParticleSetupWifiTableViewCell; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ParticleSetupWifiTableViewCell; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ParticleSetupWifiTableViewCell; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ParticleSetupWifiTableViewCell; // inherited from UIAppearance

  static new(): ParticleSetupWifiTableViewCell; // inherited from NSObject

  securedNetworkIconImageView: UIImageView;

  ssidLabel: UILabel;

  wifiStrengthImageView: UIImageView;
}

declare class ParticleUserForgotPasswordViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleUserForgotPasswordViewController; // inherited from NSObject

  static new(): ParticleUserForgotPasswordViewController; // inherited from NSObject

  delegate: ParticleUserLoginDelegate;
}

interface ParticleUserLoginDelegate extends NSObjectProtocol {

  didFinishUserAuthenticationLoggedIn(sender: any, loggedIn: boolean): void;

  didRequestPasswordReset(sender: any): void;

  didRequestUserLogin(sender: any): void;

  didRequestUserSignup(sender: any): void;

  didTriggerMFAMfaTokenUsername(sender: any, mfaToken: string, username: string): void;
}

declare var ParticleUserLoginDelegate: {

  prototype: ParticleUserLoginDelegate;
};

declare class ParticleUserLoginViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleUserLoginViewController; // inherited from NSObject

  static new(): ParticleUserLoginViewController; // inherited from NSObject

  delegate: ParticleUserLoginDelegate;
}

declare class ParticleUserMFAViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleUserMFAViewController; // inherited from NSObject

  static new(): ParticleUserMFAViewController; // inherited from NSObject

  delegate: ParticleUserLoginDelegate;

  mfaToken: string;

  username: string;
}

declare class ParticleUserSignupViewController extends ParticleSetupUIViewController {

  static alloc(): ParticleUserSignupViewController; // inherited from NSObject

  static new(): ParticleUserSignupViewController; // inherited from NSObject

  delegate: ParticleUserLoginDelegate;

  predefinedActivationCode: string;
}

declare class Reachability extends NSObject {

  static alloc(): Reachability; // inherited from NSObject

  static new(): Reachability; // inherited from NSObject

  static reachabilityForInternetConnection(): Reachability;

  static reachabilityForLocalWiFi(): Reachability;

  static reachabilityWithAddress(hostAddress: interop.Pointer | interop.Reference<sockaddr_in>): Reachability;

  static reachabilityWithHostName(hostName: string): Reachability;

  connectionRequired(): boolean;

  currentReachabilityStatus(): NetworkStatus;

  startNotifier(): boolean;

  stopNotifier(): void;
}

declare var kParticleSetupConnectionEndpointAddress: string;

declare var kParticleSetupConnectionEndpointPort: number;

declare var kParticleSetupDidFailDeviceIDKey: string;

declare var kParticleSetupDidFinishDeviceKey: string;

declare var kParticleSetupDidFinishNotification: string;

declare var kParticleSetupDidFinishStateKey: string;

declare var kParticleSetupDidLogoutNotification: string;

declare var kReachabilityChangedNotification: string;
