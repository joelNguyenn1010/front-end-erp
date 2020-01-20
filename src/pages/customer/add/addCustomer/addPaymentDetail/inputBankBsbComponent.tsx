import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import NumericInput from '../../../../../components/conponentInputNumberOnly/inputNumberOnly'

const InputBankBsbComponent = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.bankBsb)

    const dispatch = useDispatch()

    const onChange = (val: number) => {
        dispatch(changeCustomerValue('bankBsb', val))
    }

    return (
        <div>
            <NumericInput minLength={1} maxLength={6} value={name} onChange={onChange} allowClear placeholder='BSB'/>
        </div>
    )
}
export default InputBankBsbComponent

