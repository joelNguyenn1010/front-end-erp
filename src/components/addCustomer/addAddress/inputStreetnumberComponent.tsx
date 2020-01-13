import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'

const InputStreetnumberComponent = () => {

    const name =  useSelector((state:AppState) => state.CreateCustomerReducer.input.streetNumber)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('streetNumber', newVal))
    }

    return (
        <div>
            <Input  value={name} onChange={onChange} allowClear placeholder='Street number' />
        </div>
    )
}
export default InputStreetnumberComponent