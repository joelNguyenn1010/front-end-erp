import React from 'react'
import { Button } from 'antd'
import { onExport } from '../../../store/action/googleadsSetting/settingAction'
import { Settings } from '../../../store/contract/googladsSetting/settingContract'
import { useSelector } from 'react-redux'
import { AppState } from '../../../store/ApplicationState'

const ExportReport: React.FC = () => {
    const settings: Settings = useSelector((state: AppState) => state.settingReducer)
    return (<Button type="primary" onClick={() => onExport(settings)} ghost style={{"width": "40%"}}>Export Report</Button>)
}

export default ExportReport