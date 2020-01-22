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
import { Button } from "antd";

const AddPaymentForm = () => {
  return (
    <React.Fragment>

    <table style={{width: "100%"}}>
      <tbody>
        
        <tr>
          <td>
            <InputCurrencyComponent />
          </td>
        </tr>


        <tr>
          <td>
            <InputBankNameComponent />
          </td>
        </tr>


        <tr>
          <td>
            <InputBankBranchComponent />
          </td>
        </tr>


        <tr>
          <td>
            <InputAccountNameComponent />
          </td>
        </tr>
        <tr>
          <td>
            <InputAccountNumberComponent />
          </td>
        </tr>


        <tr>
          <td>
            <InputBankBsbComponent />
          </td>
        </tr>


        <tr>
          <td>
            <InputOptionPaypalComponent />
          </td>
        </tr>

      </tbody>
    </table>

    <Button htmlType="submit">Submit</Button>

    </React.Fragment>

  );
};
export default AddPaymentForm;
