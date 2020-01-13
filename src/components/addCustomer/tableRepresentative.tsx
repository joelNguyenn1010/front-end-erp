import React from "react";
import OrganizationInput from "./addRepresentative/addOrganizationInput";
import AddContactType from "./addRepresentative/addContactType";
import AddPricingLevel from "./addRepresentative/addPricingLevel";
import AddEcommercialId from "./addRepresentative/addEcommercialId";

const TableRowContactDetail = () => {
  return (
    <div>
      <tr>
        <td >
          Organization:
          <OrganizationInput />
        </td>
        
        <td>
          Contact Type:
          <AddContactType />
        </td>
        
      </tr>
      <tr>
        <td >
          Pricing Level:
          <AddPricingLevel />
        </td>
        
        <td>
          Ecomercial Id:
          <AddEcommercialId />
        </td>
        
      </tr>
    </div>
  );
};

export default TableRowContactDetail;
