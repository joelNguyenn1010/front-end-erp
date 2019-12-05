
import { KeyWordAction, SiteAction, BrowserAction, IncogniteAction, TargetDelayAction, VisitWithinPageAction, ModesAction, OptionsAction, VisitPeriodAction, AfterVisitPeriodAction, AutoResetTimeAction, ChangeTargetSiteAction } from './settingActionType'
import { SettingType, Browser, Modes, Options } from '../../contract/googladsSetting/settingType'
import { Dispatch } from 'redux'
import { ThunkAction, } from 'redux-thunk'
import { Keywords, Sites, TargetSiteAfterTime, Settings } from '../../contract/googladsSetting/settingContract';
import * as _ from 'lodash'
import { message } from 'antd';
type ThunkResult<R> = ThunkAction<R, {}, undefined, any>;


// this action will add the keyword from store
export const addKeyword = (key: string): ThunkResult<KeyWordAction> => {
    return (dispatch: Dispatch, getState: any) => {
        // get the previous keys state
        const previousSetting = getState().settingReducer.keys
        // make a copy the previous object 
        let keys: Keywords = Object.assign({}, previousSetting)
        // trim function is to remove the white space
        keys.names.push(key.trim())


        return dispatch({
            type: SettingType.CHANGE_KEYWORD,
            payload: keys
        })
    }
}

// this action will remove the keyword from store
export const removeKeyword = (position: number): ThunkResult<KeyWordAction> => {
    return (dispatch: Dispatch, getState: any) => {
        // get the previous keys state
        const previousKeys = getState().settingReducer.keys

        let keys: Keywords = Object.assign({}, previousKeys)

        _.remove(keys.names, (value: string, key: number) => {
            return key === position
        })
        return dispatch({
            type: SettingType.CHANGE_KEYWORD,
            payload: keys
        })
    }
}

// this action will add the site from store
export const addSites = (site: string): ThunkResult<SiteAction> => {
    return (dispatch: Dispatch, getState: any) => {

        let previousSites: Sites = getState().settingReducer.sites

        let sites: Sites = Object.assign({}, previousSites)

        sites.names.push(site.trim())

        return dispatch({
            type: SettingType.CHANGE_SITE,
            payload: sites
        })
    }

}


// this action will remove the site from store
export const removeSite = (position: number): ThunkResult<SiteAction> => {
    return (dispatch: Dispatch, getState: any) => {
        // get the previous keys state
        let previousSites: Sites = getState().settingReducer.sites

        let sites: Sites = Object.assign({}, previousSites)

        _.remove(sites.names, (value: string, key: number) => {
            return key === position
        })

        return dispatch({
            type: SettingType.CHANGE_SITE,
            payload: sites
        })
    }
}


// change browser option action
export const changeBrowsers = (browsers: Browser[]): BrowserAction => {
    return {
        type: SettingType.CHANGE_BROWSERS,
        payload: browsers
    }
}


// change incognite value
export const changeIncognite = (value: boolean): IncogniteAction => 
    ({    
        type: SettingType.CHANGE_INCOGNITE,
        payload: {
            value
        }
    })



export const changeTargetSiteValue = (values: TargetSiteAfterTime): ChangeTargetSiteAction => 
({
    type: SettingType.CHANGE_TARGET_SITE_VALUES,
    payload: values
})

// change delay time value 

export const changeTargetDelayTime = (times: [number, number]): TargetDelayAction => {
    return {
        type: SettingType.CHANGE_TARGET_DELAY,
        payload: times
    }
}

// change the viset the page within the site time
export const visitWithinPageAction = (value: boolean): VisitWithinPageAction => {
    return {
        type: SettingType.CHANGE_VISIT_WITHIN_PAGE,
        payload: value
    }
}

// add or remove the modes to store
export const changeModesAction = (modes: Modes[]): ModesAction => {
    return {
        type: SettingType.CHANGE_MODES,
        payload: modes
    }
}

// add or remove the options to store
export const changeOptionAction = (options: Options[]): OptionsAction => {
    return {
        type: SettingType.CHANGE_OPTIONS,
        payload: options
    }
}


export const changePeriodVisitTime = (numberOfSites: number, seconds: [number, number]): VisitPeriodAction => {
    return {
        type: SettingType.CHANGE_VISIT_PERIOD,
        payload: {
            numberOfSites ,
            period: {
                seconds
            }
        }
    }
}


// change the period of time after the page has visited
export const changePeriodAfterVisit = (values: [number, number]): AfterVisitPeriodAction => {
    return {
        type: SettingType.CHANGE_AFTER_FINISH_PERIOD,
        payload: values
    }
}


// change number of auto reset time
export const changeAutoResetTime = (time: number): AutoResetTimeAction => {
    return {
        type: SettingType.CHANGE_AUTO_RESET_TIME,
        payload: time
    }
}


export const onStart = (settings: Settings): void => {
    message.info('on start get trigger');
    console.log('on start get trigger');
}


export const onStop = (): void => {
    message.info('on stop get trigger');
    console.log('on stop get trigger');
}


export const onExport = (settings: Settings): void => {
    message.info('on export get trigger');
    console.log('on export get trigger');
}