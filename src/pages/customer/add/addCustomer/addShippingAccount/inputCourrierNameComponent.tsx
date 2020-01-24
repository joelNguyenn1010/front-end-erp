import React from "react";
import { useFormContext } from "react-hook-form";
import { Form } from "antd";


const InputCourrierNameComponent = (props: any) => {

  const { register, errors} = useFormContext();

  return (
    <Form.Item help={errors.courier && "Courier is required"} label={'Courier Name'} validateStatus={errors.courier ? "error" : ""}>
      <input
        ref={register({required: true})}
        name='courier'
        className="ant-input"
        placeholder="Courier Name"

      />
    </Form.Item>
  );
};
export default InputCourrierNameComponent;
