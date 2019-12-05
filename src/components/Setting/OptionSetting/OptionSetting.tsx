import React from 'react'
import { Checkbox, Card } from 'antd'
import { Options } from '../../../store/contract/googladsSetting/settingType'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store/ApplicationState'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { changeOptionAction } from '../../../store/action/googleadsSetting/settingAction'
const OptionSetting: React.FC = () => {

    const dispatch = useDispatch()

    const options: Array<string> = Object.values(Options)

    const valuesOption: Array<string> = useSelector((state: AppState) => state.settingReducer.options)

    const handleOptionChange = (checkValues: CheckboxValueType[]) => {
        const newOptionSetting: Options[] = Object.assign([], checkValues)
        dispatch(changeOptionAction(newOptionSetting))
    }

    return (
    <Card><Checkbox.Group
        options={options}
        value={valuesOption}
        onChange={handleOptionChange}
    /></Card>)
}

export default OptionSetting