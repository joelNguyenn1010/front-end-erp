import React, { useEffect } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { Icon, Button, Form } from 'antd';

const AddEmails = () => {

    const { control, register, errors } = useFormContext()

    const { fields, append, remove } = useFieldArray({ control, name: "emails" });

    useEffect(() => {
        append({ name: "emails" })
    }, [])


    return (
        <table style={{ width: "100%" }}>
            <tbody>
                {fields.map((item, index) => (
                    <tr key={item.id}>
                        <td style={{ width: "98%" }}>
                            <Form.Item
                                help={errors.emails && "Email is required"}
                                validateStatus={errors.emails ? "error" : ""}
                            >
                                <input type="email" className="ant-input" name={`emails[${index}].email`} ref={register({ required: true })} />
                            </Form.Item>
                        </td>
                        {fields.length > 1 ? (<td><Icon
                            type="minus-circle-o"
                            onClick={() => remove(index)}
                            style={{ marginLeft: "10px" }}
                        /></td>) : ''}
                    </tr>
                ))}
                    <tr>
                        <td colSpan={2}>
                            <Icon
                                style={{ fontSize: '30px', color: '#08c' }}
                                type="plus-circle"
                                onClick={() => append({ name: "emails" })} />

                        </td>
                    </tr>
            </tbody>
        </table>
    )
}

export default AddEmails
