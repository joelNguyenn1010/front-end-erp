import React from "react";
import { Descriptions } from "antd";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_REPRESENTATIVE_QUERY } from "../../../../graphql/query";

const OverviewCustomerComponent = () => {

  let { id } = useParams()

  const limit = 1
  const page = 1
  
  const { data } = useQuery(GET_REPRESENTATIVE_QUERY, {variables: {supplierId: id, limit, page} })

  console.log(data)
  return (
    <Descriptions title="Customer Info">
      <Descriptions.Item label="Customer name">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Department">Individual</Descriptions.Item>
      <Descriptions.Item label="Pricing level">5</Descriptions.Item>
      <Descriptions.Item label="Country"> Hangzhou, Zhejiang, China</Descriptions.Item>
    </Descriptions>
  );
};
export default OverviewCustomerComponent;
