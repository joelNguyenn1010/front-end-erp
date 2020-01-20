import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const InputBankNameComponent = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.bankName)

    const dispatch = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('bankName', newVal))
    }

    return (
        <div>
            <Input value={name} onChange={onChange} allowClear placeholder='Bank name'/>
        </div>
    )
}
export default InputBankNameComponent

