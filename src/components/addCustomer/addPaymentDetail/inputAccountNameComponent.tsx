import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'

const InputAccountNameComponent = () => {

    const name =  useSelector((state:AppState) => state.CreateCustomerReducer.input.accountName)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('accountName', newVal))
    }

    return (
        <div>
            <Input  value={name} onChange={onChange} allowClear placeholder='Account name' />
        </div>
    )
}
export default InputAccountNameComponent
