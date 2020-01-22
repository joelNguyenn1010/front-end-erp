import React from 'react'
import { Form } from 'antd'
import { useFormContext } from 'react-hook-form'

const InputBankBsbComponent = () => {

    const { register, errors } = useFormContext()

    return (

        <Form.Item
            label="BSB"
            help={errors.BSB ? "BSB is required" : ""}
            validateStatus={errors.BSB ? "error" : ''}
        >
            <input type="number" className="ant-input" name="BSB" ref={register({ required: true })} placeholder='062888' />
        </Form.Item>

    )
}
export default InputBankBsbComponent

