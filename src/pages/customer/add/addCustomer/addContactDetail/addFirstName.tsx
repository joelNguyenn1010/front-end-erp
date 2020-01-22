import React from 'react'
import { Input, Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import { useFormContext } from 'react-hook-form'
import InputForm from '../../../../../components/InputForm'

export const AddFirstName = () => {
    const { register, errors } = useFormContext();

    return (
            <Form.Item
                help= {errors.fullName && "Name is required"}
                label={"Full Name"}
                validateStatus={errors.fullName ? "error" : ""}
            >
                <input ref={register({ required: true })} name="fullName" className="ant-input" placeholder="Full Name" />

            </Form.Item>
        
    )
}
export default AddFirstName
