import React, { useEffect } from 'react'
import { useFormContext, useFieldArray, useForm, Controller } from 'react-hook-form'
import { Icon, Button, Form } from 'antd';

const AddEmails = () => {

    const { control, register, errors, watch, setValue } = useFormContext()



    const { fields, prepend, remove } = useFieldArray({ control, name: "emails" });

    // useEffect(() => {
    //     append({ name: "" })
    // }, [])


    console.log(fields)
    return (
        <table style={{ width: "100%" }}>
            <tbody>
                {fields.map((item, index) => {
                    console.log(fields[index])
                    return (
                        <tr key={item.id}>
                            <td style={{ width: "98%" }}>
                                <Form.Item
                                    help={errors.emails && "Email is required"}
                                    validateStatus={errors.emails ? "error" : ""}
                                >
                                    <Controller
                                        as={<input
                                                className="ant-input"
                                                name={`emails['${index}'].email`}

                                            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            //     setValue(`emails[${index}].email`, e.target.value)
                                            // }}
                                        />}
                                        name={`emails['${index}'].email`}
                                        control={control}
                                        defaultValue={`${item.email}`}
                                    />

                                  


                                </Form.Item>
                            </td>
                            <td>
                                {fields.length > 1 ? (<td><Icon
                                    type="minus-circle-o"
                                    onClick={() => {
                                        remove(index)
                                    }}
                                    style={{ marginLeft: "10px" }}
                                /></td>) : ''}
                            </td>
                        </tr>
                    )
                })}

                <tr>
                    <td colSpan={2}>
                        <Icon
                            style={{ fontSize: '30px', color: '#08c' }}
                            type="plus-circle"
                            onClick={() => {

                                // console.log(getValue('email'))
                                // const oldValue = fields.concat()
                                // console.log(oldValue)
                                // oldValue.push({ email: "" })
                                prepend({ email: "" })
                            }
                            } />

                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default AddEmails
