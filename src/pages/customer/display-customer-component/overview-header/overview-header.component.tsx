import React from "react";
import { Descriptions, Spin, Result, Button } from "antd";
import { useParams, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_REPRESENTATIVE_QUERY, GET_SUPPLIER_QUERY, FIND_SUPPLIER_WITH_ID } from "../../../../graphql/query";
import { Suppliers } from "../../../../store/contract/Suppliers";
import LoadingSpin from "../../../../components/loadingSpin";
import EditableField from "./editable-field-supplier";
import AddContactType from "../../add/addCustomer/addContactDetail/addContactType";
import AddPricingLevel from "../../add/addCustomer/addContactDetail/addPricingLevel";
import UpdateDescriptionField from "../../../../components/updateDescriptionField";
import { UPDATE_SUPPLIER } from "../../../../graphql/mutation/supplierMutation";

const OverviewCustomerComponent = () => {

  let { id } = useParams()


  const { data, loading } = useQuery(FIND_SUPPLIER_WITH_ID, { variables: { id } })

  if (!loading && data && data.findSupplier) {

    const supplier: Suppliers = {
      ...data.findSupplier
    }

    return (
      <Descriptions title="Customer Info">

        <Descriptions.Item label="Customer name"> <UpdateDescriptionField
          name="name"
          value={supplier.name}
          id={id}
          mutation={UPDATE_SUPPLIER}
        /></Descriptions.Item>

        <Descriptions.Item label="Department"> <UpdateDescriptionField
          name="contactType"
          value={supplier.contactType}
          id={id}
          mutation={UPDATE_SUPPLIER}
          selectEnum={<React.Fragment><AddContactType /><Button htmlType="submit">Submit</Button></React.Fragment>}
        /></Descriptions.Item>


        <Descriptions.Item label="Pricing level"> <UpdateDescriptionField
          name="pricingLevel"
          value={supplier.pricingLevel}
          id={id}
          mutation={UPDATE_SUPPLIER}
          selectEnum={<React.Fragment><AddPricingLevel /><Button htmlType="submit">Submit</Button></React.Fragment>}
        /></Descriptions.Item>



        <Descriptions.Item label="IPS Term"> <UpdateDescriptionField
          name="ipsTerm"
          isTextarea={true}
          value={supplier.ipsTerm}
          id={id}
          mutation={UPDATE_SUPPLIER}
   
        /></Descriptions.Item>

        <Descriptions.Item  label="Customer Term"> <UpdateDescriptionField
          name="customerTerm"
          id={id}
          mutation={UPDATE_SUPPLIER}
          isTextarea={true}

          value={supplier.customerTerm}
        /></Descriptions.Item>

        <Descriptions.Item
         
          label="VAT"> <UpdateDescriptionField
            name="VAT"
            isTextarea={true}
            id={id}
            mutation={UPDATE_SUPPLIER}

            value={supplier.VAT}
          /></Descriptions.Item>


        {/* <Descriptions.Item label="Department">{supplier.contactType}</Descriptions.Item> */}
        {/* <Descriptions.Item label="Pricing level">{supplier.pricingLevel}</Descriptions.Item> */}
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
