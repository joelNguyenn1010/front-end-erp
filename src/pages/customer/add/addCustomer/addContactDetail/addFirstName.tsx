import React from 'react'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

export const AddFirstName = () => {

    const name = useSelector((state: AppState) => state.CustomerReducer.input.fullName)

    const dispatch = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('fullName', newVal))
    }

    return (
        <div>
            <Input value={name}  placeholder='Full name' allowClear onChange={onChange}/>
        </div>
    )
}
export default AddFirstName
