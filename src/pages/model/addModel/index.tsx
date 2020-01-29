import React from "react";
import { Form, Row, Col } from "antd";
import ManufactorCreation from "./manufactorSearch";
import CategorySearch from "./categorySearch";
import AddName from "./addName";
import SubmitModel from "./submitModel";
import HasSerialModel from "./hasSerialModel";

const AddModel: React.FC = () => {

  return (
    <Form>
      <Row>
        <Col span={24}>
          <AddName />
        </Col>
      </Row>
      <Row>


        <Col span={24}>
          <Form.Item>
            <ManufactorCreation />
          </Form.Item>
        </Col>


      </Row>



      <Row>
        <Col span={24}>
          <CategorySearch />
        </Col>
      </Row>

      <Row style={{marginTop: '2rem'}}>
        <Col span={24}>
          <HasSerialModel />
        </Col>

      </Row>

      <Row style={{marginTop: '2rem'}}>
      <Col span={24}>

      <SubmitModel />
      </Col>

      </Row>

    </Form>
  );
};

export default AddModel;
