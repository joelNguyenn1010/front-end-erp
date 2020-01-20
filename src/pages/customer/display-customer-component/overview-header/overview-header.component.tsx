import React from "react";
import { Descriptions, Spin, Result } from "antd";
import { useParams, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_REPRESENTATIVE_QUERY, GET_SUPPLIER_QUERY, FIND_SUPPLIER_WITH_ID } from "../../../../graphql/query";
import { Suppliers } from "../../../../store/contract/Suppliers";
import LoadingSpin from "../../../../components/loadingSpin";

const OverviewCustomerComponent = () => {

  let { id } = useParams()


  const { data, loading } = useQuery(FIND_SUPPLIER_WITH_ID, { variables: { id } })

  if (!loading && data && data.findSupplier) {

    const supplier: Suppliers = {
      ...data.findSupplier
    }

    return (
      <Descriptions title="Customer Info">
        <Descriptions.Item label="Customer name">{supplier.name}</Descriptions.Item>
        <Descriptions.Item label="Department">{supplier.contactType}</Descriptions.Item>
        <Descriptions.Item label="Pricing level">{supplier.pricingLevel}</Descriptions.Item>
      </Descriptions>
    );
  } else if (loading) {
    return <LoadingSpin />
  }
  else {
    return <Result
      status="error"
      subTitle={`Please check the url or make sure the id "${id}" is correct`}
      title="Can't get the company information">
    </Result>
  }
};
export default OverviewCustomerComponent;
