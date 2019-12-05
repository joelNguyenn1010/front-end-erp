import React from 'react'
import { InputNumber } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store/ApplicationState'
import { changeTargetSiteValue } from '../../../store/action/googleadsSetting/settingAction'
import { TargetSiteAfterTime } from '../../../store/contract/googladsSetting/settingContract'

const TargetSiteSetting: React.FC = () => {


    const targetSite: number = useSelector((state: AppState) => state.settingReducer.targetSiteAfterTime.numberOfSites)
    
    const waitTime: number = useSelector((state: AppState) => state.settingReducer.targetSiteAfterTime.waitTime)

    const dispatch = useDispatch()

    const handleTargetSiteChange = (e?: number) => {
        if(e && e > 0) {
            const values: TargetSiteAfterTime = {
                numberOfSites: e,
                waitTime: waitTime
            }
            dispatch(changeTargetSiteValue(values))
        }
    }

    const handleTimes = (e?: number) => {
        // changeTargetSiteValue
        if(e && e > 0) {
            const values: TargetSiteAfterTime = {
                numberOfSites: targetSite,
                waitTime: e
            }
            dispatch(changeTargetSiteValue(values))
        }
        
    }

    


    return (<div>Target site <InputNumber value={targetSite} min={0} onChange={handleTargetSiteChange} /> if not found times <InputNumber min={0} value={waitTime} onChange={handleTimes} /> minutes wait.</div>)
}

export default TargetSiteSetting