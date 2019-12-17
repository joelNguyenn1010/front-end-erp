import React from "react";
import { Form, Input } from "antd";
import FindWarehouse from "../addItemWithSN/findWarehouse";
import FindSupplier from "../addItemWithSN/findSupplier";
import FindModel from "../addItemWithSN/findModel";
import TextArea from "antd/lib/input/TextArea";
import DisplayQuantityInput from "./displayQuantityInput";
import SubmitItemWithoutSN from "./submitItemWithoutSN"

const AddItemWithoutSN = () => {
  return (
    <Form>
      <Form.Item label="Model:">
        <FindModel />
      </Form.Item>
      <Form.Item label="Location:">
        <FindWarehouse />
      </Form.Item>
      <Form.Item label="Supplier:">
        <FindSupplier />
      </Form.Item>
      <Form.Item label="Quantity">
          <DisplayQuantityInput />
      </Form.Item>
      <Form.Item label="Internal note:">
        <TextArea rows={4} />
      </Form.Item>
      <SubmitItemWithoutSN />
    </Form>
  );
};
export default AddItemWithoutSN;
