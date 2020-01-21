import React from 'react'
import { Input, InputNumber } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import NumericInput from '../../../../../components/conponentInputNumberOnly/inputNumberOnly'


const AddPhoneNumber = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.phoneNumber)


    const dispatch = useDispatch()

    const onChange = (val: number | undefined) => {
        dispatch(changeCustomerValue('phoneNumber', val))

    }

    return (
        <div>
            <InputNumber maxLength={12} placeholder="Phone number" onChange={onChange} />
        </div>
    )
}

export default AddPhoneNumber
