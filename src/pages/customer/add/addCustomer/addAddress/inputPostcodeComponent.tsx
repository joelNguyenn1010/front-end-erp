import React from "react";
import { Form } from "antd";
import { useFormContext } from "react-hook-form";

const InputPostcodeComponent = () => {
  const { register, errors } = useFormContext();

  return (
    <Form.Item
      help={errors.postcode && "State is required"}
      label={"Postcode"}
      validateStatus={errors.postcode ? "error" : ""}
    >
      <input
        type='number'
        ref={register({ required: true })}
        name="postcode"
        className="ant-input"
        placeholder="Postcode"
      />
    </Form.Item>
  );
};

export default InputPostcodeComponent;
