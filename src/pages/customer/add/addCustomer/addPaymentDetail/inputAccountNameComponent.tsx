import React from 'react'
import { Input, Form } from 'antd'
import { useFormContext } from 'react-hook-form'

const InputAccountNameComponent = () => {

    const { register, errors } = useFormContext()

    return (
        <Form.Item
            label="Account name"
            help={errors.bankAccount ? "Account name is required" : ""}
            validateStatus={errors.bankAccount ? "error" : ''}
        >
            <input className="ant-input" name="bankAccount" ref={register({ required: true })} placeholder='Joel Nguyen' />
        </Form.Item>
    )
}
export default InputAccountNameComponent
