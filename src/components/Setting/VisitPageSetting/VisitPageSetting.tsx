import React from 'react'
import { Checkbox, InputNumber } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { visitWithinPageAction, changePeriodVisitTime } from '../../../store/action/googleadsSetting/settingAction'
import { AppState } from '../../../store/ApplicationState'
import PeriodTime from '../../PeriodTime'
const VisitPageSetting: React.FC = () => {

    const dispatch = useDispatch()

    const handleChange = (e: CheckboxChangeEvent) => {
        const value: boolean = e.target.checked
        dispatch(visitWithinPageAction(value))
    }


    const periodVisitTime: [number, number] = useSelector((state: AppState) => state.settingReducer.visitPeriodTime.period.seconds)

    const numberOfPages: number = useSelector((state: AppState) => state.settingReducer.visitPeriodTime.numberOfSites)
    
    const fromTimeVisit = periodVisitTime[0]

    const toTimeVisit = periodVisitTime[1]

    const handlePeriodChange = (values: [number, number]) => {
        dispatch(changePeriodVisitTime(numberOfPages, values))
    }


    const handleNumberOfPage = (numPages?: number) => {
        if(numPages && numPages >= 0) {
            dispatch(changePeriodVisitTime(numPages, periodVisitTime))
        }
    }

    return (<React.Fragment>
        <Checkbox style={{fontWeight: 600}} onChange={handleChange}>Visit the Page within the Site</Checkbox>
        <div>
            <InputNumber value={numberOfPages} onChange={handleNumberOfPage} name="numberOfPagesVisit" /> pages <PeriodTime
                fromTime={fromTimeVisit}
                toTime={toTimeVisit}
                onChangePeriod={handlePeriodChange}
            /> visit from second.
        </div>
    </React.Fragment>)
}

export default VisitPageSetting