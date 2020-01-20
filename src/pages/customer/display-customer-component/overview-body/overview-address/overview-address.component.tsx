import React, { Fragment } from "react";
import { Table } from "antd";
import ButtonAddAddressComponent from "./button-add-address.component";

const OverviewAddressComponent = () => {
  const columns = [
    {
      title: "Street number",
      key: "streetNumber"
    },
    {
      title: "Street name",
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
      <Table columns={columns} bordered />
      <ButtonAddAddressComponent />
    </Fragment>
  );
};

export default OverviewAddressComponent;
