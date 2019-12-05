import {Browser, Modes, Options} from './settingType'

export interface Keywords {
    names: Array<string>
}

export interface Sites {
    names: Array<string>
}

export interface Delays {
    seconds: [number, number]
}

export interface TargetSiteAfterTime {
    numberOfSites: number,
    waitTime: number
}

export interface VisitPeriodTime {
    numberOfSites: number,
    period: Delays
}

export interface Settings {
    // keywords
    keys: Keywords,
    // sites
    sites: Sites,
    // browsers
    browsers: Browser[],
    is_incognito: boolean
    // period to wait on the targeted website
    delayTargetSite: Delays,
    // will visit page within site
    visitPageWithinSite: boolean,
    // number of pages to visit from period time
    visitPeriodTime: VisitPeriodTime,
    delayAfterFinish: Delays,

    // 
    targetSiteAfterTime: TargetSiteAfterTime,
    // automatic reset time
    numberOfResetAfterOperation: number,
    // all the mode of the device
    modes: Modes[] | [Modes.PHONE_RESET, Modes.MOBILE_DATA]
    // all the option like clear cookie, change resolution, etc
    options: Options[]
}