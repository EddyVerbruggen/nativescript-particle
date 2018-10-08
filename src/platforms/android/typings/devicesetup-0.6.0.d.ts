/// <reference path="android-declarations.d.ts"/>

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class CreateAccountActivity extends io.particle.android.sdk.ui.BaseActivity {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.CreateAccountActivity>;
						public firstNameView: globalAndroid.widget.EditText;
						public lastNameView: globalAndroid.widget.EditText;
						public companyNameView: globalAndroid.widget.EditText;
						public emailView: globalAndroid.widget.EditText;
						public passwordView: globalAndroid.widget.EditText;
						public verifyPasswordView: globalAndroid.widget.EditText;
						public companyChoiceView: globalAndroid.widget.Switch;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public attemptCreateAccount(): void;
						public onCompanyCheckedChange(param0: boolean): void;
						public onHasAccountClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class CreateAccountActivity_ViewBinding {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.CreateAccountActivity_ViewBinding>;
						public constructor(param0: io.particle.android.sdk.accountsetup.CreateAccountActivity);
						public constructor(param0: io.particle.android.sdk.accountsetup.CreateAccountActivity, param1: globalAndroid.view.View);
						public unbind(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class LoginActivity extends io.particle.android.sdk.ui.BaseActivity {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.LoginActivity>;
						public emailView: globalAndroid.widget.EditText;
						public passwordView: globalAndroid.widget.EditText;
						public sparkCloud: io.particle.android.sdk.cloud.ParticleCloud;
						public constructor();
						public onPasswordEditorAction(param0: number): boolean;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public attemptLogin(): void;
						public afterInput(): void;
						public onPasswordResetClicked(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class LoginActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.accountsetup.LoginActivity> {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.LoginActivity_MembersInjector>;
						public static create(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>): dagger.MembersInjector<io.particle.android.sdk.accountsetup.LoginActivity>;
						public injectMembers(param0: io.particle.android.sdk.accountsetup.LoginActivity): void;
						public static injectSparkCloud(param0: io.particle.android.sdk.accountsetup.LoginActivity, param1: io.particle.android.sdk.cloud.ParticleCloud): void;
						public constructor(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class LoginActivity_ViewBinding {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.LoginActivity_ViewBinding>;
						public constructor(param0: io.particle.android.sdk.accountsetup.LoginActivity, param1: globalAndroid.view.View);
						public constructor(param0: io.particle.android.sdk.accountsetup.LoginActivity);
						public unbind(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class PasswordResetActivity extends io.particle.android.sdk.ui.BaseActivity {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.PasswordResetActivity>;
						public static EXTRA_EMAIL: string;
						public sparkCloud: io.particle.android.sdk.cloud.ParticleCloud;
						public emailView: globalAndroid.widget.EditText;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public static buildIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
						public onPasswordResetClicked(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class PasswordResetActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.accountsetup.PasswordResetActivity> {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.PasswordResetActivity_MembersInjector>;
						public static create(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>): dagger.MembersInjector<io.particle.android.sdk.accountsetup.PasswordResetActivity>;
						public injectMembers(param0: io.particle.android.sdk.accountsetup.PasswordResetActivity): void;
						public static injectSparkCloud(param0: io.particle.android.sdk.accountsetup.PasswordResetActivity, param1: io.particle.android.sdk.cloud.ParticleCloud): void;
						public constructor(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class PasswordResetActivity_ViewBinding {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.PasswordResetActivity_ViewBinding>;
						public constructor(param0: io.particle.android.sdk.accountsetup.PasswordResetActivity, param1: globalAndroid.view.View);
						public unbind(): void;
						public constructor(param0: io.particle.android.sdk.accountsetup.PasswordResetActivity);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class TwoFactorActivity extends io.particle.android.sdk.ui.BaseActivity {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.TwoFactorActivity>;
						public static EMAIL_EXTRA: string;
						public static PASSWORD_EXTRA: string;
						public static MFA_EXTRA: string;
						public sparkCloud: io.particle.android.sdk.cloud.ParticleCloud;
						public verificationCode: globalAndroid.widget.EditText;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onVerify(): void;
						public static buildIntent(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): globalAndroid.content.Intent;
						public onRecover(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class TwoFactorActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.accountsetup.TwoFactorActivity> {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.TwoFactorActivity_MembersInjector>;
						public injectMembers(param0: io.particle.android.sdk.accountsetup.TwoFactorActivity): void;
						public static injectSparkCloud(param0: io.particle.android.sdk.accountsetup.TwoFactorActivity, param1: io.particle.android.sdk.cloud.ParticleCloud): void;
						public constructor(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>);
						public static create(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>): dagger.MembersInjector<io.particle.android.sdk.accountsetup.TwoFactorActivity>;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module accountsetup {
					export class TwoFactorActivity_ViewBinding {
						public static class: java.lang.Class<io.particle.android.sdk.accountsetup.TwoFactorActivity_ViewBinding>;
						public constructor(param0: io.particle.android.sdk.accountsetup.TwoFactorActivity, param1: globalAndroid.view.View);
						public constructor(param0: io.particle.android.sdk.accountsetup.TwoFactorActivity);
						public unbind(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export class ApConnector {
						public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ApConnector>;
						public static CONNECT_TO_DEVICE_TIMEOUT_MILLIS: number;
						public connectToAP(param0: globalAndroid.net.wifi.WifiConfiguration, param1: io.particle.android.sdk.devicesetup.ApConnector.Client): io.particle.android.sdk.utils.SSID;
						public static buildUnsecuredConfig(param0: io.particle.android.sdk.utils.SSID): globalAndroid.net.wifi.WifiConfiguration;
						public stop(): void;
						public constructor(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.SoftAPConfigRemover, param2: io.particle.android.sdk.utils.WifiFacade);
					}
					export module ApConnector {
						export class Client {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ApConnector.Client>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.devicesetup.ApConnector$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onApConnectionSuccessful(param0: globalAndroid.net.wifi.WifiConfiguration): void;
								onApConnectionFailed(param0: globalAndroid.net.wifi.WifiConfiguration): void;
							});
							public constructor();
							public onApConnectionSuccessful(param0: globalAndroid.net.wifi.WifiConfiguration): void;
							public onApConnectionFailed(param0: globalAndroid.net.wifi.WifiConfiguration): void;
						}
						export class DecoratedClient extends io.particle.android.sdk.devicesetup.ApConnector.Client {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ApConnector.DecoratedClient>;
							public onApConnectionSuccessful(param0: globalAndroid.net.wifi.WifiConfiguration): void;
							public onApConnectionFailed(param0: globalAndroid.net.wifi.WifiConfiguration): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export class BuildConfig {
						public static class: java.lang.Class<io.particle.android.sdk.devicesetup.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export class ParticleDeviceSetupLibrary {
						public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ParticleDeviceSetupLibrary>;
						public static startDeviceSetup(param0: globalAndroid.content.Context): void;
						public static getInstance(): io.particle.android.sdk.devicesetup.ParticleDeviceSetupLibrary;
						public static initWithSetupOnly(param0: globalAndroid.content.Context): void;
						public getApplicationComponent(): io.particle.android.sdk.di.ApplicationComponent;
						public static startDeviceSetup(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.devicesetup.SetupCompleteIntentBuilder): void;
						public getSetupCompleteIntentBuilder(): io.particle.android.sdk.devicesetup.SetupCompleteIntentBuilder;
						public static init(param0: globalAndroid.content.Context, param1: java.lang.Class<any>): void;
						public static init(param0: globalAndroid.content.Context): void;
						public static startDeviceSetup(param0: globalAndroid.content.Context, param1: java.lang.Class<any>): void;
						public setComponent(param0: io.particle.android.sdk.di.ApplicationComponent): void;
					}
					export module ParticleDeviceSetupLibrary {
						export class DeviceSetupCompleteContract {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ParticleDeviceSetupLibrary.DeviceSetupCompleteContract>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.devicesetup.ParticleDeviceSetupLibrary$DeviceSetupCompleteContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static EXTRA_DEVICE_SETUP_WAS_SUCCESSFUL: string;
							public static EXTRA_CONFIGURED_DEVICE_ID: string;
							public static ACTION_DEVICE_SETUP_COMPLETE: string;
						}
						export abstract class DeviceSetupCompleteReceiver {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ParticleDeviceSetupLibrary.DeviceSetupCompleteReceiver>;
							public constructor();
							public onSetupFailure(): void;
							public unregister(param0: globalAndroid.content.Context): void;
							public buildIntentFilter(): globalAndroid.content.IntentFilter;
							public register(param0: globalAndroid.content.Context): void;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public onSetupSuccess(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export class R2 {
						public static class: java.lang.Class<io.particle.android.sdk.devicesetup.R2>;
						public constructor();
					}
					export module R2 {
						export class attr {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.R2.attr>;
							public static actionBarDivider: number;
							public static actionBarItemBackground: number;
							public static actionBarPopupTheme: number;
							public static actionBarSize: number;
							public static actionBarSplitStyle: number;
							public static actionBarStyle: number;
							public static actionBarTabBarStyle: number;
							public static actionBarTabStyle: number;
							public static actionBarTabTextStyle: number;
							public static actionBarTheme: number;
							public static actionBarWidgetTheme: number;
							public static actionButtonStyle: number;
							public static actionDropDownStyle: number;
							public static actionLayout: number;
							public static actionMenuTextAppearance: number;
							public static actionMenuTextColor: number;
							public static actionModeBackground: number;
							public static actionModeCloseButtonStyle: number;
							public static actionModeCloseDrawable: number;
							public static actionModeCopyDrawable: number;
							public static actionModeCutDrawable: number;
							public static actionModeFindDrawable: number;
							public static actionModePasteDrawable: number;
							public static actionModePopupWindowStyle: number;
							public static actionModeSelectAllDrawable: number;
							public static actionModeShareDrawable: number;
							public static actionModeSplitBackground: number;
							public static actionModeStyle: number;
							public static actionModeWebSearchDrawable: number;
							public static actionOverflowButtonStyle: number;
							public static actionOverflowMenuStyle: number;
							public static actionProviderClass: number;
							public static actionViewClass: number;
							public static activityChooserViewStyle: number;
							public static alertDialogButtonGroupStyle: number;
							public static alertDialogCenterButtons: number;
							public static alertDialogStyle: number;
							public static alertDialogTheme: number;
							public static allowStacking: number;
							public static alpha: number;
							public static alphabeticModifiers: number;
							public static arrowHeadLength: number;
							public static arrowShaftLength: number;
							public static autoCompleteTextViewStyle: number;
							public static autoSizeMaxTextSize: number;
							public static autoSizeMinTextSize: number;
							public static autoSizePresetSizes: number;
							public static autoSizeStepGranularity: number;
							public static autoSizeTextType: number;
							public static background: number;
							public static backgroundSplit: number;
							public static backgroundStacked: number;
							public static backgroundTint: number;
							public static backgroundTintMode: number;
							public static barLength: number;
							public static borderlessButtonStyle: number;
							public static buttonBarButtonStyle: number;
							public static buttonBarNegativeButtonStyle: number;
							public static buttonBarNeutralButtonStyle: number;
							public static buttonBarPositiveButtonStyle: number;
							public static buttonBarStyle: number;
							public static buttonGravity: number;
							public static buttonIconDimen: number;
							public static buttonPanelSideLayout: number;
							public static buttonStyle: number;
							public static buttonStyleSmall: number;
							public static buttonTint: number;
							public static buttonTintMode: number;
							public static checkboxStyle: number;
							public static checkedTextViewStyle: number;
							public static closeIcon: number;
							public static closeItemLayout: number;
							public static collapseContentDescription: number;
							public static collapseIcon: number;
							public static color: number;
							public static colorAccent: number;
							public static colorBackgroundFloating: number;
							public static colorButtonNormal: number;
							public static colorControlActivated: number;
							public static colorControlHighlight: number;
							public static colorControlNormal: number;
							public static colorError: number;
							public static colorPrimary: number;
							public static colorPrimaryDark: number;
							public static colorSwitchThumbNormal: number;
							public static commitIcon: number;
							public static contentDescription: number;
							public static contentInsetEnd: number;
							public static contentInsetEndWithActions: number;
							public static contentInsetLeft: number;
							public static contentInsetRight: number;
							public static contentInsetStart: number;
							public static contentInsetStartWithNavigation: number;
							public static controlBackground: number;
							public static coordinatorLayoutStyle: number;
							public static customNavigationLayout: number;
							public static defaultQueryHint: number;
							public static dialogPreferredPadding: number;
							public static dialogTheme: number;
							public static displayOptions: number;
							public static divider: number;
							public static dividerHorizontal: number;
							public static dividerPadding: number;
							public static dividerVertical: number;
							public static drawableSize: number;
							public static drawerArrowStyle: number;
							public static dropDownListViewStyle: number;
							public static dropdownListPreferredItemHeight: number;
							public static editTextBackground: number;
							public static editTextColor: number;
							public static editTextStyle: number;
							public static elevation: number;
							public static expandActivityOverflowButtonDrawable: number;
							public static fastScrollEnabled: number;
							public static fastScrollHorizontalThumbDrawable: number;
							public static fastScrollHorizontalTrackDrawable: number;
							public static fastScrollVerticalThumbDrawable: number;
							public static fastScrollVerticalTrackDrawable: number;
							public static font: number;
							public static fontFamily: number;
							public static fontPath: number;
							public static fontProviderAuthority: number;
							public static fontProviderCerts: number;
							public static fontProviderFetchStrategy: number;
							public static fontProviderFetchTimeout: number;
							public static fontProviderPackage: number;
							public static fontProviderQuery: number;
							public static fontStyle: number;
							public static fontWeight: number;
							public static gapBetweenBars: number;
							public static goIcon: number;
							public static height: number;
							public static hideOnContentScroll: number;
							public static homeAsUpIndicator: number;
							public static homeLayout: number;
							public static icon: number;
							public static iconTint: number;
							public static iconTintMode: number;
							public static iconifiedByDefault: number;
							public static imageButtonStyle: number;
							public static indeterminateProgressStyle: number;
							public static initialActivityCount: number;
							public static isLightTheme: number;
							public static itemPadding: number;
							public static keylines: number;
							public static layout: number;
							public static layoutManager: number;
							public static layout_anchor: number;
							public static layout_anchorGravity: number;
							public static layout_behavior: number;
							public static layout_dodgeInsetEdges: number;
							public static layout_insetEdge: number;
							public static layout_keyline: number;
							public static listChoiceBackgroundIndicator: number;
							public static listDividerAlertDialog: number;
							public static listItemLayout: number;
							public static listLayout: number;
							public static listMenuViewStyle: number;
							public static listPopupWindowStyle: number;
							public static listPreferredItemHeight: number;
							public static listPreferredItemHeightLarge: number;
							public static listPreferredItemHeightSmall: number;
							public static listPreferredItemPaddingLeft: number;
							public static listPreferredItemPaddingRight: number;
							public static logo: number;
							public static logoDescription: number;
							public static maxButtonHeight: number;
							public static measureWithLargestChild: number;
							public static multiChoiceItemLayout: number;
							public static navigationContentDescription: number;
							public static navigationIcon: number;
							public static navigationMode: number;
							public static numericModifiers: number;
							public static overlapAnchor: number;
							public static paddingBottomNoButtons: number;
							public static paddingEnd: number;
							public static paddingStart: number;
							public static paddingTopNoTitle: number;
							public static panelBackground: number;
							public static panelMenuListTheme: number;
							public static panelMenuListWidth: number;
							public static popupMenuStyle: number;
							public static popupTheme: number;
							public static popupWindowStyle: number;
							public static preserveIconSpacing: number;
							public static progressBarPadding: number;
							public static progressBarStyle: number;
							public static queryBackground: number;
							public static queryHint: number;
							public static radioButtonStyle: number;
							public static ratingBarStyle: number;
							public static ratingBarStyleIndicator: number;
							public static ratingBarStyleSmall: number;
							public static reverseLayout: number;
							public static searchHintIcon: number;
							public static searchIcon: number;
							public static searchViewStyle: number;
							public static seekBarStyle: number;
							public static selectableItemBackground: number;
							public static selectableItemBackgroundBorderless: number;
							public static showAsAction: number;
							public static showDividers: number;
							public static showText: number;
							public static showTitle: number;
							public static singleChoiceItemLayout: number;
							public static spanCount: number;
							public static spinBars: number;
							public static spinnerDropDownItemStyle: number;
							public static spinnerStyle: number;
							public static splitTrack: number;
							public static srcCompat: number;
							public static stackFromEnd: number;
							public static state_above_anchor: number;
							public static statusBarBackground: number;
							public static subMenuArrow: number;
							public static submitBackground: number;
							public static subtitle: number;
							public static subtitleTextAppearance: number;
							public static subtitleTextColor: number;
							public static subtitleTextStyle: number;
							public static suggestionRowLayout: number;
							public static switchMinWidth: number;
							public static switchPadding: number;
							public static switchStyle: number;
							public static switchTextAppearance: number;
							public static textAllCaps: number;
							public static textAppearanceLargePopupMenu: number;
							public static textAppearanceListItem: number;
							public static textAppearanceListItemSecondary: number;
							public static textAppearanceListItemSmall: number;
							public static textAppearancePopupMenuHeader: number;
							public static textAppearanceSearchResultSubtitle: number;
							public static textAppearanceSearchResultTitle: number;
							public static textAppearanceSmallPopupMenu: number;
							public static textColorAlertDialogListItem: number;
							public static textColorSearchUrl: number;
							public static theme: number;
							public static thickness: number;
							public static thumbTextPadding: number;
							public static thumbTint: number;
							public static thumbTintMode: number;
							public static tickMark: number;
							public static tickMarkTint: number;
							public static tickMarkTintMode: number;
							public static tint: number;
							public static tintMode: number;
							public static title: number;
							public static titleMargin: number;
							public static titleMarginBottom: number;
							public static titleMarginEnd: number;
							public static titleMarginStart: number;
							public static titleMarginTop: number;
							public static titleMargins: number;
							public static titleTextAppearance: number;
							public static titleTextColor: number;
							public static titleTextStyle: number;
							public static toolbarNavigationButtonStyle: number;
							public static toolbarStyle: number;
							public static tooltipForegroundColor: number;
							public static tooltipFrameBackground: number;
							public static tooltipText: number;
							public static track: number;
							public static trackTint: number;
							public static trackTintMode: number;
							public static viewInflaterClass: number;
							public static voiceIcon: number;
							public static windowActionBar: number;
							public static windowActionBarOverlay: number;
							public static windowActionModeOverlay: number;
							public static windowFixedHeightMajor: number;
							public static windowFixedHeightMinor: number;
							public static windowFixedWidthMajor: number;
							public static windowFixedWidthMinor: number;
							public static windowMinWidthMajor: number;
							public static windowMinWidthMinor: number;
							public static windowNoTitle: number;
							public constructor();
						}
						export class bool {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.R2.bool>;
							public static abc_action_bar_embed_tabs: number;
							public static abc_allow_stacked_button_bar: number;
							public static abc_config_actionMenuItemAllCaps: number;
							public static abc_config_closeDialogWhenTouchOutside: number;
							public static abc_config_showMenuShortcutsWhenKeyboardPresent: number;
							public static organization: number;
							public static productMode: number;
							public static show_sign_up_page_fine_print: number;
							public constructor();
						}
						export class color {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.R2.color>;
							public static abc_background_cache_hint_selector_material_dark: number;
							public static abc_background_cache_hint_selector_material_light: number;
							public static abc_btn_colored_borderless_text_material: number;
							public static abc_btn_colored_text_material: number;
							public static abc_color_highlight_material: number;
							public static abc_hint_foreground_material_dark: number;
							public static abc_hint_foreground_material_light: number;
							public static abc_input_method_navigation_guard: number;
							public static abc_primary_text_disable_only_material_dark: number;
							public static abc_primary_text_disable_only_material_light: number;
							public static abc_primary_text_material_dark: number;
							public static abc_primary_text_material_light: number;
							public static abc_search_url_text: number;
							public static abc_search_url_text_normal: number;
							public static abc_search_url_text_pressed: number;
							public static abc_search_url_text_selected: number;
							public static abc_secondary_text_material_dark: number;
							public static abc_secondary_text_material_light: number;
							public static abc_tint_btn_checkable: number;
							public static abc_tint_default: number;
							public static abc_tint_edittext: number;
							public static abc_tint_seek_thumb: number;
							public static abc_tint_spinner: number;
							public static abc_tint_switch_thumb: number;
							public static abc_tint_switch_track: number;
							public static accent_color: number;
							public static accent_material_dark: number;
							public static accent_material_light: number;
							public static background_floating_material_dark: number;
							public static background_floating_material_light: number;
							public static background_material_dark: number;
							public static background_material_light: number;
							public static brand_image_background_color: number;
							public static bright_foreground_disabled_material_dark: number;
							public static bright_foreground_disabled_material_light: number;
							public static bright_foreground_inverse_material_dark: number;
							public static bright_foreground_inverse_material_light: number;
							public static bright_foreground_material_dark: number;
							public static bright_foreground_material_light: number;
							public static button_material_dark: number;
							public static button_material_light: number;
							public static dim_foreground_disabled_material_dark: number;
							public static dim_foreground_disabled_material_light: number;
							public static dim_foreground_material_dark: number;
							public static dim_foreground_material_light: number;
							public static element_background_color: number;
							public static element_background_color_dark: number;
							public static element_text_color: number;
							public static element_text_disabled_color: number;
							public static element_tint_color: number;
							public static error_color_material: number;
							public static error_text_color: number;
							public static foreground_material_dark: number;
							public static foreground_material_light: number;
							public static form_field_background: number;
							public static form_field_background_color: number;
							public static highlighted_text_material_dark: number;
							public static highlighted_text_material_light: number;
							public static link_text_bg: number;
							public static link_text_color: number;
							public static material_blue_grey_800: number;
							public static material_blue_grey_900: number;
							public static material_blue_grey_950: number;
							public static material_deep_teal_200: number;
							public static material_deep_teal_500: number;
							public static material_grey_100: number;
							public static material_grey_300: number;
							public static material_grey_50: number;
							public static material_grey_600: number;
							public static material_grey_800: number;
							public static material_grey_850: number;
							public static material_grey_900: number;
							public static normal_text_color: number;
							public static notification_action_color_filter: number;
							public static notification_icon_bg_color: number;
							public static notification_material_background_media_default_color: number;
							public static page_background_color: number;
							public static primary_color: number;
							public static primary_color_dark: number;
							public static primary_dark_material_dark: number;
							public static primary_dark_material_light: number;
							public static primary_material_dark: number;
							public static primary_material_light: number;
							public static primary_text_default_material_dark: number;
							public static primary_text_default_material_light: number;
							public static primary_text_disabled_material_dark: number;
							public static primary_text_disabled_material_light: number;
							public static register_field_background_color_disabled: number;
							public static register_field_background_color_enabled: number;
							public static ripple_material_dark: number;
							public static ripple_material_light: number;
							public static secondary_text_default_material_dark: number;
							public static secondary_text_default_material_light: number;
							public static secondary_text_disabled_material_dark: number;
							public static secondary_text_disabled_material_light: number;
							public static shaded_background: number;
							public static switch_thumb_disabled_material_dark: number;
							public static switch_thumb_disabled_material_light: number;
							public static switch_thumb_material_dark: number;
							public static switch_thumb_material_light: number;
							public static switch_thumb_normal_material_dark: number;
							public static switch_thumb_normal_material_light: number;
							public static system_bar_bg: number;
							public static tooltip_background_dark: number;
							public static tooltip_background_light: number;
							public constructor();
						}
						export class dimen {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.R2.dimen>;
							public static abc_action_bar_content_inset_material: number;
							public static abc_action_bar_content_inset_with_nav: number;
							public static abc_action_bar_default_height_material: number;
							public static abc_action_bar_default_padding_end_material: number;
							public static abc_action_bar_default_padding_start_material: number;
							public static abc_action_bar_elevation_material: number;
							public static abc_action_bar_icon_vertical_padding_material: number;
							public static abc_action_bar_overflow_padding_end_material: number;
							public static abc_action_bar_overflow_padding_start_material: number;
							public static abc_action_bar_progress_bar_size: number;
							public static abc_action_bar_stacked_max_height: number;
							public static abc_action_bar_stacked_tab_max_width: number;
							public static abc_action_bar_subtitle_bottom_margin_material: number;
							public static abc_action_bar_subtitle_top_margin_material: number;
							public static abc_action_button_min_height_material: number;
							public static abc_action_button_min_width_material: number;
							public static abc_action_button_min_width_overflow_material: number;
							public static abc_alert_dialog_button_bar_height: number;
							public static abc_alert_dialog_button_dimen: number;
							public static abc_button_inset_horizontal_material: number;
							public static abc_button_inset_vertical_material: number;
							public static abc_button_padding_horizontal_material: number;
							public static abc_button_padding_vertical_material: number;
							public static abc_cascading_menus_min_smallest_width: number;
							public static abc_config_prefDialogWidth: number;
							public static abc_control_corner_material: number;
							public static abc_control_inset_material: number;
							public static abc_control_padding_material: number;
							public static abc_dialog_fixed_height_major: number;
							public static abc_dialog_fixed_height_minor: number;
							public static abc_dialog_fixed_width_major: number;
							public static abc_dialog_fixed_width_minor: number;
							public static abc_dialog_list_padding_bottom_no_buttons: number;
							public static abc_dialog_list_padding_top_no_title: number;
							public static abc_dialog_min_width_major: number;
							public static abc_dialog_min_width_minor: number;
							public static abc_dialog_padding_material: number;
							public static abc_dialog_padding_top_material: number;
							public static abc_dialog_title_divider_material: number;
							public static abc_disabled_alpha_material_dark: number;
							public static abc_disabled_alpha_material_light: number;
							public static abc_dropdownitem_icon_width: number;
							public static abc_dropdownitem_text_padding_left: number;
							public static abc_dropdownitem_text_padding_right: number;
							public static abc_edit_text_inset_bottom_material: number;
							public static abc_edit_text_inset_horizontal_material: number;
							public static abc_edit_text_inset_top_material: number;
							public static abc_floating_window_z: number;
							public static abc_list_item_padding_horizontal_material: number;
							public static abc_panel_menu_list_width: number;
							public static abc_progress_bar_height_material: number;
							public static abc_search_view_preferred_height: number;
							public static abc_search_view_preferred_width: number;
							public static abc_seekbar_track_background_height_material: number;
							public static abc_seekbar_track_progress_height_material: number;
							public static abc_select_dialog_padding_start_material: number;
							public static abc_switch_padding: number;
							public static abc_text_size_body_1_material: number;
							public static abc_text_size_body_2_material: number;
							public static abc_text_size_button_material: number;
							public static abc_text_size_caption_material: number;
							public static abc_text_size_display_1_material: number;
							public static abc_text_size_display_2_material: number;
							public static abc_text_size_display_3_material: number;
							public static abc_text_size_display_4_material: number;
							public static abc_text_size_headline_material: number;
							public static abc_text_size_large_material: number;
							public static abc_text_size_medium_material: number;
							public static abc_text_size_menu_header_material: number;
							public static abc_text_size_menu_material: number;
							public static abc_text_size_small_material: number;
							public static abc_text_size_subhead_material: number;
							public static abc_text_size_subtitle_material_toolbar: number;
							public static abc_text_size_title_material: number;
							public static abc_text_size_title_material_toolbar: number;
							public static activity_horizontal_margin: number;
							public static activity_vertical_margin: number;
							public static brand_image_size: number;
							public static compat_button_inset_horizontal_material: number;
							public static compat_button_inset_vertical_material: number;
							public static compat_button_padding_horizontal_material: number;
							public static compat_button_padding_vertical_material: number;
							public static compat_control_corner_material: number;
							public static content_width: number;
							public static disabled_alpha_material_dark: number;
							public static disabled_alpha_material_light: number;
							public static edittext_form_element_gap: number;
							public static fastscroll_default_thickness: number;
							public static fastscroll_margin: number;
							public static fastscroll_minimum_range: number;
							public static highlight_alpha_material_colored: number;
							public static highlight_alpha_material_dark: number;
							public static highlight_alpha_material_light: number;
							public static hint_alpha_material_dark: number;
							public static hint_alpha_material_light: number;
							public static hint_pressed_alpha_material_dark: number;
							public static hint_pressed_alpha_material_light: number;
							public static item_touch_helper_max_drag_scroll_per_frame: number;
							public static item_touch_helper_swipe_escape_max_velocity: number;
							public static item_touch_helper_swipe_escape_velocity: number;
							public static material_text_size_body_button: number;
							public static material_text_size_caption: number;
							public static material_text_size_display1: number;
							public static material_text_size_display2: number;
							public static material_text_size_display3: number;
							public static material_text_size_display4: number;
							public static material_text_size_headline: number;
							public static material_text_size_subhead: number;
							public static material_text_size_title: number;
							public static notification_action_icon_size: number;
							public static notification_action_text_size: number;
							public static notification_big_circle_margin: number;
							public static notification_content_margin_start: number;
							public static notification_large_icon_height: number;
							public static notification_large_icon_width: number;
							public static notification_main_column_padding_top: number;
							public static notification_media_narrow_margin: number;
							public static notification_right_icon_size: number;
							public static notification_right_side_padding_top: number;
							public static notification_small_icon_background_padding: number;
							public static notification_small_icon_size_as_large: number;
							public static notification_subtext_size: number;
							public static notification_top_pad: number;
							public static notification_top_pad_large_text: number;
							public static text_size_large: number;
							public static text_size_medium: number;
							public static text_size_micro: number;
							public static text_size_nano: number;
							public static text_size_small: number;
							public static tooltip_corner_radius: number;
							public static tooltip_horizontal_padding: number;
							public static tooltip_margin: number;
							public static tooltip_precise_anchor_extra_offset: number;
							public static tooltip_precise_anchor_threshold: number;
							public static tooltip_vertical_padding: number;
							public static tooltip_y_offset_non_touch: number;
							public static tooltip_y_offset_touch: number;
							public static transparent_system_bar_window_inner_margin_bottom: number;
							public static transparent_system_bar_window_inner_margin_top: number;
							public constructor();
						}
						export class drawable {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.R2.drawable>;
							public static abc_ab_share_pack_mtrl_alpha: number;
							public static abc_action_bar_item_background_material: number;
							public static abc_btn_borderless_material: number;
							public static abc_btn_check_material: number;
							public static abc_btn_check_to_on_mtrl_000: number;
							public static abc_btn_check_to_on_mtrl_015: number;
							public static abc_btn_colored_material: number;
							public static abc_btn_default_mtrl_shape: number;
							public static abc_btn_radio_material: number;
							public static abc_btn_radio_to_on_mtrl_000: number;
							public static abc_btn_radio_to_on_mtrl_015: number;
							public static abc_btn_switch_to_on_mtrl_00001: number;
							public static abc_btn_switch_to_on_mtrl_00012: number;
							public static abc_cab_background_internal_bg: number;
							public static abc_cab_background_top_material: number;
							public static abc_cab_background_top_mtrl_alpha: number;
							public static abc_control_background_material: number;
							public static abc_dialog_material_background: number;
							public static abc_edit_text_material: number;
							public static abc_ic_ab_back_material: number;
							public static abc_ic_arrow_drop_right_black_24dp: number;
							public static abc_ic_clear_material: number;
							public static abc_ic_commit_search_api_mtrl_alpha: number;
							public static abc_ic_go_search_api_material: number;
							public static abc_ic_menu_copy_mtrl_am_alpha: number;
							public static abc_ic_menu_cut_mtrl_alpha: number;
							public static abc_ic_menu_overflow_material: number;
							public static abc_ic_menu_paste_mtrl_am_alpha: number;
							public static abc_ic_menu_selectall_mtrl_alpha: number;
							public static abc_ic_menu_share_mtrl_alpha: number;
							public static abc_ic_search_api_material: number;
							public static abc_ic_star_black_16dp: number;
							public static abc_ic_star_black_36dp: number;
							public static abc_ic_star_black_48dp: number;
							public static abc_ic_star_half_black_16dp: number;
							public static abc_ic_star_half_black_36dp: number;
							public static abc_ic_star_half_black_48dp: number;
							public static abc_ic_voice_search_api_material: number;
							public static abc_item_background_holo_dark: number;
							public static abc_item_background_holo_light: number;
							public static abc_list_divider_mtrl_alpha: number;
							public static abc_list_focused_holo: number;
							public static abc_list_longpressed_holo: number;
							public static abc_list_pressed_holo_dark: number;
							public static abc_list_pressed_holo_light: number;
							public static abc_list_selector_background_transition_holo_dark: number;
							public static abc_list_selector_background_transition_holo_light: number;
							public static abc_list_selector_disabled_holo_dark: number;
							public static abc_list_selector_disabled_holo_light: number;
							public static abc_list_selector_holo_dark: number;
							public static abc_list_selector_holo_light: number;
							public static abc_menu_hardkey_panel_mtrl_mult: number;
							public static abc_popup_background_mtrl_mult: number;
							public static abc_ratingbar_indicator_material: number;
							public static abc_ratingbar_material: number;
							public static abc_ratingbar_small_material: number;
							public static abc_scrubber_control_off_mtrl_alpha: number;
							public static abc_scrubber_control_to_pressed_mtrl_000: number;
							public static abc_scrubber_control_to_pressed_mtrl_005: number;
							public static abc_scrubber_primary_mtrl_alpha: number;
							public static abc_scrubber_track_mtrl_alpha: number;
							public static abc_seekbar_thumb_material: number;
							public static abc_seekbar_tick_mark_material: number;
							public static abc_seekbar_track_material: number;
							public static abc_spinner_mtrl_am_alpha: number;
							public static abc_spinner_textfield_background_material: number;
							public static abc_switch_thumb_material: number;
							public static abc_switch_track_mtrl_alpha: number;
							public static abc_tab_indicator_material: number;
							public static abc_tab_indicator_mtrl_alpha: number;
							public static abc_text_cursor_material: number;
							public static abc_text_select_handle_left_mtrl_dark: number;
							public static abc_text_select_handle_left_mtrl_light: number;
							public static abc_text_select_handle_middle_mtrl_dark: number;
							public static abc_text_select_handle_middle_mtrl_light: number;
							public static abc_text_select_handle_right_mtrl_dark: number;
							public static abc_text_select_handle_right_mtrl_light: number;
							public static abc_textfield_activated_mtrl_alpha: number;
							public static abc_textfield_default_mtrl_alpha: number;
							public static abc_textfield_search_activated_mtrl_alpha: number;
							public static abc_textfield_search_default_mtrl_alpha: number;
							public static abc_textfield_search_material: number;
							public static abc_vector_test: number;
							public static brand_image_horizontal: number;
							public static brand_image_vertical: number;
							public static button_text_color_selector: number;
							public static checkmark: number;
							public static device_image: number;
							public static device_image_small: number;
							public static fail: number;
							public static ic_clear_black_24dp: number;
							public static link_text_selector: number;
							public static lock: number;
							public static notification_action_background: number;
							public static notification_bg: number;
							public static notification_bg_low: number;
							public static notification_bg_low_normal: number;
							public static notification_bg_low_pressed: number;
							public static notification_bg_normal: number;
							public static notification_bg_normal_pressed: number;
							public static notification_icon_background: number;
							public static notification_template_icon_bg: number;
							public static notification_template_icon_low_bg: number;
							public static notification_tile_bg: number;
							public static notify_panel_notification_icon_bg: number;
							public static particle_horizontal_blue: number;
							public static particle_horizontal_head: number;
							public static particle_vertical_blue: number;
							public static photon_vector: number;
							public static photon_vector_small: number;
							public static progress_indicator_graphic: number;
							public static progress_spinner: number;
							public static screen_background: number;
							public static success: number;
							public static the_wifi: number;
							public static tooltip_frame_dark: number;
							public static tooltip_frame_light: number;
							public static trianglifybackground: number;
							public constructor();
						}
						export class id {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.R2.id>;
							public static action0: number;
							public static action_bar: number;
							public static action_bar_activity_content: number;
							public static action_bar_container: number;
							public static action_bar_root: number;
							public static action_bar_spinner: number;
							public static action_bar_subtitle: number;
							public static action_bar_title: number;
							public static action_cancel: number;
							public static action_connect: number;
							public static action_container: number;
							public static action_context_bar: number;
							public static action_create_account: number;
							public static action_device_clear_tinker: number;
							public static action_device_copy_id_to_clipboard: number;
							public static action_device_flash_tinker: number;
							public static action_device_rename: number;
							public static action_device_unclaim: number;
							public static action_divider: number;
							public static action_done: number;
							public static action_im_ready: number;
							public static action_image: number;
							public static action_log_in: number;
							public static action_log_out: number;
							public static action_manual_network_entry: number;
							public static action_menu_divider: number;
							public static action_menu_presenter: number;
							public static action_mode_bar: number;
							public static action_mode_bar_stub: number;
							public static action_mode_close_button: number;
							public static action_rescan: number;
							public static action_reset_password: number;
							public static action_text: number;
							public static action_troubleshooting: number;
							public static action_verify: number;
							public static actions: number;
							public static activity_chooser_view_content: number;
							public static add: number;
							public static alertTitle: number;
							public static already_have_an_account_text: number;
							public static always: number;
							public static async: number;
							public static authentication_form: number;
							public static authentication_info: number;
							public static authentication_text_title: number;
							public static beginning: number;
							public static blocking: number;
							public static bottom: number;
							public static brand_image: number;
							public static brand_image_header: number;
							public static buttonPanel: number;
							public static button_progress_indicator: number;
							public static calligraphy_tag_id: number;
							public static cancel_action: number;
							public static check_for_internet_connectivity: number;
							public static checkbox: number;
							public static chronometer: number;
							public static collapseActionView: number;
							public static company: number;
							public static companyAccount: number;
							public static configure_device_wifi_credentials: number;
							public static connect_to_wifi_network: number;
							public static connecting_text: number;
							public static contentPanel: number;
							public static create_account_form: number;
							public static create_account_header_text: number;
							public static custom: number;
							public static customPanel: number;
							public static decor_content_parent: number;
							public static default_activity_button: number;
							public static device_list_devices_loader_id: number;
							public static device_name: number;
							public static device_name_label: number;
							public static disableHome: number;
							public static edit_query: number;
							public static email: number;
							public static email_create_account_form: number;
							public static email_login_form: number;
							public static end: number;
							public static end_padder: number;
							public static expand_activities_button: number;
							public static expanded_menu: number;
							public static fine_print: number;
							public static first: number;
							public static forever: number;
							public static forgot_password: number;
							public static get_ready_text: number;
							public static get_ready_text_title: number;
							public static home: number;
							public static homeAsUp: number;
							public static icon: number;
							public static icon_group: number;
							public static ifRoom: number;
							public static image: number;
							public static imageView: number;
							public static info: number;
							public static italic: number;
							public static item_touch_helper_previous_elevation: number;
							public static keyboard_change_detector_layout: number;
							public static last: number;
							public static left: number;
							public static line1: number;
							public static line3: number;
							public static listMode: number;
							public static list_item: number;
							public static log_in_header_text: number;
							public static logged_in_as: number;
							public static login_form: number;
							public static media_actions: number;
							public static message: number;
							public static middle: number;
							public static msg_device_not_listed: number;
							public static multiply: number;
							public static network_name: number;
							public static network_requires_password: number;
							public static never: number;
							public static none: number;
							public static normal: number;
							public static notification_background: number;
							public static notification_main_column: number;
							public static notification_main_column_container: number;
							public static parentPanel: number;
							public static password: number;
							public static progress_circular: number;
							public static progress_horizontal: number;
							public static radio: number;
							public static reconnect_to_wifi_network: number;
							public static recover_auth: number;
							public static result_details: number;
							public static result_image: number;
							public static result_summary: number;
							public static right: number;
							public static right_icon: number;
							public static right_side: number;
							public static screen: number;
							public static scrollIndicatorDown: number;
							public static scrollIndicatorUp: number;
							public static scrollView: number;
							public static search_badge: number;
							public static search_bar: number;
							public static search_button: number;
							public static search_close_btn: number;
							public static search_edit_frame: number;
							public static search_go_btn: number;
							public static search_mag_icon: number;
							public static search_plate: number;
							public static search_src_text: number;
							public static search_voice_btn: number;
							public static security_msg: number;
							public static select_dialog_listview: number;
							public static shortcut: number;
							public static showCustom: number;
							public static showHome: number;
							public static showTitle: number;
							public static show_password: number;
							public static spacer: number;
							public static spinner: number;
							public static split_action_bar: number;
							public static src_atop: number;
							public static src_in: number;
							public static src_over: number;
							public static ssid: number;
							public static start: number;
							public static status_bar_latest_event_content: number;
							public static submenuarrow: number;
							public static submit_area: number;
							public static tabMode: number;
							public static tag_transition_group: number;
							public static text: number;
							public static text2: number;
							public static textSpacerNoButtons: number;
							public static textSpacerNoTitle: number;
							public static the_wifi: number;
							public static time: number;
							public static tinker_button_color: number;
							public static title: number;
							public static titleDividerNoCustom: number;
							public static title_template: number;
							public static toolbar: number;
							public static top: number;
							public static topPanel: number;
							public static two_factor_authentication: number;
							public static uniform: number;
							public static up: number;
							public static useLogo: number;
							public static user_has_no_account: number;
							public static verificationCode: number;
							public static verify_password: number;
							public static verify_product_ownership: number;
							public static wait_for_device_cloud_connection: number;
							public static web_content: number;
							public static wifi_list_fragment: number;
							public static wifi_list_header: number;
							public static wifi_security_indicator_icon: number;
							public static withText: number;
							public static wrap_content: number;
							public constructor();
						}
						export class integer {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.R2.integer>;
							public static abc_config_activityDefaultDur: number;
							public static abc_config_activityShortDur: number;
							public static cancel_button_image_alpha: number;
							public static config_tooltipAnimTime: number;
							public static product_id: number;
							public static status_bar_notification_info_maxnum: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export class SetupCompleteIntentBuilder {
						public static class: java.lang.Class<io.particle.android.sdk.devicesetup.SetupCompleteIntentBuilder>;
						/**
						 * Constructs a new instance of the io.particle.android.sdk.devicesetup.SetupCompleteIntentBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildIntent(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.devicesetup.SetupResult): globalAndroid.content.Intent;
						});
						public constructor();
						public buildIntent(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.devicesetup.SetupResult): globalAndroid.content.Intent;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export class SetupProcessException {
						public static class: java.lang.Class<io.particle.android.sdk.devicesetup.SetupProcessException>;
						public failedStep: io.particle.android.sdk.devicesetup.setupsteps.SetupStep;
						public constructor(param0: string, param1: io.particle.android.sdk.devicesetup.setupsteps.SetupStep);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export class SetupResult {
						public static class: java.lang.Class<io.particle.android.sdk.devicesetup.SetupResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<io.particle.android.sdk.devicesetup.SetupResult>;
						public describeContents(): number;
						public constructor(param0: boolean, param1: string);
						public wasSuccessful(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getConfiguredDeviceId(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export class SimpleReceiver {
						public static class: java.lang.Class<io.particle.android.sdk.devicesetup.SimpleReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public unregister(): void;
						public static newRegisteredReceiver(param0: globalAndroid.content.Context, param1: globalAndroid.content.IntentFilter, param2: io.particle.android.sdk.devicesetup.SimpleReceiver.LambdafiableBroadcastReceiver): io.particle.android.sdk.devicesetup.SimpleReceiver;
						public register(): void;
						public static newReceiver(param0: globalAndroid.content.Context, param1: globalAndroid.content.IntentFilter, param2: io.particle.android.sdk.devicesetup.SimpleReceiver.LambdafiableBroadcastReceiver): io.particle.android.sdk.devicesetup.SimpleReceiver;
					}
					export module SimpleReceiver {
						export class LambdafiableBroadcastReceiver {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.SimpleReceiver.LambdafiableBroadcastReceiver>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.devicesetup.SimpleReceiver$LambdafiableBroadcastReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							});
							public constructor();
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export abstract class Command {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.Command>;
							public constructor();
							public argsAsJsonString(param0: com.google.gson.Gson): string;
							public getCommandName(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class CommandClient {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClient>;
							public sendCommand(param0: io.particle.android.sdk.devicesetup.commands.Command, param1: java.lang.Class): any;
							public sendCommand(param0: io.particle.android.sdk.devicesetup.commands.Command): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class CommandClientFactory {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>;
							public constructor();
							public newClient(param0: io.particle.android.sdk.utils.WifiFacade, param1: io.particle.android.sdk.utils.SSID, param2: string, param3: number): io.particle.android.sdk.devicesetup.commands.CommandClient;
							public newClientUsingDefaultsForDevices(param0: io.particle.android.sdk.utils.WifiFacade, param1: io.particle.android.sdk.utils.SSID): io.particle.android.sdk.devicesetup.commands.CommandClient;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class CommandClientUtils {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClientUtils>;
							public static escapeJava(param0: string): string;
						}
						export module CommandClientUtils {
							export class AggregateTranslator extends io.particle.android.sdk.devicesetup.commands.CommandClientUtils.CharSequenceTranslator {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClientUtils.AggregateTranslator>;
							}
							export abstract class CharSequenceTranslator {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClientUtils.CharSequenceTranslator>;
							}
							export abstract class CodePointTranslator extends io.particle.android.sdk.devicesetup.commands.CommandClientUtils.CharSequenceTranslator {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClientUtils.CodePointTranslator>;
							}
							export class JavaUnicodeEscaper extends io.particle.android.sdk.devicesetup.commands.CommandClientUtils.UnicodeEscaper {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClientUtils.JavaUnicodeEscaper>;
								public toUtf16Escape(param0: number): string;
							}
							export class LookupTranslator extends io.particle.android.sdk.devicesetup.commands.CommandClientUtils.CharSequenceTranslator {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClientUtils.LookupTranslator>;
							}
							export class UnicodeEscaper extends io.particle.android.sdk.devicesetup.commands.CommandClientUtils.CodePointTranslator {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.CommandClientUtils.UnicodeEscaper>;
								public toUtf16Escape(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class ConfigureApCommand extends io.particle.android.sdk.devicesetup.commands.Command {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.ConfigureApCommand>;
							public idx: java.lang.Integer;
							public ssid: string;
							public encryptedPasswordHex: string;
							public wifiSecurityType: java.lang.Integer;
							public channel: java.lang.Integer;
							public static newBuilder(): io.particle.android.sdk.devicesetup.commands.ConfigureApCommand.Builder;
							public getCommandName(): string;
						}
						export module ConfigureApCommand {
							export class Builder {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.ConfigureApCommand.Builder>;
								public setChannel(param0: number): io.particle.android.sdk.devicesetup.commands.ConfigureApCommand.Builder;
								public build(): io.particle.android.sdk.devicesetup.commands.ConfigureApCommand;
								public constructor();
								public setEncryptedPasswordHex(param0: string): io.particle.android.sdk.devicesetup.commands.ConfigureApCommand.Builder;
								public setIdx(param0: number): io.particle.android.sdk.devicesetup.commands.ConfigureApCommand.Builder;
								public setSecurityType(param0: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity): io.particle.android.sdk.devicesetup.commands.ConfigureApCommand.Builder;
								public setSsid(param0: string): io.particle.android.sdk.devicesetup.commands.ConfigureApCommand.Builder;
							}
							export class Response {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.ConfigureApCommand.Response>;
								public responseCode: java.lang.Integer;
								public toString(): string;
								public isOk(): boolean;
								public constructor(param0: java.lang.Integer);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class ConnectAPCommand extends io.particle.android.sdk.devicesetup.commands.Command {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.ConnectAPCommand>;
							public index: number;
							public constructor();
							public constructor(param0: number);
							public getCommandName(): string;
						}
						export module ConnectAPCommand {
							export class Response {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.ConnectAPCommand.Response>;
								public responseCode: number;
								public toString(): string;
								public constructor(param0: number);
								public isOK(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class DeviceIdCommand extends io.particle.android.sdk.devicesetup.commands.NoArgsCommand {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.DeviceIdCommand>;
							public constructor();
							public getCommandName(): string;
						}
						export module DeviceIdCommand {
							export class Response {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.DeviceIdCommand.Response>;
								public deviceIdHex: string;
								public isClaimed: number;
								public toString(): string;
								public constructor(param0: string, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class NetworkBindingSocketFactory {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.NetworkBindingSocketFactory>;
							public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
							public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
							public constructor(param0: io.particle.android.sdk.utils.WifiFacade, param1: io.particle.android.sdk.utils.SSID, param2: number);
							public createSocket(): java.net.Socket;
							public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
							public createSocket(param0: string, param1: number): java.net.Socket;
						}
						export module NetworkBindingSocketFactory {
							export class SocketBindingException {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.NetworkBindingSocketFactory.SocketBindingException>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export abstract class NoArgsCommand extends io.particle.android.sdk.devicesetup.commands.Command {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.NoArgsCommand>;
							public constructor();
							public argsAsJsonString(param0: com.google.gson.Gson): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class PublicKeyCommand extends io.particle.android.sdk.devicesetup.commands.NoArgsCommand {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.PublicKeyCommand>;
							public constructor();
							public getCommandName(): string;
						}
						export module PublicKeyCommand {
							export class Response {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.PublicKeyCommand.Response>;
								public responseCode: number;
								public publicKey: string;
								public constructor(param0: number, param1: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class ScanApCommand extends io.particle.android.sdk.devicesetup.commands.NoArgsCommand {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.ScanApCommand>;
							public constructor();
							public getCommandName(): string;
						}
						export module ScanApCommand {
							export class Response {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.ScanApCommand.Response>;
								public scans: native.Array<io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan>;
								public toString(): string;
								public getScans(): java.util.List<io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan>;
								public constructor(param0: native.Array<io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan>);
							}
							export class Scan {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan>;
								public ssid: string;
								public wifiSecurityType: java.lang.Integer;
								public channel: java.lang.Integer;
								public toString(): string;
								public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class SetCommand extends io.particle.android.sdk.devicesetup.commands.Command {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.SetCommand>;
							public key: string;
							public value: string;
							public constructor();
							public constructor(param0: string, param1: string);
							public getCommandName(): string;
						}
						export module SetCommand {
							export class Response {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.SetCommand.Response>;
								public responseCode: number;
								public constructor(param0: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export class VersionCommand extends io.particle.android.sdk.devicesetup.commands.NoArgsCommand {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.VersionCommand>;
							public constructor();
							public getCommandName(): string;
						}
						export module VersionCommand {
							export class Response {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.VersionCommand.Response>;
								public version: number;
								public toString(): string;
								public constructor(param0: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module commands {
						export module data {
							export class WifiSecurity {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.commands.data.WifiSecurity>;
								public static OPEN: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static WEP_PSK: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static WEP_SHARED: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static WPA_TKIP_PSK: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static WPA_AES_PSK: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static WPA_MIXED_PSK: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static WPA2_AES_PSK: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static WPA2_TKIP_PSK: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static WPA2_MIXED_PSK: io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static isEnterpriseNetwork(param0: number): boolean;
								public static fromInteger(param0: java.lang.Integer): io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
								public static values(): native.Array<io.particle.android.sdk.devicesetup.commands.data.WifiSecurity>;
								public asInt(): number;
								public static valueOf(param0: string): io.particle.android.sdk.devicesetup.commands.data.WifiSecurity;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module loaders {
						export class ScanApCommandLoader extends io.particle.android.sdk.utils.BetterAsyncTaskLoader<java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.loaders.ScanApCommandLoader>;
							public onStopLoading(): void;
							public getLoadedContent(): java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>;
							public loadInBackground(): java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>;
							public getLoadedContent(): any;
							public onStartLoading(): void;
							public hasContent(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.devicesetup.commands.CommandClient);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module loaders {
						export class WifiScanResultLoader extends io.particle.android.sdk.utils.BetterAsyncTaskLoader<java.util.Set<io.particle.android.sdk.devicesetup.model.ScanResultNetwork>> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.loaders.WifiScanResultLoader>;
							public onStopLoading(): void;
							public constructor(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.WifiFacade);
							public getLoadedContent(): any;
							public onStartLoading(): void;
							public loadInBackground(): java.util.Set<io.particle.android.sdk.devicesetup.model.ScanResultNetwork>;
							public hasContent(): boolean;
							public getLoadedContent(): java.util.Set<io.particle.android.sdk.devicesetup.model.ScanResultNetwork>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module model {
						export class ScanAPCommandResult extends io.particle.android.sdk.devicesetup.model.WifiNetwork {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>;
							public scan: io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan;
							public ssid: io.particle.android.sdk.utils.SSID;
							public constructor(param0: io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan);
							public hashCode(): number;
							public getSsid(): io.particle.android.sdk.utils.SSID;
							public toString(): string;
							public equals(param0: any): boolean;
							public isSecured(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module model {
						export class ScanResultNetwork extends io.particle.android.sdk.devicesetup.model.WifiNetwork {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.model.ScanResultNetwork>;
							public hashCode(): number;
							public getSsid(): io.particle.android.sdk.utils.SSID;
							public equals(param0: any): boolean;
							public constructor(param0: globalAndroid.net.wifi.ScanResult);
							public isSecured(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module model {
						export class WifiNetwork {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.model.WifiNetwork>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.devicesetup.model.WifiNetwork interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getSsid(): io.particle.android.sdk.utils.SSID;
								isSecured(): boolean;
							});
							public constructor();
							public getSsid(): io.particle.android.sdk.utils.SSID;
							public isSecured(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class CheckIfDeviceClaimedStep extends io.particle.android.sdk.devicesetup.setupsteps.SetupStep {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.CheckIfDeviceClaimedStep>;
							public onRunStep(): void;
							public isStepFulfilled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class ConfigureAPStep extends io.particle.android.sdk.devicesetup.setupsteps.SetupStep {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.ConfigureAPStep>;
							public onRunStep(): void;
							public isStepFulfilled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class ConnectDeviceToNetworkStep extends io.particle.android.sdk.devicesetup.setupsteps.SetupStep {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.ConnectDeviceToNetworkStep>;
							public onRunStep(): void;
							public isStepFulfilled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class EnsureSoftApNotVisible extends io.particle.android.sdk.devicesetup.setupsteps.SetupStep {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.EnsureSoftApNotVisible>;
							public onRunStep(): void;
							public isStepFulfilled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export abstract class SetupStep {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.SetupStep>;
							public log: io.particle.android.sdk.utils.TLog;
							public resetAttemptsCount(): void;
							public constructor(param0: io.particle.android.sdk.devicesetup.setupsteps.StepConfig);
							public onRunStep(): void;
							public getStepConfig(): io.particle.android.sdk.devicesetup.setupsteps.StepConfig;
							public isStepFulfilled(): boolean;
							public getLog(): io.particle.android.sdk.utils.TLog;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class SetupStepApReconnector {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.SetupStepApReconnector>;
							public constructor(param0: io.particle.android.sdk.utils.WifiFacade, param1: io.particle.android.sdk.devicesetup.ApConnector, param2: globalAndroid.os.Handler, param3: io.particle.android.sdk.utils.SSID);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class SetupStepException {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.SetupStepException>;
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class SetupStepsFactory {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory>;
							public constructor();
							public newConfigureApStep(param0: io.particle.android.sdk.devicesetup.commands.CommandClient, param1: io.particle.android.sdk.devicesetup.setupsteps.SetupStepApReconnector, param2: io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan, param3: string, param4: java.security.PublicKey): io.particle.android.sdk.devicesetup.setupsteps.ConfigureAPStep;
							public newWaitForDisconnectionFromDeviceStep(param0: io.particle.android.sdk.utils.SSID, param1: io.particle.android.sdk.utils.WifiFacade): io.particle.android.sdk.devicesetup.setupsteps.WaitForDisconnectionFromDeviceStep;
							public newConnectDeviceToNetworkStep(param0: io.particle.android.sdk.devicesetup.commands.CommandClient, param1: io.particle.android.sdk.devicesetup.setupsteps.SetupStepApReconnector): io.particle.android.sdk.devicesetup.setupsteps.ConnectDeviceToNetworkStep;
							public newWaitForCloudConnectivityStep(param0: globalAndroid.content.Context): io.particle.android.sdk.devicesetup.setupsteps.WaitForCloudConnectivityStep;
							public newEnsureSoftApNotVisible(param0: io.particle.android.sdk.utils.SSID, param1: io.particle.android.sdk.utils.WifiFacade): io.particle.android.sdk.devicesetup.setupsteps.EnsureSoftApNotVisible;
							public newCheckIfDeviceClaimedStep(param0: io.particle.android.sdk.cloud.ParticleCloud, param1: string): io.particle.android.sdk.devicesetup.setupsteps.CheckIfDeviceClaimedStep;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export abstract class SetupStepsRunnerTask extends globalAndroid.os.AsyncTask<java.lang.Void,io.particle.android.sdk.devicesetup.setupsteps.StepProgress,io.particle.android.sdk.devicesetup.SetupProcessException> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.SetupStepsRunnerTask>;
							public doInBackground(param0: native.Array<java.lang.Void>): io.particle.android.sdk.devicesetup.SetupProcessException;
							public constructor(param0: java.util.List<io.particle.android.sdk.devicesetup.setupsteps.SetupStep>, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class StepConfig {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.StepConfig>;
							public resultCode: number;
							public getStepId(): number;
						}
						export module StepConfig {
							export class Builder {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.StepConfig.Builder>;
								public build(): io.particle.android.sdk.devicesetup.setupsteps.StepConfig;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class StepProgress {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.StepProgress>;
							public static STARTING: number;
							public stepId: number;
							public status: number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class WaitForCloudConnectivityStep extends io.particle.android.sdk.devicesetup.setupsteps.SetupStep {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.WaitForCloudConnectivityStep>;
							public onRunStep(): void;
							public isStepFulfilled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module setupsteps {
						export class WaitForDisconnectionFromDeviceStep extends io.particle.android.sdk.devicesetup.setupsteps.SetupStep {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.setupsteps.WaitForDisconnectionFromDeviceStep>;
							public onRunStep(): void;
							public isStepFulfilled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ConnectToApFragment extends io.particle.android.sdk.utils.WorkerFragment {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ConnectToApFragment>;
							public static TAG: string;
							public apConnector: io.particle.android.sdk.devicesetup.ApConnector;
							public wifiFacade: io.particle.android.sdk.utils.WifiFacade;
							public constructor();
							public onAttach(param0: globalAndroid.content.Context): void;
							public static ensureAttached(param0: globalAndroid.support.v4.app.FragmentActivity): io.particle.android.sdk.devicesetup.ui.ConnectToApFragment;
							public onStop(): void;
							public static get(param0: globalAndroid.support.v4.app.FragmentActivity): io.particle.android.sdk.devicesetup.ui.ConnectToApFragment;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public connectToAP(param0: globalAndroid.net.wifi.WifiConfiguration): io.particle.android.sdk.utils.SSID;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ConnectToApFragment_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.ConnectToApFragment> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ConnectToApFragment_MembersInjector>;
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.ConnectToApFragment): void;
							public static injectWifiFacade(param0: io.particle.android.sdk.devicesetup.ui.ConnectToApFragment, param1: io.particle.android.sdk.utils.WifiFacade): void;
							public static injectApConnector(param0: io.particle.android.sdk.devicesetup.ui.ConnectToApFragment, param1: io.particle.android.sdk.devicesetup.ApConnector): void;
							public constructor(param0: javax.inject.Provider<io.particle.android.sdk.devicesetup.ApConnector>, param1: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>);
							public static create(param0: javax.inject.Provider<io.particle.android.sdk.devicesetup.ApConnector>, param1: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.ConnectToApFragment>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ConnectingActivity extends io.particle.android.sdk.devicesetup.ui.RequiresWifiScansActivity {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ConnectingActivity>;
							public static EXTRA_NETWORK_TO_CONFIGURE: string;
							public static EXTRA_NETWORK_SECRET: string;
							public static EXTRA_SOFT_AP_SSID: string;
							public softAPConfigRemover: io.particle.android.sdk.utils.SoftAPConfigRemover;
							public wifiFacade: io.particle.android.sdk.utils.WifiFacade;
							public apConnector: io.particle.android.sdk.devicesetup.ApConnector;
							public commandClientFactory: io.particle.android.sdk.devicesetup.commands.CommandClientFactory;
							public setupStepsFactory: io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory;
							public sparkCloud: io.particle.android.sdk.cloud.ParticleCloud;
							public gson: com.google.gson.Gson;
							public constructor();
							public static buildIntent(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.SSID, param2: io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan, param3: string): globalAndroid.content.Intent;
							public static buildIntent(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.SSID, param2: io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan): globalAndroid.content.Intent;
							public onStop(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onCancelClick(): void;
							public onDestroy(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ConnectingActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.ConnectingActivity> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ConnectingActivity_MembersInjector>;
							public static create(param0: javax.inject.Provider<io.particle.android.sdk.utils.SoftAPConfigRemover>, param1: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>, param2: javax.inject.Provider<io.particle.android.sdk.devicesetup.ApConnector>, param3: javax.inject.Provider<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>, param4: javax.inject.Provider<io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory>, param5: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>, param6: javax.inject.Provider<com.google.gson.Gson>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.ConnectingActivity>;
							public static injectApConnector(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity, param1: io.particle.android.sdk.devicesetup.ApConnector): void;
							public constructor(param0: javax.inject.Provider<io.particle.android.sdk.utils.SoftAPConfigRemover>, param1: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>, param2: javax.inject.Provider<io.particle.android.sdk.devicesetup.ApConnector>, param3: javax.inject.Provider<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>, param4: javax.inject.Provider<io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory>, param5: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>, param6: javax.inject.Provider<com.google.gson.Gson>);
							public static injectSparkCloud(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity, param1: io.particle.android.sdk.cloud.ParticleCloud): void;
							public static injectGson(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity, param1: com.google.gson.Gson): void;
							public static injectCommandClientFactory(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity, param1: io.particle.android.sdk.devicesetup.commands.CommandClientFactory): void;
							public static injectSoftAPConfigRemover(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity, param1: io.particle.android.sdk.utils.SoftAPConfigRemover): void;
							public static injectSetupStepsFactory(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity, param1: io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory): void;
							public static injectWifiFacade(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity, param1: io.particle.android.sdk.utils.WifiFacade): void;
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ConnectingActivity_ViewBinding {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ConnectingActivity_ViewBinding>;
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity);
							public unbind(): void;
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity, param1: globalAndroid.view.View);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ConnectingProcessWorkerTask extends io.particle.android.sdk.devicesetup.setupsteps.SetupStepsRunnerTask {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask>;
							public sparkCloud: io.particle.android.sdk.cloud.ParticleCloud;
							public onPostExecute(param0: io.particle.android.sdk.devicesetup.SetupProcessException): void;
							public onProgressUpdate(param0: native.Array<io.particle.android.sdk.devicesetup.setupsteps.StepProgress>): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ConnectingProcessWorkerTask_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask_MembersInjector>;
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask): void;
							public constructor(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>);
							public static injectSparkCloud(param0: io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask, param1: io.particle.android.sdk.cloud.ParticleCloud): void;
							public static create(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class DeviceSetupState {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.DeviceSetupState>;
							public static previouslyConnectedWifiNetwork: io.particle.android.sdk.utils.SSID;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class DiscoverDeviceActivity extends io.particle.android.sdk.devicesetup.ui.RequiresWifiScansActivity {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity>;
							public wifiFacade: io.particle.android.sdk.utils.WifiFacade;
							public sparkCloud: io.particle.android.sdk.cloud.ParticleCloud;
							public discoverProcessWorker: io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker;
							public softAPConfigRemover: io.particle.android.sdk.utils.SoftAPConfigRemover;
							public commandClientFactory: io.particle.android.sdk.devicesetup.commands.CommandClientFactory;
							public constructor();
							public onNetworkSelected(param0: io.particle.android.sdk.devicesetup.model.ScanResultNetwork): void;
							public onLogoutClick(): void;
							public onApConnectionFailed(param0: globalAndroid.net.wifi.WifiConfiguration): void;
							public onCancelClick(): void;
							public getAggroLoadingTimeMillis(): number;
							public createLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<java.util.Set<any>>;
							public onResume(): void;
							public getListEmptyText(): string;
							public createLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<java.util.Set<io.particle.android.sdk.devicesetup.model.ScanResultNetwork>>;
							public onTroubleshootingClick(param0: globalAndroid.view.View): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onApConnectionSuccessful(param0: globalAndroid.net.wifi.WifiConfiguration): void;
							public onNetworkSelected(param0: any): void;
							public onLoadFinished(): void;
						}
						export module DiscoverDeviceActivity {
							export class DeviceAlreadyClaimed extends io.particle.android.sdk.devicesetup.setupsteps.SetupStepException {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity.DeviceAlreadyClaimed>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class DiscoverDeviceActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity_MembersInjector>;
							public static injectSoftAPConfigRemover(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity, param1: io.particle.android.sdk.utils.SoftAPConfigRemover): void;
							public static injectDiscoverProcessWorker(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity, param1: io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker): void;
							public constructor(param0: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>, param1: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>, param2: javax.inject.Provider<io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker>, param3: javax.inject.Provider<io.particle.android.sdk.utils.SoftAPConfigRemover>, param4: javax.inject.Provider<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>);
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity): void;
							public static injectSparkCloud(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity, param1: io.particle.android.sdk.cloud.ParticleCloud): void;
							public static create(param0: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>, param1: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>, param2: javax.inject.Provider<io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker>, param3: javax.inject.Provider<io.particle.android.sdk.utils.SoftAPConfigRemover>, param4: javax.inject.Provider<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity>;
							public static injectCommandClientFactory(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity, param1: io.particle.android.sdk.devicesetup.commands.CommandClientFactory): void;
							public static injectWifiFacade(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity, param1: io.particle.android.sdk.utils.WifiFacade): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class DiscoverDeviceActivity_ViewBinding {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity_ViewBinding>;
							public unbind(): void;
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity, param1: globalAndroid.view.View);
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class DiscoverProcessWorker {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker>;
							public constructor();
							public doTheThing(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class GetReadyActivity extends io.particle.android.sdk.ui.BaseActivity implements io.particle.android.sdk.devicesetup.ui.PermissionsFragment.Client {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.GetReadyActivity>;
							public sparkCloud: io.particle.android.sdk.cloud.ParticleCloud;
							public softAPConfigRemover: io.particle.android.sdk.utils.SoftAPConfigRemover;
							public constructor();
							public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onUserDeniedPermission(param0: string): void;
							public onUserAllowedPermission(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class GetReadyActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.GetReadyActivity> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.GetReadyActivity_MembersInjector>;
							public constructor(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>, param1: javax.inject.Provider<io.particle.android.sdk.utils.SoftAPConfigRemover>);
							public static create(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>, param1: javax.inject.Provider<io.particle.android.sdk.utils.SoftAPConfigRemover>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.GetReadyActivity>;
							public static injectSoftAPConfigRemover(param0: io.particle.android.sdk.devicesetup.ui.GetReadyActivity, param1: io.particle.android.sdk.utils.SoftAPConfigRemover): void;
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.GetReadyActivity): void;
							public static injectSparkCloud(param0: io.particle.android.sdk.devicesetup.ui.GetReadyActivity, param1: io.particle.android.sdk.cloud.ParticleCloud): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ManualNetworkEntryActivity extends io.particle.android.sdk.ui.BaseActivity implements globalAndroid.support.v4.app.LoaderManager.LoaderCallbacks<java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>>  {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity>;
							public wifiFacade: io.particle.android.sdk.utils.WifiFacade;
							public commandClientFactory: io.particle.android.sdk.devicesetup.commands.CommandClientFactory;
							public wifiSecurityType: java.lang.Integer;
							public constructor();
							public static buildIntent(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.SSID): globalAndroid.content.Intent;
							public onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>>;
							public onSecureCheckedChange(param0: boolean): void;
							public onLoaderReset(param0: globalAndroid.support.v4.content.Loader<java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>>): void;
							public onLoadFinished(param0: globalAndroid.support.v4.content.Loader<java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>>, param1: java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onCancelClicked(param0: globalAndroid.view.View): void;
							public onConnectClicked(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ManualNetworkEntryActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity_MembersInjector>;
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity): void;
							public static create(param0: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>, param1: javax.inject.Provider<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity>;
							public constructor(param0: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>, param1: javax.inject.Provider<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>);
							public static injectCommandClientFactory(param0: io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity, param1: io.particle.android.sdk.devicesetup.commands.CommandClientFactory): void;
							public static injectWifiFacade(param0: io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity, param1: io.particle.android.sdk.utils.WifiFacade): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class ManualNetworkEntryActivity_ViewBinding {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity_ViewBinding>;
							public unbind(): void;
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity, param1: globalAndroid.view.View);
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class PasswordEntryActivity extends io.particle.android.sdk.ui.BaseActivity {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity>;
							public showPwdBox: globalAndroid.widget.CheckBox;
							public passwordBox: globalAndroid.widget.EditText;
							public gson: com.google.gson.Gson;
							public constructor();
							public static buildIntent(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.SSID, param2: io.particle.android.sdk.devicesetup.commands.ScanApCommand.Scan): globalAndroid.content.Intent;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onCancelClicked(param0: globalAndroid.view.View): void;
							public onConnectClicked(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class PasswordEntryActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity_MembersInjector>;
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity): void;
							public static injectGson(param0: io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity, param1: com.google.gson.Gson): void;
							public constructor(param0: javax.inject.Provider<com.google.gson.Gson>);
							public static create(param0: javax.inject.Provider<com.google.gson.Gson>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class PasswordEntryActivity_ViewBinding {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity_ViewBinding>;
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity, param1: globalAndroid.view.View);
							public unbind(): void;
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class PermissionsFragment {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.PermissionsFragment>;
							public static TAG: string;
							public constructor();
							public static ensureAttached(param0: globalAndroid.support.v4.app.FragmentActivity): io.particle.android.sdk.devicesetup.ui.PermissionsFragment;
							public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
							public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
							public ensurePermission(param0: string): void;
							public static get(param0: globalAndroid.support.v4.app.FragmentActivity): io.particle.android.sdk.devicesetup.ui.PermissionsFragment;
						}
						export module PermissionsFragment {
							export class Client {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.PermissionsFragment.Client>;
								/**
								 * Constructs a new instance of the io.particle.android.sdk.devicesetup.ui.PermissionsFragment$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onUserAllowedPermission(param0: string): void;
									onUserDeniedPermission(param0: string): void;
								});
								public constructor();
								public onUserAllowedPermission(param0: string): void;
								public onUserDeniedPermission(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class RequiresWifiScansActivity extends io.particle.android.sdk.ui.BaseActivity {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.RequiresWifiScansActivity>;
							public constructor();
							public onStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class SelectNetworkActivity extends io.particle.android.sdk.devicesetup.ui.RequiresWifiScansActivity implements io.particle.android.sdk.devicesetup.ui.WifiListFragment.Client<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>  {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity>;
							public wifiFacade: io.particle.android.sdk.utils.WifiFacade;
							public commandClientFactory: io.particle.android.sdk.devicesetup.commands.CommandClientFactory;
							public constructor();
							public onRescanClick(): void;
							public onManualNetworkEntryClicked(param0: globalAndroid.view.View): void;
							public getListEmptyText(): string;
							public static buildIntent(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.SSID): globalAndroid.content.Intent;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public getAggroLoadingTimeMillis(): number;
							public onNetworkSelected(param0: any): void;
							public onNetworkSelected(param0: io.particle.android.sdk.devicesetup.model.ScanAPCommandResult): void;
							public createLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<java.util.Set<io.particle.android.sdk.devicesetup.model.ScanAPCommandResult>>;
							public createLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<java.util.Set<any>>;
							public onLoadFinished(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class SelectNetworkActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity_MembersInjector>;
							public static injectWifiFacade(param0: io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity, param1: io.particle.android.sdk.utils.WifiFacade): void;
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity): void;
							public constructor(param0: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>, param1: javax.inject.Provider<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>);
							public static create(param0: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>, param1: javax.inject.Provider<io.particle.android.sdk.devicesetup.commands.CommandClientFactory>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity>;
							public static injectCommandClientFactory(param0: io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity, param1: io.particle.android.sdk.devicesetup.commands.CommandClientFactory): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class SelectNetworkActivity_ViewBinding {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity_ViewBinding>;
							public unbind(): void;
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity);
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity, param1: globalAndroid.view.View);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class SuccessActivity extends io.particle.android.sdk.ui.BaseActivity {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.SuccessActivity>;
							public static EXTRA_RESULT_CODE: string;
							public static EXTRA_DEVICE_ID: string;
							public static RESULT_SUCCESS: number;
							public static RESULT_SUCCESS_UNKNOWN_OWNERSHIP: number;
							public static RESULT_FAILURE_CLAIMING: number;
							public static RESULT_FAILURE_CONFIGURE: number;
							public static RESULT_FAILURE_NO_DISCONNECT: number;
							public static RESULT_FAILURE_LOST_CONNECTION_TO_DEVICE: number;
							public deviceNameView: globalAndroid.widget.EditText;
							public deviceNameLabelView: globalAndroid.widget.TextView;
							public particleCloud: io.particle.android.sdk.cloud.ParticleCloud;
							public constructor();
							public static buildIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
							public onTroubleshootingClick(param0: globalAndroid.view.View): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onDoneClick(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class SuccessActivity_MembersInjector extends dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.SuccessActivity> {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.SuccessActivity_MembersInjector>;
							public constructor(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>);
							public static injectParticleCloud(param0: io.particle.android.sdk.devicesetup.ui.SuccessActivity, param1: io.particle.android.sdk.cloud.ParticleCloud): void;
							public injectMembers(param0: io.particle.android.sdk.devicesetup.ui.SuccessActivity): void;
							public static create(param0: javax.inject.Provider<io.particle.android.sdk.cloud.ParticleCloud>): dagger.MembersInjector<io.particle.android.sdk.devicesetup.ui.SuccessActivity>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class SuccessActivity_ViewBinding {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.SuccessActivity_ViewBinding>;
							public unbind(): void;
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.SuccessActivity);
							public constructor(param0: io.particle.android.sdk.devicesetup.ui.SuccessActivity, param1: globalAndroid.view.View);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module devicesetup {
					export module ui {
						export class WifiListFragment<T>  extends globalAndroid.support.v4.app.ListFragment implements globalAndroid.support.v4.app.LoaderManager.LoaderCallbacks<java.util.Set<any>>  {
							public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.WifiListFragment<any>>;
							public constructor();
							public onStop(): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public scanAsync(): void;
							public onLoaderReset(param0: globalAndroid.support.v4.content.Loader<java.util.Set<any>>): void;
							public onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<java.util.Set<any>>;
							public onListItemClick(param0: globalAndroid.widget.ListView, param1: globalAndroid.view.View, param2: number, param3: number): void;
							public onAttach(param0: globalAndroid.content.Context): void;
							public onStart(): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onDetach(): void;
							public onLoadFinished(param0: globalAndroid.support.v4.content.Loader<java.util.Set<any>>, param1: java.util.Set<any>): void;
							public stopAggroLoading(): void;
							public startAggroLoading(): void;
						}
						export module WifiListFragment {
							export class Client<T>  extends java.lang.Object {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.WifiListFragment.Client<any>>;
								/**
								 * Constructs a new instance of the io.particle.android.sdk.devicesetup.ui.WifiListFragment$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onNetworkSelected(param0: T): void;
									createLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<java.util.Set<T>>;
									onLoadFinished(): void;
									getListEmptyText(): string;
									getAggroLoadingTimeMillis(): number;
								});
								public constructor();
								public getAggroLoadingTimeMillis(): number;
								public onNetworkSelected(param0: T): void;
								public getListEmptyText(): string;
								public createLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<java.util.Set<T>>;
								public onLoadFinished(): void;
							}
							export class WifiNetworkAdapter extends globalAndroid.widget.ArrayAdapter<any> {
								public static class: java.lang.Class<io.particle.android.sdk.devicesetup.ui.WifiListFragment.WifiNetworkAdapter>;
								public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ActivityInjectorComponent {
						public static class: java.lang.Class<io.particle.android.sdk.di.ActivityInjectorComponent>;
						/**
						 * Constructs a new instance of the io.particle.android.sdk.di.ActivityInjectorComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: io.particle.android.sdk.devicesetup.ui.GetReadyActivity): void;
							inject(param0: io.particle.android.sdk.accountsetup.LoginActivity): void;
							inject(param0: io.particle.android.sdk.accountsetup.PasswordResetActivity): void;
							inject(param0: io.particle.android.sdk.devicesetup.ui.SuccessActivity): void;
							inject(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity): void;
							inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity): void;
							inject(param0: io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity): void;
							inject(param0: io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity): void;
							inject(param0: io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity): void;
							inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectToApFragment): void;
							inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask): void;
							inject(param0: io.particle.android.sdk.accountsetup.TwoFactorActivity): void;
						});
						public constructor();
						public inject(param0: io.particle.android.sdk.accountsetup.LoginActivity): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.GetReadyActivity): void;
						public inject(param0: io.particle.android.sdk.accountsetup.PasswordResetActivity): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.SuccessActivity): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectToApFragment): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity): void;
						public inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask): void;
						public inject(param0: io.particle.android.sdk.accountsetup.TwoFactorActivity): void;
					}
					export module ActivityInjectorComponent {
						export class Builder {
							public static class: java.lang.Class<io.particle.android.sdk.di.ActivityInjectorComponent.Builder>;
							/**
							 * Constructs a new instance of the io.particle.android.sdk.di.ActivityInjectorComponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apModule(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.di.ActivityInjectorComponent.Builder;
								build(): io.particle.android.sdk.di.ActivityInjectorComponent;
							});
							public constructor();
							public apModule(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.di.ActivityInjectorComponent.Builder;
							public build(): io.particle.android.sdk.di.ActivityInjectorComponent;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApModule {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApModule>;
						public providesApConnector(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.SoftAPConfigRemover, param2: io.particle.android.sdk.utils.WifiFacade): io.particle.android.sdk.devicesetup.ApConnector;
						public constructor();
						public providesDiscoverProcessWorker(): io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker;
						public providesSetupStepsFactory(): io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory;
						public providesWifiFacade(param0: globalAndroid.content.Context): io.particle.android.sdk.utils.WifiFacade;
						public providesCommandClientFactory(): io.particle.android.sdk.devicesetup.commands.CommandClientFactory;
						public providesSoftApConfigRemover(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.WifiFacade): io.particle.android.sdk.utils.SoftAPConfigRemover;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApModule_ProvidesApConnectorFactory extends dagger.internal.Factory<io.particle.android.sdk.devicesetup.ApConnector> {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApModule_ProvidesApConnectorFactory>;
						public static create(param0: io.particle.android.sdk.di.ApModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<io.particle.android.sdk.utils.SoftAPConfigRemover>, param3: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>): io.particle.android.sdk.di.ApModule_ProvidesApConnectorFactory;
						public constructor(param0: io.particle.android.sdk.di.ApModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<io.particle.android.sdk.utils.SoftAPConfigRemover>, param3: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>);
						public get(): io.particle.android.sdk.devicesetup.ApConnector;
						public static proxyProvidesApConnector(param0: io.particle.android.sdk.di.ApModule, param1: globalAndroid.content.Context, param2: io.particle.android.sdk.utils.SoftAPConfigRemover, param3: io.particle.android.sdk.utils.WifiFacade): io.particle.android.sdk.devicesetup.ApConnector;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApModule_ProvidesCommandClientFactoryFactory extends dagger.internal.Factory<io.particle.android.sdk.devicesetup.commands.CommandClientFactory> {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApModule_ProvidesCommandClientFactoryFactory>;
						public static create(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.di.ApModule_ProvidesCommandClientFactoryFactory;
						public constructor(param0: io.particle.android.sdk.di.ApModule);
						public get(): io.particle.android.sdk.devicesetup.commands.CommandClientFactory;
						public static proxyProvidesCommandClientFactory(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.devicesetup.commands.CommandClientFactory;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApModule_ProvidesDiscoverProcessWorkerFactory extends dagger.internal.Factory<io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker> {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApModule_ProvidesDiscoverProcessWorkerFactory>;
						public static proxyProvidesDiscoverProcessWorker(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker;
						public constructor(param0: io.particle.android.sdk.di.ApModule);
						public static create(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.di.ApModule_ProvidesDiscoverProcessWorkerFactory;
						public get(): io.particle.android.sdk.devicesetup.ui.DiscoverProcessWorker;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApModule_ProvidesSetupStepsFactoryFactory extends dagger.internal.Factory<io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory> {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApModule_ProvidesSetupStepsFactoryFactory>;
						public static proxyProvidesSetupStepsFactory(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory;
						public constructor(param0: io.particle.android.sdk.di.ApModule);
						public static create(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.di.ApModule_ProvidesSetupStepsFactoryFactory;
						public get(): io.particle.android.sdk.devicesetup.setupsteps.SetupStepsFactory;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApModule_ProvidesSoftApConfigRemoverFactory extends dagger.internal.Factory<io.particle.android.sdk.utils.SoftAPConfigRemover> {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApModule_ProvidesSoftApConfigRemoverFactory>;
						public static create(param0: io.particle.android.sdk.di.ApModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>): io.particle.android.sdk.di.ApModule_ProvidesSoftApConfigRemoverFactory;
						public constructor(param0: io.particle.android.sdk.di.ApModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<io.particle.android.sdk.utils.WifiFacade>);
						public get(): io.particle.android.sdk.utils.SoftAPConfigRemover;
						public static proxyProvidesSoftApConfigRemover(param0: io.particle.android.sdk.di.ApModule, param1: globalAndroid.content.Context, param2: io.particle.android.sdk.utils.WifiFacade): io.particle.android.sdk.utils.SoftAPConfigRemover;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApModule_ProvidesWifiFacadeFactory extends dagger.internal.Factory<io.particle.android.sdk.utils.WifiFacade> {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApModule_ProvidesWifiFacadeFactory>;
						public static proxyProvidesWifiFacade(param0: io.particle.android.sdk.di.ApModule, param1: globalAndroid.content.Context): io.particle.android.sdk.utils.WifiFacade;
						public constructor(param0: io.particle.android.sdk.di.ApModule, param1: javax.inject.Provider<globalAndroid.content.Context>);
						public static create(param0: io.particle.android.sdk.di.ApModule, param1: javax.inject.Provider<globalAndroid.content.Context>): io.particle.android.sdk.di.ApModule_ProvidesWifiFacadeFactory;
						public get(): io.particle.android.sdk.utils.WifiFacade;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApplicationComponent {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApplicationComponent>;
						/**
						 * Constructs a new instance of the io.particle.android.sdk.di.ApplicationComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							activityComponentBuilder(): io.particle.android.sdk.di.ActivityInjectorComponent.Builder;
							getApplication(): globalAndroid.app.Application;
							getContext(): globalAndroid.content.Context;
							getParticleCloud(): io.particle.android.sdk.cloud.ParticleCloud;
							getGson(): com.google.gson.Gson;
						});
						public constructor();
						public getContext(): globalAndroid.content.Context;
						public activityComponentBuilder(): io.particle.android.sdk.di.ActivityInjectorComponent.Builder;
						public getParticleCloud(): io.particle.android.sdk.cloud.ParticleCloud;
						public getGson(): com.google.gson.Gson;
						public getApplication(): globalAndroid.app.Application;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApplicationModule {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApplicationModule>;
						public providesContext(): globalAndroid.content.Context;
						public providesApplication(): globalAndroid.app.Application;
						public constructor(param0: globalAndroid.app.Application);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApplicationModule_ProvidesApplicationFactory extends dagger.internal.Factory<globalAndroid.app.Application> {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApplicationModule_ProvidesApplicationFactory>;
						public static proxyProvidesApplication(param0: io.particle.android.sdk.di.ApplicationModule): globalAndroid.app.Application;
						public get(): globalAndroid.app.Application;
						public static create(param0: io.particle.android.sdk.di.ApplicationModule): io.particle.android.sdk.di.ApplicationModule_ProvidesApplicationFactory;
						public constructor(param0: io.particle.android.sdk.di.ApplicationModule);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class ApplicationModule_ProvidesContextFactory extends dagger.internal.Factory<globalAndroid.content.Context> {
						public static class: java.lang.Class<io.particle.android.sdk.di.ApplicationModule_ProvidesContextFactory>;
						public static proxyProvidesContext(param0: io.particle.android.sdk.di.ApplicationModule): globalAndroid.content.Context;
						public get(): globalAndroid.content.Context;
						public static create(param0: io.particle.android.sdk.di.ApplicationModule): io.particle.android.sdk.di.ApplicationModule_ProvidesContextFactory;
						public constructor(param0: io.particle.android.sdk.di.ApplicationModule);
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class CloudModule {
						public static class: java.lang.Class<io.particle.android.sdk.di.CloudModule>;
						public constructor();
						public providesParticleCloud(): io.particle.android.sdk.cloud.ParticleCloud;
						public providesGson(): com.google.gson.Gson;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class CloudModule_ProvidesGsonFactory extends dagger.internal.Factory<com.google.gson.Gson> {
						public static class: java.lang.Class<io.particle.android.sdk.di.CloudModule_ProvidesGsonFactory>;
						public get(): com.google.gson.Gson;
						public static proxyProvidesGson(param0: io.particle.android.sdk.di.CloudModule): com.google.gson.Gson;
						public constructor(param0: io.particle.android.sdk.di.CloudModule);
						public static create(param0: io.particle.android.sdk.di.CloudModule): io.particle.android.sdk.di.CloudModule_ProvidesGsonFactory;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class CloudModule_ProvidesParticleCloudFactory extends dagger.internal.Factory<io.particle.android.sdk.cloud.ParticleCloud> {
						public static class: java.lang.Class<io.particle.android.sdk.di.CloudModule_ProvidesParticleCloudFactory>;
						public constructor(param0: io.particle.android.sdk.di.CloudModule);
						public static create(param0: io.particle.android.sdk.di.CloudModule): io.particle.android.sdk.di.CloudModule_ProvidesParticleCloudFactory;
						public static proxyProvidesParticleCloud(param0: io.particle.android.sdk.di.CloudModule): io.particle.android.sdk.cloud.ParticleCloud;
						public get(): io.particle.android.sdk.cloud.ParticleCloud;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class DaggerApplicationComponent extends io.particle.android.sdk.di.ApplicationComponent {
						public static class: java.lang.Class<io.particle.android.sdk.di.DaggerApplicationComponent>;
						public static builder(): io.particle.android.sdk.di.DaggerApplicationComponent.Builder;
						public getContext(): globalAndroid.content.Context;
						public activityComponentBuilder(): io.particle.android.sdk.di.ActivityInjectorComponent.Builder;
						public getParticleCloud(): io.particle.android.sdk.cloud.ParticleCloud;
						public getGson(): com.google.gson.Gson;
						public getApplication(): globalAndroid.app.Application;
					}
					export module DaggerApplicationComponent {
						export class ActivityInjectorComponentBuilder extends io.particle.android.sdk.di.ActivityInjectorComponent.Builder {
							public static class: java.lang.Class<io.particle.android.sdk.di.DaggerApplicationComponent.ActivityInjectorComponentBuilder>;
							public apModule(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.di.ActivityInjectorComponent.Builder;
							public build(): io.particle.android.sdk.di.ActivityInjectorComponent;
							public apModule(param0: io.particle.android.sdk.di.ApModule): io.particle.android.sdk.di.DaggerApplicationComponent.ActivityInjectorComponentBuilder;
						}
						export class ActivityInjectorComponentImpl extends io.particle.android.sdk.di.ActivityInjectorComponent {
							public static class: java.lang.Class<io.particle.android.sdk.di.DaggerApplicationComponent.ActivityInjectorComponentImpl>;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectingActivity): void;
							public inject(param0: io.particle.android.sdk.accountsetup.TwoFactorActivity): void;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.SuccessActivity): void;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.SelectNetworkActivity): void;
							public inject(param0: io.particle.android.sdk.accountsetup.LoginActivity): void;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectToApFragment): void;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.ManualNetworkEntryActivity): void;
							public inject(param0: io.particle.android.sdk.accountsetup.PasswordResetActivity): void;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.DiscoverDeviceActivity): void;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.ConnectingProcessWorkerTask): void;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.GetReadyActivity): void;
							public inject(param0: io.particle.android.sdk.devicesetup.ui.PasswordEntryActivity): void;
						}
						export class Builder {
							public static class: java.lang.Class<io.particle.android.sdk.di.DaggerApplicationComponent.Builder>;
							public applicationModule(param0: io.particle.android.sdk.di.ApplicationModule): io.particle.android.sdk.di.DaggerApplicationComponent.Builder;
							public build(): io.particle.android.sdk.di.ApplicationComponent;
							public cloudModule(param0: io.particle.android.sdk.di.CloudModule): io.particle.android.sdk.di.DaggerApplicationComponent.Builder;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module di {
					export class PerActivity {
						public static class: java.lang.Class<io.particle.android.sdk.di.PerActivity>;
						/**
						 * Constructs a new instance of the io.particle.android.sdk.di.PerActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module ui {
					export class BaseActivity {
						public static class: java.lang.Class<io.particle.android.sdk.ui.BaseActivity>;
						public static setupOnly: boolean;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public attachBaseContext(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module ui {
					export class NextActivitySelector {
						public static class: java.lang.Class<io.particle.android.sdk.ui.NextActivitySelector>;
						public static getNextActivityIntent(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.cloud.ParticleCloud, param2: io.particle.android.sdk.persistance.SensitiveDataStorage, param3: io.particle.android.sdk.devicesetup.SetupResult): globalAndroid.content.Intent;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export abstract class BetterAsyncTaskLoader<T>  extends globalAndroid.support.v4.content.AsyncTaskLoader<any> {
						public static class: java.lang.Class<io.particle.android.sdk.utils.BetterAsyncTaskLoader<any>>;
						public hasContent(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getLoadedContent(): any;
						public onStartLoading(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class CoreNameGenerator {
						public static class: java.lang.Class<io.particle.android.sdk.utils.CoreNameGenerator>;
						public constructor();
						public static generateUniqueName(param0: java.util.Set<string>): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class Crypto {
						public static class: java.lang.Class<io.particle.android.sdk.utils.Crypto>;
						public constructor();
						public static encryptAndEncodeToHex(param0: string, param1: java.security.PublicKey): string;
						public static readPublicKeyFromHexEncodedDerString(param0: string): java.security.PublicKey;
					}
					export module Crypto {
						export class CryptoException {
							public static class: java.lang.Class<io.particle.android.sdk.utils.Crypto.CryptoException>;
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class ParticleDeviceSetupInternalStringUtils {
						public static class: java.lang.Class<io.particle.android.sdk.utils.ParticleDeviceSetupInternalStringUtils>;
						public static removeEnd(param0: string, param1: string): string;
						public static removeStart(param0: string, param1: string): string;
						public constructor();
						public static remove(param0: string, param1: string): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class SEGAnalytics {
						public static class: java.lang.Class<io.particle.android.sdk.utils.SEGAnalytics>;
						public static analyticsKey: string;
						public static analyticsOptOut: boolean;
						public static track(param0: string, param1: com.segment.analytics.Properties): void;
						public static identify(param0: string): void;
						public constructor();
						public static initialize(param0: globalAndroid.content.Context): void;
						public static screen(param0: string): void;
						public static track(param0: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class SSID extends java.lang.Object {
						public static class: java.lang.Class<io.particle.android.sdk.utils.SSID>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<io.particle.android.sdk.utils.SSID>;
						public describeContents(): number;
						public static from(param0: string): io.particle.android.sdk.utils.SSID;
						public static from(param0: globalAndroid.net.wifi.WifiInfo): io.particle.android.sdk.utils.SSID;
						public inQuotes(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public static from(param0: globalAndroid.net.wifi.ScanResult): io.particle.android.sdk.utils.SSID;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public compareTo(param0: io.particle.android.sdk.utils.SSID): number;
						public static from(param0: globalAndroid.net.wifi.WifiConfiguration): io.particle.android.sdk.utils.SSID;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class SoftAPConfigRemover {
						public static class: java.lang.Class<io.particle.android.sdk.utils.SoftAPConfigRemover>;
						public reenableWifiNetworks(): void;
						public constructor(param0: globalAndroid.content.Context, param1: io.particle.android.sdk.utils.WifiFacade);
						public onSoftApConfigured(param0: io.particle.android.sdk.utils.SSID): void;
						public removeAllSoftApConfigs(): void;
						public onWifiNetworkDisabled(param0: io.particle.android.sdk.utils.SSID): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class WifiFacade {
						public static class: java.lang.Class<io.particle.android.sdk.utils.WifiFacade>;
						public static is24Ghz: io.particle.android.sdk.utils.Funcy.Predicate<globalAndroid.net.wifi.ScanResult>;
						public static isWifiNameTruthy: io.particle.android.sdk.utils.Funcy.Predicate<globalAndroid.net.wifi.ScanResult>;
						public disconnect(): boolean;
						public isWifiEnabled(): boolean;
						public reenableNetwork(param0: io.particle.android.sdk.utils.SSID): boolean;
						public getCurrentlyConnectedSSID(): io.particle.android.sdk.utils.SSID;
						public getScanResults(): java.util.List<globalAndroid.net.wifi.ScanResult>;
						public reconnect(): boolean;
						public static get(param0: globalAndroid.content.Context): io.particle.android.sdk.utils.WifiFacade;
						public getWifiConfiguration(param0: io.particle.android.sdk.utils.SSID): globalAndroid.net.wifi.WifiConfiguration;
						public addNetwork(param0: globalAndroid.net.wifi.WifiConfiguration): number;
						public reassociate(): void;
						public getConnectionInfo(): globalAndroid.net.wifi.WifiInfo;
						public getNetworkForSSID(param0: io.particle.android.sdk.utils.SSID): globalAndroid.net.Network;
						public enableNetwork(param0: number, param1: boolean): boolean;
						public getIdForConfiguredNetwork(param0: io.particle.android.sdk.utils.SSID): number;
						public setWifiEnabled(param0: boolean): boolean;
						public removeNetwork(param0: number): boolean;
						public removeNetwork(param0: io.particle.android.sdk.utils.SSID): boolean;
						public startScan(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export class WorkerFragment {
						public static class: java.lang.Class<io.particle.android.sdk.utils.WorkerFragment>;
						public constructor();
						public static addFragment(param0: globalAndroid.support.v4.app.FragmentActivity, param1: globalAndroid.support.v4.app.Fragment, param2: string): void;
						public onAttach(param0: globalAndroid.content.Context): void;
						public static buildFragmentTag(param0: java.lang.Class<any>): string;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export module ui {
						export class ParticleUi {
							public static class: java.lang.Class<io.particle.android.sdk.utils.ui.ParticleUi>;
							public constructor();
							public static showParticleButtonProgress(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number, param2: boolean): void;
							public static enableBrandLogoInverseVisibilityAgainstSoftKeyboard(param0: globalAndroid.support.v4.app.FragmentActivity): void;
						}
						export module ParticleUi {
							export class BrandImageHeaderHider extends io.particle.android.sdk.utils.ui.SoftKeyboardVisibilityDetectingLinearLayout.SoftKeyboardVisibilityChangeListener {
								public static class: java.lang.Class<io.particle.android.sdk.utils.ui.ParticleUi.BrandImageHeaderHider>;
								public onSoftKeyboardHidden(): void;
								public constructor(param0: globalAndroid.support.v4.app.FragmentActivity);
								public onSoftKeyboardShown(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export module ui {
						export class SoftKeyboardVisibilityDetectingLinearLayout {
							public static class: java.lang.Class<io.particle.android.sdk.utils.ui.SoftKeyboardVisibilityDetectingLinearLayout>;
							public setOnSoftKeyboardVisibilityChangeListener(param0: io.particle.android.sdk.utils.ui.SoftKeyboardVisibilityDetectingLinearLayout.SoftKeyboardVisibilityChangeListener): void;
							public onMeasure(param0: number, param1: number): void;
							public dispatchKeyEventPreIme(param0: globalAndroid.view.KeyEvent): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
						export module SoftKeyboardVisibilityDetectingLinearLayout {
							export class SoftKeyboardVisibilityChangeListener {
								public static class: java.lang.Class<io.particle.android.sdk.utils.ui.SoftKeyboardVisibilityDetectingLinearLayout.SoftKeyboardVisibilityChangeListener>;
								/**
								 * Constructs a new instance of the io.particle.android.sdk.utils.ui.SoftKeyboardVisibilityDetectingLinearLayout$SoftKeyboardVisibilityChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSoftKeyboardShown(): void;
									onSoftKeyboardHidden(): void;
								});
								public constructor();
								public onSoftKeyboardHidden(): void;
								public onSoftKeyboardShown(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export module ui {
						export class Toaster {
							public static class: java.lang.Class<io.particle.android.sdk.utils.ui.Toaster>;
							public constructor();
							public static s(param0: globalAndroid.content.Context, param1: string): void;
							public static s(param0: globalAndroid.support.v4.app.Fragment, param1: string): void;
							public static l(param0: globalAndroid.content.Context, param1: string, param2: number): void;
							public static s(param0: globalAndroid.view.View, param1: string): void;
							public static l(param0: globalAndroid.content.Context, param1: string): void;
							public static l(param0: globalAndroid.support.v4.app.Fragment, param1: string): void;
							public static s(param0: globalAndroid.content.Context, param1: string, param2: number): void;
							public static l(param0: globalAndroid.view.View, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export module ui {
						export class Ui {
							public static class: java.lang.Class<io.particle.android.sdk.utils.ui.Ui>;
							public constructor();
							public static setText(param0: globalAndroid.support.v4.app.Fragment, param1: number, param2: string): globalAndroid.widget.TextView;
							public static getText(param0: globalAndroid.support.v4.app.Fragment, param1: number, param2: boolean): string;
							public static findFrag(param0: globalAndroid.support.v4.app.FragmentActivity, param1: string): globalAndroid.support.v4.app.Fragment;
							public static findFrag(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number): globalAndroid.support.v4.app.Fragment;
							public static fadeViewVisibility(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number, param2: boolean): void;
							public static setTextFromHtml(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number, param2: string): globalAndroid.widget.TextView;
							public static setText(param0: globalAndroid.view.View, param1: number, param2: string): globalAndroid.widget.TextView;
							public static findView(param0: globalAndroid.support.v4.app.Fragment, param1: number): globalAndroid.view.View;
							public static getText(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number, param2: boolean): string;
							public static findView(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number): globalAndroid.view.View;
							public static findView(param0: globalAndroid.app.Dialog, param1: number): globalAndroid.view.View;
							public static findView(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
							public static getTintedDrawable(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.graphics.drawable.Drawable;
							public static setTextFromHtml(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number, param2: number): globalAndroid.widget.TextView;
							public static setText(param0: globalAndroid.support.v4.app.FragmentActivity, param1: number, param2: string): globalAndroid.widget.TextView;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module particle {
		export module android {
			export module sdk {
				export module utils {
					export module ui {
						export class WebViewActivity {
							public static class: java.lang.Class<io.particle.android.sdk.utils.ui.WebViewActivity>;
							public constructor();
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public static buildIntent(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: string): globalAndroid.content.Intent;
							public static buildIntent(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): globalAndroid.content.Intent;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//io.particle.android.sdk.devicesetup.ui.WifiListFragment:1
//io.particle.android.sdk.devicesetup.ui.WifiListFragment.Client:1
//io.particle.android.sdk.utils.BetterAsyncTaskLoader:1

