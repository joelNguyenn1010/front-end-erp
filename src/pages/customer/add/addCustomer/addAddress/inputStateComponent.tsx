import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const InputStateComponent = () => {

    const name =  useSelector((state:AppState) => state.CustomerReducer.input.state)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('state', newVal))
    }

    return (
        <div>
            <Input  value={name} onChange={onChange} allowClear placeholder='state' />
        </div>
    )
}
export default InputStateComponent