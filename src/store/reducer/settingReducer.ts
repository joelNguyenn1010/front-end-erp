import { Settings } from '../contract/googladsSetting/settingContract'
import { Browser, SettingType } from '../contract/googladsSetting/settingType'
import { SettingsActionType } from '../action/googleadsSetting/settingActionType'
import { AppState } from '../ApplicationState'

// settings:  Takes in a json object which pre-populates the form to some previous settings
const init: Settings = {
    keys: {
        names: []
    },
    sites: {
        names: []
    },
    browsers: [Browser.EXPLORER],
        
    is_incognito: false,
    delayTargetSite: { seconds: [0, 10] },
    visitPageWithinSite: false,
    visitPeriodTime: {
        numberOfSites: 1,
        period: {
            seconds: [5, 10]
        }
    },
    delayAfterFinish: { seconds: [0, 10] },
    targetSiteAfterTime: {
        numberOfSites: 1,
        waitTime: 1
    },
    numberOfResetAfterOperation: 0,
    modes: [],
    options: []
}


const reducers = (state: object = init, action: SettingsActionType) => {

    switch (action.type) {
        case SettingType.CHANGE_TARGET_SITE_VALUES:
            return {
                ...state,
                targetSiteAfterTime: action.payload
            }
            
        case SettingType.CHANGE_AFTER_FINISH_PERIOD:
            return {
                ...state,
                delayAfterFinish: {
                    seconds: action.payload
                }
            }

        case SettingType.CHANGE_AUTO_RESET_TIME:
            return {
                ...state,
                numberOfResetAfterOperation: action.payload
            }
        case SettingType.CHANGE_VISIT_PERIOD:
            return {
                ...state,
                visitPeriodTime: action.payload
            }
        case SettingType.CHANGE_OPTIONS:
            return {
                ...state,
                options: action.payload
            }
        case SettingType.CHANGE_MODES:
            return {
                ...state,
                modes: action.payload
            }
        case SettingType.CHANGE_TARGET_DELAY:
            return {
                ...state,
                delayTargetSite: {
                    seconds: action.payload
                }
            }

        case SettingType.CHANGE_VISIT_WITHIN_PAGE:
            return {
                ...state,
                visitPageWithinSite: action.payload
            }
        case SettingType.CHANGE_INCOGNITE:
            console.log(action.payload.value)
            return {
                ...state,
                is_incognito: action.payload.value
            }
        case SettingType.CHANGE_BROWSERS:

            return {
                ...state,
                browsers: action.payload
            }

        case SettingType.CHANGE_KEYWORD:
            return {
                ...state,
                keys: {
                    ...action.payload
                }
            }
        case SettingType.CHANGE_SITE:
            return {
                ...state,
                sites: {
                    ...action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default reducers