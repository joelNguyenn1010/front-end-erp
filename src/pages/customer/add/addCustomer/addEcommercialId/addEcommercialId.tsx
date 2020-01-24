import React, { useState } from "react";
import {useFormContext} from "react-hook-form";
import {Form} from "antd";



const AddEcommercialId = (props: any) => {
  const { register, errors } = useFormContext();

  return (
      <Form.Item
          help={errors.identify && "Identify is required"}
          label={"Identify"}
          validateStatus={errors.identify ? "error" : ""}
      >
        <input
            ref={register({ required: true })}
            name="identify"
            className="ant-input"
            placeholder="ID"
        />
      </Form.Item>
  );
};

export default AddEcommercialId;
