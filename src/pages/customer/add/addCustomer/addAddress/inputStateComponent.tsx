import React from "react";
import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import { changeCustomerValue } from "../../../../../store/action/customerAction/createCustomerAction";
import { useFormContext } from "react-hook-form";

const InputStateComponent = () => {
  const { register, errors } = useFormContext();

  return (
    <Form.Item
      help={errors.state && "State is required"}
      label={"State"}
      validateStatus={errors.state ? "error" : ""}
    >
      <input
        ref={register({ required: true })}
        name="state"
        className="ant-input"
        placeholder="State"
      />
    </Form.Item>
  );
};
export default InputStateComponent;
