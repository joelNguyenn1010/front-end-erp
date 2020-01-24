import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const InputGstNumberComponent = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.gstNumber)

    const dispatch = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('gstNumber', newVal))
    }

    return (
        <div>
            <Input value={name} onChange={onChange} allowClear placeholder='GST/VAT'/>
        </div>
    )
}
export default InputGstNumberComponent

