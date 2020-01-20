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
import InputOptionPaypalComponent from "./addPaymentDetail/inputOptionPaypalComponent";

const TablePaymentDetail = () => {
  return (
    <div>
      <tr>
        <td>Currency:</td>

        <td>
          <InputCurrencyComponent />
        </td>
      </tr>
      <tr>
        <td>Ips Payment term:</td>

        <td>
          <InputIpsPaymentTermComponent />
        </td>
      </tr>
      <tr>
        <td>Customer's Payment term:</td>

        <td>
          <InputCusPaymentTermComponent />
        </td>
      </tr>

      <tr>
        <td>Bank Name:</td>

        <td>
          <InputBankNameComponent />
        </td>
      </tr>
      <tr>
        <td>Bank Branch:</td>

        <td>
          <InputBankBranchComponent />
        </td>
      </tr>
      <tr>
        <td>GST/VAT number:</td>

        <td>
          <InputGstNumberComponent />
        </td>
      </tr>

      <tr>
        <td>Account Name:</td>

        <td>
          <InputAccountNameComponent />
        </td>
      </tr>
      <tr>
        <td>Account Number:</td>

        <td>
          <InputAccountNumberComponent />
        </td>
      </tr>
      <tr>
        <td>Bank BSB:</td>

        <td>
          <InputBankBsbComponent />
        </td>
      </tr>
      <tr>
        <td>Option Paypal (optional): </td>
        <td>
          <InputOptionPaypalComponent />
        </td>
      </tr>
    </div>
  );
};
export default TablePaymentDetail;
