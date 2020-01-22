import React from 'react'
import { Form, Input } from 'antd'


interface InputFormProps {
    placeholder?: string
    label?: string
    status: boolean
    message?: string
    name: string
    ref: any
}
const InputForm: React.FC<InputFormProps> = props => {
    const validationStatus = props.status ? "error" : "success"
    return (
        <Form.Item
            help={props.message}
            label={props.label}
            validateStatus={validationStatus}
        >
           {props.children}
        </Form.Item>
    )
}

export default InputForm
