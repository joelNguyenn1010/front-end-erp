import React from "react";
import { Form, Button } from "antd";
import ManufactorCreation from "./manufactorSearch";
import CategorySearch from "./categorySearch";
import AddName from "./addName";
import SubmitModel from "./submitModel";
import HasSerialModel from "./hasSerialModel";
import { CreateModelContext } from "../../../context/provider/createModelContext";

const AddModel: React.FC = () => {

  const context : any= React.useContext(CreateModelContext)
  return (
    <Form>
      <AddName />
      <Form.Item>
        <ManufactorCreation />
      </Form.Item>
      <Form.Item>
        <CategorySearch />
      </Form.Item>

      <Form.Item>
        <HasSerialModel />
      </Form.Item>
      <SubmitModel />

      <Button>
        Clear
      </Button>
    </Form>
  );
};

export default AddModel;
