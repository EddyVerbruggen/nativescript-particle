
declare class Event extends NSObject implements NSCopying {

	static alloc(): Event; // inherited from NSObject

	static new(): Event; // inherited from NSObject

	data: NSData;

	error: NSError;

	name: string;

	readyState: EventState;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class EventSource extends NSObject {

	static alloc(): EventSource; // inherited from NSObject

	static eventSourceWithURLTimeoutIntervalQueue(URL: NSURL, timeoutInterval: number, queue: NSObject): EventSource;

	static new(): EventSource; // inherited from NSObject

	constructor(o: { URL: NSURL; timeoutInterval: number; queue: NSObject; });

	addEventListenerHandler(eventName: string, handler: (p1: Event) => void): void;

	close(): void;

	initWithURLTimeoutIntervalQueue(URL: NSURL, timeoutInterval: number, queue: NSObject): this;

	onError(handler: (p1: Event) => void): void;

	onMessage(handler: (p1: Event) => void): void;

	onOpen(handler: (p1: Event) => void): void;

	removeEventListenerHandler(eventName: string, handler: (p1: Event) => void): void;
}

declare const enum EventState {

	kEventStateConnecting = 0,

	kEventStateOpen = 1,

	kEventStateClosed = 2
}

declare class KeychainHelper extends NSObject {

	static alloc(): KeychainHelper; // inherited from NSObject

	static keychainValueForKey(key: string): string;

	static new(): KeychainHelper; // inherited from NSObject

	static resetKeychainValueForKey(key: string): void;

	static setKeychainValueForKey(value: string, key: string): void;
}

declare class ParticleCloud extends NSObject {

	static alloc(): ParticleCloud; // inherited from NSObject

	static new(): ParticleCloud; // inherited from NSObject

	static sharedInstance(): ParticleCloud;

	readonly accessToken: string;

	readonly isAuthenticated: boolean;

	readonly isLoggedIn: boolean;

	readonly loggedInUsername: string;

	oAuthClientId: string;

	oAuthClientSecret: string;

	addDeviceToNetworkCompletion(deviceID: string, networkID: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	checkSimCompletion(iccid: string, completion: (p1: ParticleSimStatus, p2: NSError) => void): NSURLSessionDataTask;

	claimDeviceCompletion(deviceID: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	createCustomerPasswordProductIdAccountInfoCompletion(username: string, password: string, productId: number, accountInfo: NSDictionary<any, any>, completion: (p1: NSError) => void): NSURLSessionDataTask;

	createNetworkGatewayDeviceIDGatewayDeviceICCIDNetworkTypeCompletion(networkName: string, gatewayDeviceID: string, gatewayDeviceICCID: string, networkType: ParticleNetworkType, completion: (p1: ParticleNetwork, p2: NSError) => void): NSURLSessionDataTask;

	createUserPasswordAccountInfoCompletion(username: string, password: string, accountInfo: NSDictionary<any, any>, completion: (p1: NSError) => void): NSURLSessionDataTask;

	disableGatewayOnNetworkCompletion(deviceID: string, networkID: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	enableGatewayOnNetworkCompletion(deviceID: string, networkID: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	generateClaimCode(completion: (p1: string, p2: NSArray<any>, p3: NSError) => void): NSURLSessionDataTask;

	generateClaimCodeForOrganizationAndProductWithActivationCodeCompletion(orgSlug: string, productSlug: string, activationCode: string, completion: (p1: string, p2: NSArray<any>, p3: NSError) => void): NSURLSessionDataTask;

	generateClaimCodeForProductCompletion(productId: number, completion: (p1: string, p2: NSArray<any>, p3: NSError) => void): NSURLSessionDataTask;

	getCard(completion: (p1: string, p2: string, p3: number, p4: number, p5: string, p6: NSError) => void): NSURLSessionDataTask;

	getDeviceCompletion(deviceID: string, completion: (p1: ParticleDevice, p2: NSError) => void): NSURLSessionDataTask;

	getDevices(completion: (p1: NSArray<ParticleDevice>, p2: NSError) => void): NSURLSessionDataTask;

	getNetworkCompletion(idOrName: string, completion: (p1: ParticleNetwork, p2: NSError) => void): NSURLSessionDataTask;

	getNetworks(completion: (p1: NSArray<ParticleNetwork>, p2: NSError) => void): NSURLSessionDataTask;

	getNextBinaryCompletion(url: string, completion: (p1: string, p2: NSError) => void): NSURLSessionDataTask;

	getNextBinaryURLCurrentSystemFirmwareVersionCurrentNcpFirmwareVersionCurrentNcpFirmwareModuleVersionCompletion(deviceType: ParticleDeviceType, currentSystemFirmwareVersion: string, currentNcpFirmwareVersion: string, currentNcpFirmwareModuleVersion: number, completion: (p1: string, p2: NSError) => void): NSURLSessionDataTask;

	getPlatformIdCompletion(serialNumber: string, completion: (p1: number, p2: NSError) => void): NSURLSessionDataTask;

	getPricingImpactDeviceIDNetworkIDNetworkTypeIccidCompletion(action: ParticlePricingImpactAction, deviceID: string, networkID: string, networkType: ParticlePricingImpactNetworkType, iccid: string, completion: (p1: ParticlePricingInfo, p2: NSError) => void): NSURLSessionDataTask;

	getRecoveryMobileSecretMobileSecretCompletion(serialNumber: string, mobileSecret: string, completion: (p1: string, p2: NSError) => void): NSURLSessionDataTask;

	injectSessionAccessToken(accessToken: string): boolean;

	injectSessionAccessTokenWithExpiryDate(accessToken: string, expiryDate: Date): boolean;

	injectSessionAccessTokenWithExpiryDateAndRefreshToken(accessToken: string, expiryDate: Date, refreshToken: string): boolean;

	loginWithUserMfaTokenOTPTokenCompletion(user: string, mfaToken: string, otpToken: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	loginWithUserPasswordCompletion(user: string, password: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	logout(): void;

	publishEventWithNameDataIsPrivateTtlCompletion(eventName: string, data: string, isPrivate: boolean, ttl: number, completion: (p1: NSError) => void): NSURLSessionDataTask;

	removeDeviceFromNetworkCompletion(deviceID: string, networkID: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	removeDeviceNetworkInfoCompletion(deviceID: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	requestPasswordResetForCustomerEmailCompletion(orgSlug: string, email: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	requestPasswordResetForCustomerProductIdCompletion(email: string, productId: number, completion: (p1: NSError) => void): NSURLSessionDataTask;

	requestPasswordResetForUserCompletion(email: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	signupWithCustomerPasswordOrgSlugCompletion(username: string, password: string, orgSlug: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	signupWithUserPasswordCompletion(user: string, password: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	subscribeToAllEventsWithPrefixHandler(eventNamePrefix: string, eventHandler: (p1: ParticleEvent, p2: NSError) => void): any;

	subscribeToDeviceEventsWithPrefixDeviceIDHandler(eventNamePrefix: string, deviceID: string, eventHandler: (p1: ParticleEvent, p2: NSError) => void): any;

	subscribeToMyDevicesEventsWithPrefixHandler(eventNamePrefix: string, eventHandler: (p1: ParticleEvent, p2: NSError) => void): any;

	unsubscribeFromEventWithID(eventListenerID: any): void;

	updateSimActionDataLimitCountryCodeCardTokenCompletion(iccid: string, action: ParticleUpdateSimAction, dataLimit: number, countryCode: string, cardToken: string, completion: (p1: NSError) => void): NSURLSessionDataTask;
}

declare class ParticleDevice extends NSObject {

	static alloc(): ParticleDevice; // inherited from NSObject

	static new(): ParticleDevice; // inherited from NSObject

	readonly appHash: string;

	readonly connected: boolean;

	delegate: ParticleDeviceDelegate;

	readonly functions: NSArray<string>;

	readonly id: string;

	readonly imei: string;

	readonly isFlashing: boolean;

	readonly lastApp: string;

	readonly lastHeard: Date;

	readonly lastIPAdress: string;

	readonly lastIccid: string;

	name: string;

	readonly networkId: string;

	readonly networkRole: ParticleDeviceNetworkRole;

	readonly networkRoleState: ParticleDeviceNetworkRoleState;

	readonly networkState: ParticleDeviceNetworkState;

	readonly platformId: number;

	readonly productId: number;

	readonly requiresUpdate: boolean;

	readonly status: string;

	readonly type: ParticleDeviceType;

	readonly typeString: string;

	readonly variables: NSDictionary<string, string>;

	readonly version: string;

	constructor(o: { params: NSDictionary<any, any>; });

	__receivedSystemEvent(event: ParticleEvent): void;

	callFunctionWithArgumentsCompletion(functionName: string, args: NSArray<any> | any[], completion: (p1: number, p2: NSError) => void): NSURLSessionDataTask;

	flashFilesCompletion(filesDict: NSDictionary<any, any>, completion: (p1: NSError) => void): NSURLSessionDataTask;

	flashKnownAppCompletion(knownAppName: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	getCurrentDataUsage(completion: (p1: number, p2: NSError) => void): NSURLSessionDataTask;

	getVariableCompletion(variableName: string, completion: (p1: any, p2: NSError) => void): NSURLSessionDataTask;

	initWithParams(params: NSDictionary<any, any>): this;

	refresh(completion: (p1: NSError) => void): NSURLSessionDataTask;

	renameCompletion(newName: string, completion: (p1: NSError) => void): NSURLSessionDataTask;

	signalCompletion(enable: boolean, completion: (p1: NSError) => void): NSURLSessionDataTask;

	subscribeToEventsWithPrefixHandler(eventNamePrefix: string, eventHandler: (p1: ParticleEvent, p2: NSError) => void): any;

	unclaim(completion: (p1: NSError) => void): NSURLSessionDataTask;

	unsubscribeFromEventWithID(eventListenerID: any): void;
}

interface ParticleDeviceDelegate extends NSObjectProtocol {

	particleDeviceDidReceiveSystemEvent?(device: ParticleDevice, event: ParticleDeviceSystemEvent): void;
}
declare var ParticleDeviceDelegate: {

	prototype: ParticleDeviceDelegate;
};

declare const enum ParticleDeviceNetworkRole {

	StateGateway = 0,

	StateNode = 1
}

declare const enum ParticleDeviceNetworkRoleState {

	Pending = 0,

	PendingConfirmed = 1
}

declare const enum ParticleDeviceNetworkState {

	Pending = 0,

	Confirmed = 1
}

declare const enum ParticleDeviceSystemEvent {

	CameOnline = 0,

	WentOffline = 1,

	FlashStarted = 2,

	FlashSucceeded = 3,

	FlashFailed = 4,

	AppHashUpdated = 5,

	EnteredSafeMode = 6,

	SafeModeUpdater = 7
}

declare const enum ParticleDeviceType {

	Unknown = -1,

	Core = 0,

	Photon = 6,

	P1 = 8,

	Electron = 10,

	RaspberryPi = 31,

	RedBearDuo = 88,

	Bluz = 103,

	DigistumpOak = 82,

	ESP32 = 11,

	Argon = 12,

	Boron = 13,

	Xenon = 14,

	ASeries = 22,

	BSeries = 23,

	XSeries = 24
}

declare var ParticleErrorEvent: string;

declare class ParticleErrorHelper extends NSObject {

	static alloc(): ParticleErrorHelper; // inherited from NSObject

	static getErrorMessage(response: NSDictionary<any, any>): string;

	static getParticleErrorTaskCustomMessage(networkError: NSError, task: NSURLSessionDataTask, message: string): NSError;

	static new(): ParticleErrorHelper; // inherited from NSObject
}

declare class ParticleEvent extends NSObject {

	static alloc(): ParticleEvent; // inherited from NSObject

	static new(): ParticleEvent; // inherited from NSObject

	data: string;

	deviceID: string;

	event: string;

	time: Date;

	ttl: number;

	constructor(o: { eventDict: NSDictionary<any, any>; });

	initWithEventDict(eventDict: NSDictionary<any, any>): this;
}

declare var ParticleLogNotification: string;

declare var ParticleLogNotificationMessageKey: string;

declare var ParticleLogNotificationTypeKey: string;

declare const enum ParticleLogType {

	Error = 0,

	Info = 1,

	Debug = 2,

	Complete = 3
}

declare class ParticleLogger extends NSObject {

	static alloc(): ParticleLogger; // inherited from NSObject

	static logTypeStringFromInt(typeInt: number): string;

	static logTypeStringFromType(type: ParticleLogType): string;

	static new(): ParticleLogger; // inherited from NSObject

	static setIgnoreControls(list: NSArray<string> | string[]): void;

	static setLoggerLevel(level: ParticleLoggerLevel): void;

	static setLoggerLevelForControl(level: ParticleLoggerLevel, control: string): void;
}

declare const enum ParticleLoggerLevel {

	Off = -1,

	Error = 0,

	Info = 1,

	Debug = 2,

	Complete = 3
}

declare var ParticleMessageEvent: string;

declare class ParticleNetwork extends NSObject {

	static alloc(): ParticleNetwork; // inherited from NSObject

	static new(): ParticleNetwork; // inherited from NSObject

	readonly channel: number;

	readonly deviceCount: number;

	readonly gatewayCount: number;

	readonly id: string;

	readonly lastHeard: Date;

	readonly name: string;

	notes: string;

	readonly panId: string;

	readonly state: ParticleNetworkState;

	readonly type: ParticleNetworkType;

	readonly xpanId: string;

	constructor(o: { params: NSDictionary<any, any>; });

	initWithParams(params: NSDictionary<any, any>): this;

	refresh(completion: (p1: NSError) => void): NSURLSessionDataTask;
}

declare const enum ParticleNetworkState {

	Pending = 0,

	Confirmed = 1
}

declare const enum ParticleNetworkType {

	MicroWifi = 0,

	MicroCellular = 1,

	HighAvailability = 2,

	LargeSite = 3
}

declare var ParticleOpenEvent: string;

declare const enum ParticlePricingImpactAction {

	AddUserDevice = 0,

	AddNetworkDevice = 1,

	CreateNetwork = 2
}

declare const enum ParticlePricingImpactNetworkType {

	Wifi = 0,

	Cellular = 1
}

declare class ParticlePricingInfo extends NSObject {

	static alloc(): ParticlePricingInfo; // inherited from NSObject

	static new(): ParticlePricingInfo; // inherited from NSObject

	allowed: boolean;

	ccLast4: string;

	ccOnFile: boolean;

	chargeable: boolean;

	plan: ParticlePricingPlanInfo;

	planSlug: string;

	planUpgradeNeeded: boolean;

	constructor(o: { params: NSDictionary<any, any>; });

	initWithParams(params: NSDictionary<any, any>): this;
}

declare class ParticlePricingPlanInfo extends NSObject {

	static alloc(): ParticlePricingPlanInfo; // inherited from NSObject

	static new(): ParticlePricingPlanInfo; // inherited from NSObject

	freeDeviceMaxCount: number;

	freeDevicesAvailableCount: number;

	freeMonths: number;

	freeWifiNetworkMaxCount: number;

	freeWifiNetworksAvailableCount: number;

	includedDataMb: number;

	includedGatewayCount: number;

	includedNodeCount: number;

	monthlyBaseAmount: NSDecimalNumber;

	overageMinCostMb: NSDecimalNumber;

	constructor(o: { params: NSDictionary<any, any>; });

	initWithParams(params: NSDictionary<any, any>): this;
}

declare var ParticleSDKErrorLocalizedStringKey: string;

declare var ParticleSDKErrorResponseBodyKey: string;

declare class ParticleSession extends NSObject {

	static alloc(): ParticleSession; // inherited from NSObject

	static new(): ParticleSession; // inherited from NSObject

	readonly accessToken: string;

	delegate: ParticleSessionDelegate;

	readonly refreshToken: string;

	readonly username: string;

	constructor(o: { newSession: NSDictionary<any, any>; });

	constructor(o: { savedSession: void; });

	constructor(o: { token: string; });

	constructor(o: { token: string; andExpiryDate: Date; });

	constructor(o: { token: string; withExpiryDate: Date; withRefreshToken: string; });

	initWithNewSession(loginResponseDict: NSDictionary<any, any>): this;

	initWithSavedSession(): this;

	initWithToken(token: string): this;

	initWithTokenAndExpiryDate(token: string, expiryDate: Date): this;

	initWithTokenWithExpiryDateWithRefreshToken(token: string, expiryDate: Date, refreshToken: string): this;

	removeSession(): void;
}

interface ParticleSessionDelegate extends NSObjectProtocol {

	ParticleSessionDidExpireAt(session: ParticleSession, date: Date): void;
}
declare var ParticleSessionDelegate: {

	prototype: ParticleSessionDelegate;
};

declare const enum ParticleSimStatus {

	Error = 0,

	OK = 1,

	NotFound = 2,

	NotOwnedByUser = 3,

	Activated = 4,

	ActivatedFree = 5
}

declare const enum ParticleUpdateSimAction {

	Activate = 0,

	Deactivate = 1,

	Reactivate = 2,

	SetDataLimit = 3
}

declare var Particle_SDKVersionNumber: number;

declare var Particle_SDKVersionString: interop.Reference<number>;

declare var kParticleAPIBaseURL: string;

declare var kParticleAPIBaseURLVar: string;
