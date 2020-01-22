import React from "react";

import InputIpsWarrantyPolicyComponent from "./inputIpsWarrantyPolicyComponent";
import InputCusWarrantyPolicyComponent from "./inputCusWarrantyPolicyComponent";

const TableWarrantyPolicy = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              Ips's warranty policy:
              <InputIpsWarrantyPolicyComponent />
            </td>
            <td>
              Customer warranty policy:
              <InputCusWarrantyPolicyComponent />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableWarrantyPolicy;
