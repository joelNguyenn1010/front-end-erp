import React, { useState } from "react";
import {useFormContext} from "react-hook-form";
import {Form} from "antd";



const AddEcommercialName = (props: any) => {
    const { register, errors } = useFormContext();

    return (
        <Form.Item
            help={errors.name && "Identify is required"}
            label={"Name"}
            validateStatus={errors.name ? "error" : ""}
        >
            <input
                ref={register({ required: true })}
                name="name"
                className="ant-input"
                placeholder="Name"
            />
        </Form.Item>
    );
};

export default AddEcommercialName;
