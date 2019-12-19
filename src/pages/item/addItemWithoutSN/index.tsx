import React from "react";
import { Form, Input } from "antd";
import SearchSupplier from "./supplierSearch";
import FindModel from "../addItemWithoutSN/modelSearch";
import DisplayQuantityInput from "./quantityInput";
import SubmitItemWithoutSN from "./submitItemWithoutSN"
import InputWhLocation from "./whLocationInput";
import ConditionInput from "./conditionInput"
import Note from "./noteInput"
const AddItemWithoutSN = () => {
  return (
    <Form>
      <Form.Item>
        <FindModel />
      </Form.Item>
      <Form.Item>
        <InputWhLocation />
      </Form.Item>
      <Form.Item>
        <SearchSupplier />
      </Form.Item>
      <Form.Item>
          <DisplayQuantityInput />
      </Form.Item>
      <Form.Item>
        <ConditionInput />
      </Form.Item>
      <Form.Item>
        <Note />
      </Form.Item>
      <SubmitItemWithoutSN />
    </Form>
  );
};
export default AddItemWithoutSN;
