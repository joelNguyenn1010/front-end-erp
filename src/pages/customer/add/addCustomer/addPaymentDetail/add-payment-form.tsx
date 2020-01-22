import React from "react";
import InputCurrencyComponent from "./inputCurrencyComponent";
import InputIpsPaymentTermComponent from "./inputIpsPaymentTermComponent";
import InputCusPaymentTermComponent from "./inputCusPaymentTermComponent";
import InputGstNumberComponent from "./inputGstNumberComponent";
import InputBankNameComponent from "./inputBankNameComponent";
import InputBankBranchComponent from "./inputBankBranchComponent";
import InputBankBsbComponent from "./inputBankBsbComponent";
import InputAccountNumberComponent from "./inputAccountNumberComponent";
import InputAccountNameComponent from "./inputAccountNameComponent";
import InputOptionPaypalComponent from "./inputOptionPaypalComponent";

const AddPaymentForm = () => {
  return (
    <table>
      <tbody>
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
      </tbody>
    </table>
  );
};
export default AddPaymentForm;
