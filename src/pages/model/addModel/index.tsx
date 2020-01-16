import React from "react";
import { Form, Button, Row, Col } from "antd";
import ManufactorCreation from "./manufactorSearch";
import CategorySearch from "./categorySearch";
import AddName from "./addName";
import SubmitModel from "./submitModel";
import HasSerialModel from "./hasSerialModel";

const AddModel: React.FC = () => {

  return (
    <Form>
      <Row>
        <Col span={12}>
          <AddName />
          </Col>

          <Col span={12}>
          <Form.Item>
            <ManufactorCreation />
          </Form.Item>
          </Col>
      
      </Row>



      <Row>
        <Col span={12}>

        <Form.Item>
        <CategorySearch />
      </Form.Item>
          </Col>

          <Col span={12}>
       
      <Form.Item>
        <HasSerialModel />
      </Form.Item>
          </Col>
      
      </Row>



      <SubmitModel />

      {/* <Button onClick={() => context.action.clear()}>
        Clear
      </Button> */}

    </Form>
  );
};

export default AddModel;
