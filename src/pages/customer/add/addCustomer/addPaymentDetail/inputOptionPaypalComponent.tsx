import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Form } from 'antd'

const InputOptionPaypalComponent = () => {

    const { register } = useFormContext()

    return (
        <Form.Item
            label="Paypal"
        >
            <input className="ant-input" name="paypayl" ref={register} placeholder='nguyenngocanh@paypal.com' />
        </Form.Item>
    )
}

export default InputOptionPaypalComponent
