import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'


const AddPhoneNumber = () => {

    const name = useSelector((state:AppState) => state.CreateCustomerReducer.input.phoneNumber)

    console.log(name)

    const dispatch = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('phoneNumber', newVal))

        console.log(newVal)
    }

    return (
        <div>
            <Input value={name} placeholder='Phone number' allowClear  onChange={onChange} />
        </div>
    )
}

export default AddPhoneNumber
