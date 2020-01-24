import React from 'react'
import { Form } from 'antd'
import { useFormContext } from 'react-hook-form';

const InputShippingAccount = () => {

    const { register, errors} = useFormContext();

    return (
        <Form.Item help={errors.shippingAccount && "Shipping account is required"} label={"Shipping Account"} validateStatus={errors.shippingAccount ? "error" : ""}>
            <input
                ref={register({required: true})}
                name='shippingAccount'
                className='ant-input'
                placeholder='Account'
            />
        </Form.Item>
    )
}

export default InputShippingAccount