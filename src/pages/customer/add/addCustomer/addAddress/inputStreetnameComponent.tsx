import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const InputStreetnameComponent = () => {

    const name =  useSelector((state:AppState) => state.CustomerReducer.input.streetName)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('streetName', newVal))
    }

    return (
        <div>
            <Input  value={name} onChange={onChange} allowClear placeholder='Street name' />
        </div>
    )
}
export default InputStreetnameComponent