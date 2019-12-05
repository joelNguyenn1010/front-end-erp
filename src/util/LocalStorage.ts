import { Settings } from "../store/contract/googladsSetting/settingContract";
import { Browser } from "../store/contract/googladsSetting/settingType";
const STORE_NAME = 'setting:storee'
export const save = (settings: any) => {
    localStorage.setItem(STORE_NAME, JSON.stringify(settings))
}


export const load = () : Settings => {
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
    let values = localStorage.getItem(STORE_NAME)

    if(values) {
        const settings: Settings = Object.assign({}, JSON.parse(values))
        return settings
    }
    
    return init
}