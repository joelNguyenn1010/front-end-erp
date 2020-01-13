import React from "react";
import InputCurrencyComponent from "./addPaymentDetail/inputCurrencyComponent";
import InputIpsPaymentTermComponent from "./addPaymentDetail/inputIpsPaymentTermComponent";
import InputCusPaymentTermComponent from "./addPaymentDetail/inputCusPaymentTermComponent";
import InputGstNumberComponent from "./addPaymentDetail/inputGstNumberComponent";
import InputBankNameComponent from "./addPaymentDetail/inputBankNameComponent";
import InputBankBranchComponent from "./addPaymentDetail/inputBankBranchComponent";
import InputBankBsbComponent from "./addPaymentDetail/inputBankBsbComponent";
import InputAccountNumberComponent from "./addPaymentDetail/inputAccountNumberComponent";
import InputAccountNameComponent from "./addPaymentDetail/inputAccountNameComponent";

const TablePaymentDetail = () => {
  return (
    <div>
      <tr>
        <td>
          Currency:
          <InputCurrencyComponent />
        </td>

        <td>
          Ips Payment term:
          <InputIpsPaymentTermComponent />
        </td>

        <td>
          Customer's Payment term:
          <InputCusPaymentTermComponent />
        </td>
      </tr>

      <tr>
        <td>
          Bank Name:
          <InputBankNameComponent />
        </td>

        <td>
          Bank Branch:
          <InputBankBranchComponent />
        </td>
        <td>
          GST/VAT number:
          <InputGstNumberComponent />
        </td>
      </tr>

      <tr>
        <td>
          Account Name:
          <InputAccountNameComponent />
        </td>
        
        <td>
          Account Number:
          <InputAccountNumberComponent />
        </td>

        <td>
          Bank BSB:
          <InputBankBsbComponent />
        </td>

        
      </tr>
    </div>
  );
};
export default TablePaymentDetail;
