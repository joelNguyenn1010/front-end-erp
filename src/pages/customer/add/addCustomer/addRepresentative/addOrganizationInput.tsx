import React from 'react'
import {  Form } from 'antd'
import {  useFormContext } from 'react-hook-form'


const OrganizationInput = () => {

    const { register, errors } = useFormContext()

    return (
        <Form.Item
            label="Organisation Name"
            help={errors.name ? "Name is required" : ""}
            validateStatus={errors.name ? "error" : ""}
        >
            <input className="ant-input" ref={register({ required: true })} name="name" placeholder="TNT" />
        </Form.Item>
    )
}

export default OrganizationInput
