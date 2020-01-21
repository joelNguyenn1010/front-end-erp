import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import NumericInput from '../../../../../components/conponentInputNumberOnly/inputNumberOnly'
import { InputNumber } from 'antd'

const InputBankAccountComponent = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.bankAccount)

    const dispatch = useDispatch()

    const onChange = (val: number | undefined) => {
        dispatch(changeCustomerValue('bankAccount', val))
    }

    return (
        <div>
            <InputNumber   onChange={onChange} maxLength={8} minLength={1}   placeholder='Account number'/>
        </div>
    )
}
export default InputBankAccountComponent

