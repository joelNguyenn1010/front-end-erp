import React from 'react'
import { Button, Icon } from 'antd'
import { onStart } from '../../../store/action/googleadsSetting/settingAction'
import { Settings } from '../../../store/contract/googladsSetting/settingContract'
import { useSelector } from 'react-redux'
import { AppState } from '../../../store/ApplicationState'

const StartSetting: React.FC = () => {

    const settings: Settings = useSelector((state: AppState) => state.settingReducer)
    
    return (<Button type="primary" onClick={() => onStart(settings)} style={{"width": "30%"}}><Icon type="play-circle" />Start</Button>)
}

export default StartSetting