import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import NumericInput from '../../../../../components/conponentInputNumberOnly/inputNumberOnly'

const InputBankAccountComponent = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.bankAccount)

    const dispatch = useDispatch()

    const onChange = (val: number) => {
        dispatch(changeCustomerValue('bankAccount', val))
    }

    return (
        <div>
            <NumericInput value={name} onChange={onChange} maxLength={8} minLength={1}  allowClear placeholder='Account number'/>
        </div>
    )
}
export default InputBankAccountComponent

