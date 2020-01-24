import React from 'react'
import {useFormContext} from 'react-hook-form'
import {Form} from 'antd'


const AddEmailNameSupplier = () => {
    const {register, errors} = useFormContext();

    return (
        <Form.Item
            label="Type"
        >
            <input
                ref={register}
                name="typeemail"
                className="ant-input"
                placeholder="Type"
            />

        </Form.Item>
    )
}

export default AddEmailNameSupplier