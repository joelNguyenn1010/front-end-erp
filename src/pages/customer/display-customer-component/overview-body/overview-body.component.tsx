import React from "react";
import { Tabs, Icon } from "antd";

import OverviewRepresentativeComponent from './overview-representative/overview-representative.component'
import OverviewAddressComponent from "./overview-address/overview-address.component";
import OverviewPaymentDetailComponent from "./overview-paymentDetail/overview-paymentDetail.component";
import OverviewEcommercialIdComponent from "./overview-ecommercialId/overview-ecommercialId.component";
import { OverviewWarrantyComponent } from "./overview-warrantyPolicy/overview-warranty.component";
import OverviewNoteComponent from "./overview-note/overview-note.component";
import OverviewEmailComponent from "./overview-email/overview-email.component"
import OverviewShippingComponent from "./overview-shipping/overview-shipping.component"
import { Link, Redirect } from "react-router-dom";

const { TabPane } = Tabs;

const OverviewBodyComponent = () => {

    const onChange = () => {

    }

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} type='card'>
      <TabPane tab={<span><Icon type="contacts"  /> Representative</span>} key="1"> 
        <OverviewRepresentativeComponent />
      </TabPane>
      <TabPane tab={<span><Icon type="home" /> Address</span>}key="2">
        <OverviewAddressComponent />
      </TabPane>
      <TabPane tab={<span><Icon type="dollar" /> Payment detail</span>} key="3">
        <OverviewPaymentDetailComponent />
      </TabPane>
      <TabPane tab={<span><Icon type="idcard" /> Ecommercial ID</span>} key="4">
        <OverviewEcommercialIdComponent />
      </TabPane>
      <TabPane tab={<span><Icon type="read" /> Warranty policy</span>} key="5">
        <OverviewWarrantyComponent />
      </TabPane>
      <TabPane tab={<span><Icon type="mail" /> Email</span>} key="6">
        <OverviewEmailComponent />
      </TabPane>
      <TabPane tab={<span><Icon type="item" /> Shipping</span>} key="7">
        <OverviewShippingComponent />
      </TabPane>
      <TabPane tab={<span><Icon type="form" /> Note</span>} key="8">
        <OverviewNoteComponent />
      </TabPane>
    </Tabs>
  );
};

export default OverviewBodyComponent;
