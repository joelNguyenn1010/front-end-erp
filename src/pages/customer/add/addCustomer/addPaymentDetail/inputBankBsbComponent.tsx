import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import NumericInput from '../../../../../components/conponentInputNumberOnly/inputNumberOnly'
import { InputNumber } from 'antd'

const InputBankBsbComponent = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.bankBsb)

    const dispatch = useDispatch()

    const onChange = (val: number | undefined) => {
        dispatch(changeCustomerValue('bankBsb', val))
    }

    return (
        <div>
            <InputNumber minLength={1} maxLength={6} onChange={onChange}  placeholder='BSB'/>
        </div>
    )
}
export default InputBankBsbComponent

