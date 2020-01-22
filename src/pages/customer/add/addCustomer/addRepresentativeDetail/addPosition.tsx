import React from 'react'
import { Form } from 'antd'
import { useFormContext } from 'react-hook-form'

const AddPosition = () => {


    const { register, errors } = useFormContext()

    return (
        <Form.Item
            label={"Position"}
        >
            <input className="ant-input" ref={register} name="position" placeholder='Position' />

        </Form.Item>

    )
}

export default AddPosition
