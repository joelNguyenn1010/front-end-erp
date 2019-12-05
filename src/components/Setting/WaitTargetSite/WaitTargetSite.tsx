import React, { useState } from 'react';
import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../store/ApplicationState';
import { changeTargetDelayTime } from '../../../store/action/googleadsSetting/settingAction';
import PeriodTime from '../../PeriodTime';


const waitTargetStyleBox = {
    padding: '1rem'
}


const WaitTargetSite: React.FC = props => {

    const delayTargetStore: [number, number] = useSelector((state: AppState) => state.settingReducer.delayTargetSite.seconds)

    const dispatch = useDispatch()

    const fromTime: number = delayTargetStore[0]

    const toTime: number = delayTargetStore[1]
    
    const handlePeriodChange = (values: [number, number]) => {
        dispatch(changeTargetDelayTime(values))
    }
    
    return (
        <div style={waitTargetStyleBox}>
            Wait <PeriodTime fromTime={fromTime} toTime={toTime} onChangePeriod={handlePeriodChange} /> seconds on the targeted website
        </div>
    )
}

export default WaitTargetSite