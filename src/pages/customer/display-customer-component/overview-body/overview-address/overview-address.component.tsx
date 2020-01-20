import React, { Fragment } from "react";
import { Table } from "antd";
import ButtonAddAddressComponent from "./button-add-address.component";
import { useQuery } from "@apollo/react-hooks";
import { GET_ADDRESS_QUERY } from "../../../../../graphql/query";

const OverviewAddressComponent = () => {

  const {data, refetch } = useQuery(GET_ADDRESS_QUERY, {
    variables: {supplierId: 1, limit: 10, page: 1}
  })

  const columns = [
    
    {
      title: "Address",
      key: "streetName"
    },
    {
      title: "State",
      key: "state"
    },
    {
      title: "City",
      key: "city"
    },
    {
      title: "Postcode",
      key: "postcode"
    },
    {
      title: "Country",
      key: "country"
    },
    {
      title: "Type",
      key: "type"
    },
    
    {
      title:"Operation",

    }
  ];

  return (
    <Fragment>
      <Table columns={columns} bordered rowKey='id'/>
      <ButtonAddAddressComponent />
    </Fragment>
  );
};

export default OverviewAddressComponent;
