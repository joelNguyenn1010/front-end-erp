import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'

const InputCourrierNameComponent = () => {

    const name =  useSelector((state:AppState) => state.CreateCustomerReducer.input.courierName)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('courierName', newVal))
    }

    return (
        <div>
            <Input  value={name} onChange={onChange} allowClear placeholder='Courier name' />
        </div>
    )
}
export default InputCourrierNameComponent