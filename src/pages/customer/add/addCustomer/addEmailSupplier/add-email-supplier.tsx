import React from 'react'
import {useFormContext} from "react-hook-form";
import {Form} from 'antd'


const AddEmailSupplier = () => {
    const {register, errors} = useFormContext()

    return (
        <Form.Item
            help={errors.email && "Email is required"}
            label={"Email"}
            validateStatus={errors.email ? "error" : ""}
        >
            <input
                type={'email'}
                ref={register({ required: true })}
                name="email"
                className="ant-input"
                placeholder="Email"
            />

        </Form.Item>
    )
}

export default AddEmailSupplier