import React from "react";
import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import { changeCustomerValue } from "../../../../../store/action/customerAction/createCustomerAction";
import { useFormContext } from "react-hook-form";

const InputStreetnameComponent = () => {
  const { register, errors } = useFormContext();

  return (
    <Form.Item
      help={errors.street && "Street name is required"}
      label={"Street Name"}
      validateStatus={errors.street ? "error" : ""}
    >
      <input
        ref={register({ required: false })}
        name="street"
        className="ant-input"
        placeholder="Street Name"
      />
    </Form.Item>
  );
};
export default InputStreetnameComponent;
