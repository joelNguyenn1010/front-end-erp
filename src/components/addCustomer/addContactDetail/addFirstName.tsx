import React from 'react'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'

export const AddFirstName = () => {

    const name = useSelector((state: AppState) => state.CreateCustomerReducer.input.firstName)

    const dispatch = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('firstName', newVal))
    }

    return (
        <div>
            <Input value={name}  placeholder='First name' allowClear onChange={onChange}/>
        </div>
    )
}
export default AddFirstName
