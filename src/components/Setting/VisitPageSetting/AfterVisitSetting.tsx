import React from 'react'
import PeriodTime from '../../PeriodTime'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store/ApplicationState'
import { changePeriodAfterVisit } from '../../../store/action/googleadsSetting/settingAction'

const AfterVisitSetting: React.FC = () => {

    const delayAfterFinish: [number, number] = useSelector((state: AppState) => state.settingReducer.delayAfterFinish.seconds)

    const fromTimeFinish = delayAfterFinish[0]

    const toTimeFinish = delayAfterFinish[1]

    const dispatch = useDispatch()

    const handlePeriodChange = (values: [number, number]) => {
        dispatch(changePeriodAfterVisit(values))
    }

    return(<div>After the operation is complete <PeriodTime onChangePeriod={handlePeriodChange} fromTime={fromTimeFinish} toTime={toTimeFinish} /> seconds wait.</div>)
}

export default AfterVisitSetting