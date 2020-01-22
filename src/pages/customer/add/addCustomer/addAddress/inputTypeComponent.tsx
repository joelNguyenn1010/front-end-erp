import React from "react";
import { Select, Form } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { SupplierAddressTypeEnum } from "../../../../../store/contract/Customer";
const { Option } = Select;

const InputTypeComponent = () => {
  const { setValue, control } = useFormContext();

  const keys = Object.keys(SupplierAddressTypeEnum);

  const onChange = (val: string) => {
    setValue("type", val);
  };

  const TypeSelection = (
    <Select
      defaultValue={"postal"}
      style={{ width: "100%" }}
      onChange={onChange}
    >
      {keys.map((type: string, index: number) => (
        <Option key={index} value={type}>
          {type}
        </Option>
      ))}
    </Select>
  );

  return (
    <Form.Item label={"Type"}>
      <Controller
        rules={{ required: true }}
        as={TypeSelection}
        name="type"
        control={control}
        defaultValue="postal"
      />
    </Form.Item>
  );
  };

export default InputTypeComponent;
