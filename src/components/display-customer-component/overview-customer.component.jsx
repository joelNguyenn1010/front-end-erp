import React from "react";
import { Table } from "antd";
import { Descriptions } from "antd";

const OverviewCustomerComponent = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Type",
      dataIndex: "type"
    },
    {
      title: "Pricing level",
      dataIndex: "pricingLevel"
    },
    {
      title: "Country",
      dataIndex: "country"
    }
  ];

  return (
    <Descriptions title="Customer Info">
      <Descriptions.Item label="Customer name:">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Type">Individual</Descriptions.Item>
      <Descriptions.Item label="Pricing level:">5</Descriptions.Item>
      <Descriptions.Item label="Country"> Hangzhou, Zhejiang, China</Descriptions.Item>
    </Descriptions>
  );
};
export default OverviewCustomerComponent;
