import React from 'react'
import { Input, Form } from 'antd'
import { useFormContext } from 'react-hook-form'

const InputBankBranchComponent = () => {

    const { register, errors } = useFormContext()

    return (

        <Form.Item
            label="Bank branch"
            help={errors.bankName ? "Bank branch is required" : ""}
            validateStatus={errors.bankName ? "error" : ''}

        >
            <input className="ant-input" name="bankBranch" ref={register({ required: true })} placeholder='Wollongong, Blue Mountain...' />
        </Form.Item>



    )
}
export default InputBankBranchComponent

