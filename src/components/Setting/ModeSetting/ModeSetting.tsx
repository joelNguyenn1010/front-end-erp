import React from 'react'
import { Checkbox, Card } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store/ApplicationState'
import { Modes } from '../../../store/contract/googladsSetting/settingType'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { changeModesAction } from '../../../store/action/googleadsSetting/settingAction'
const ModeSetting: React.FC = () => {

    const modes: Array<string> = Object.values(Modes)

    const dispatch = useDispatch()

    const modesStore: Array<string> = useSelector((state: AppState) => state.settingReducer.modes)

    const handleModeChange = (checkedValue: CheckboxValueType[]) => {
        const newModeSetting: Modes[] = Object.assign([], checkedValue)
        dispatch(changeModesAction(newModeSetting))
    }

    return (
        <Card><Checkbox.Group
            options={modes}
            value={modesStore}
            onChange={handleModeChange}
        /></Card>)
}

export default ModeSetting