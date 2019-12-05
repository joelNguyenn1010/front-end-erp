import React from 'react'
import { InputNumber } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store/ApplicationState'
import { changeAutoResetTime } from '../../../store/action/googleadsSetting/settingAction'

const AutomaticResetSetting: React.FC = () => {

    const resetTime: number = useSelector((state: AppState) => state.settingReducer.numberOfResetAfterOperation)

    const dispatch = useDispatch()

    const handleChange = (e?: number) => {
        if (e && e >= 0) {
            dispatch(changeAutoResetTime(e))
        }
    }

    return (<div><InputNumber value={resetTime} onChange={handleChange} /> automatic reset after operation.</div>)
}

export default AutomaticResetSetting