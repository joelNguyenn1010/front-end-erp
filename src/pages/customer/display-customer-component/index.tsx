import React from "react";
import OverviewHeaderComponent from "./overview-header/overview-header.component";
import OverviewBodyComponent from "./overview-body/overview-body.component";
import { useParams } from "react-router-dom";

const DisplayCustomer = () => {

  let { id } = useParams()

  return (
    <div>
      <div style={{marginBottom: '3em'}}>
        <h1>Id: {id}</h1>
        <OverviewHeaderComponent />
      </div>
      <div>
        <OverviewBodyComponent />
      </div>
    </div>
  );
};

export default DisplayCustomer;