import React from 'react'
import { Form } from 'antd'
import { useFormContext } from 'react-hook-form'

const InputBankNameComponent = () => {

  
    const {register, errors} = useFormContext()

    return (
        <Form.Item
            label="Bank Name"
            help={errors.bankName ? "Bank name is required" : ""}
            validateStatus={errors.bankName ? "error" : ''}

        >
            <input className="ant-input" name="bankName" ref={register({required: true})} placeholder='Bank name'  />
        </Form.Item>
    )
}
export default InputBankNameComponent

