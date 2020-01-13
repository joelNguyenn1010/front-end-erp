import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'

export const AddLastName = () => {

    const name = useSelector((state:AppState) => state.CreateCustomerReducer.input.lastName)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('lastName', newVal))
    }

    return (
        <div>
            <Input value={name} placeholder='Last name'  onChange={onChange} allowClear  />
        </div>
    )
}

export default AddLastName
