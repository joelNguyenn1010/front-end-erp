import React from 'react'
import {  Form } from 'antd'
import { useFormContext } from 'react-hook-form'


const AddPhoneNumber = () => {
    const { register, errors } = useFormContext()
    return (
        <Form.Item
            help={errors.phoneNumber && "Phone number is required"}
            label={"Phone Number"}
            validateStatus={errors.phoneNumber ? "error" : ""}
        >
            <input name="phoneNumber" className="ant-input" ref={register} placeholder='Phone number' type="number" />

        </Form.Item>
    )
}

export default AddPhoneNumber
