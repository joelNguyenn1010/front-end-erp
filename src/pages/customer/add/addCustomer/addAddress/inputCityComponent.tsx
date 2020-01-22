import React from "react";

import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store";
import { changeCustomerValue } from "../../../../../store/action/customerAction/createCustomerAction";
import { useFormContext } from "react-hook-form";

const InputCityComponent = () => {
  const { register, errors } = useFormContext();

  return (
    <Form.Item
      help={errors.city && "City is required"}
      label={"City"}
      validateStatus={errors.city ? "error" : ""}
    >
      <input
        ref={register({ required: false })}
        name="city"
        className="ant-input"
        placeholder="City"
      />
    </Form.Item>
  );
};

export default InputCityComponent;
