import React from "react";
import OrganizationInput from "./addRepresentative/addOrganizationInput";
import AddContactType from "./addRepresentative/addContactType";
import AddPricingLevel from "./addRepresentative/addPricingLevel";
import AddEcommercialId from "./addRepresentative/addEcommercialId";
import { Button } from "antd";

const TableRowContactDetail = () => {
  return (
    <div>
      <tr>
        <td>
          Organization:
          <OrganizationInput />
        </td>
      </tr>
      <tr>
        <td>
          Contact Type:
          <AddContactType />
        </td>
      </tr>
      <tr>
        <td>
          Pricing Level:
          <AddPricingLevel />
        </td>
      </tr>
      <form action="/display/customer">
        <button>Add</button>
      </form>
    </div>
  );
};

export default TableRowContactDetail;
