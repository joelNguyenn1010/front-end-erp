import { SettingType, Browser, Modes, Options } from '../../contract/googladsSetting/settingType'
import { Keywords, Sites, VisitPeriodTime, TargetSiteAfterTime } from '../../contract/googladsSetting/settingContract'


export interface KeyWordAction {
    type: typeof SettingType.CHANGE_KEYWORD,
    payload: Keywords
}

export interface SiteAction {
    type: typeof SettingType.CHANGE_SITE,
    payload: Sites
}

// this action responsible for changing browsers options

export interface BrowserAction {
    type: typeof SettingType.CHANGE_BROWSERS,
    payload: Browser[]
}


export interface ModesAction {
    type: typeof SettingType.CHANGE_MODES,
    payload: Modes[]
}

export interface IncogniteAction {
    type: typeof SettingType.CHANGE_INCOGNITE,
    payload: {
        value: boolean
    }
}


export interface TargetDelayAction {
    type: typeof SettingType.CHANGE_TARGET_DELAY,
    payload: [number, number]
}


export interface VisitWithinPageAction {
    type: typeof SettingType.CHANGE_VISIT_WITHIN_PAGE,
    payload: boolean
}


export interface OptionsAction {
    type: typeof SettingType.CHANGE_OPTIONS,
    payload: Options[]
}


export interface VisitPeriodAction {
    type: typeof SettingType.CHANGE_VISIT_PERIOD,
    payload: VisitPeriodTime
}


export interface AfterVisitPeriodAction {
    type: typeof SettingType.CHANGE_AFTER_FINISH_PERIOD,
    payload: [number, number]
}

export interface AutoResetTimeAction {
    type: typeof SettingType.CHANGE_AUTO_RESET_TIME,
    payload: number
}

export interface ChangeTargetSiteAction {
    type: typeof SettingType.CHANGE_TARGET_SITE_VALUES,
    payload: TargetSiteAfterTime
}

export type SettingsActionType = BrowserAction 
| IncogniteAction
| KeyWordAction
| SiteAction
| TargetDelayAction
| VisitWithinPageAction
| ModesAction
| OptionsAction
| VisitPeriodAction
| AfterVisitPeriodAction
| AutoResetTimeAction
| ChangeTargetSiteAction