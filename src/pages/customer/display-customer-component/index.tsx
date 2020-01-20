import React from "react";
import OverviewHeaderComponent from "./overview-header/overview-header.component";
import OverviewBodyComponent from "./overview-body/overview-body.component";

const DisplayCustomer = () => {
  return (
    <div>
      <div style={{marginBottom: '3em'}}>
        <OverviewHeaderComponent />
      </div>
      <div>
        <OverviewBodyComponent />
      </div>
    </div>
  );
};

export default DisplayCustomer;
