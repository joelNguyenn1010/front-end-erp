import React from 'react'
import { Button, Icon } from 'antd'
import { onStop } from '../../../store/action/googleadsSetting/settingAction'

const StopSetting: React.FC = () => {


    return(<Button type="danger" onClick={() => onStop()} style={{"width": "30%"}}><Icon type="pause-circle" />Stop</Button>)
}

export default StopSetting