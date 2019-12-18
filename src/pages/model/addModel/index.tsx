import React from "react";
import { Form } from "antd";
import ManufactorCreation from "./manufactorSearch";
import CategorySearch from "./categorySearch";
import AddName from "./addName";
import SubmitModel from "./submitModel";
import HasSerialModel from "./hasSerialModel";

const AddModel: React.FC = () => {
  return (
    <Form>
      <AddName />
      <Form.Item label="Manufacture:">
        <ManufactorCreation />
      </Form.Item>
      <Form.Item label="Category:">
        <CategorySearch />
      </Form.Item>

      <Form.Item label="Manage by:">
        <HasSerialModel />
      </Form.Item>
      <SubmitModel />
    </Form>
  );
};

export default AddModel;
