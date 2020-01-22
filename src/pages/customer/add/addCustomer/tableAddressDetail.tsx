import React from "react";
import InputCountryComponent from "./addAddress/inputCountryCoponent";
import InputPostcodeComponent from "./addAddress/inputPostcodeComponent";
import InputCityComponent from "./addAddress/inputCityComponent";
import InputStateComponent from "./addAddress/inputStateComponent";
import InputStreetnameComponent from "./addAddress/inputStreetnameComponent";
import InputTypeComponent from "./addAddress/inputTypeComponent";
import { Button } from "antd";

const TableAddressDetail: React.FC = props => {
  return (
   
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <InputTypeComponent />
            </td>
          </tr>
          <tr>
            <td>
              <InputStreetnameComponent />
            </td>
          </tr>
          <tr>
            <td>
              <InputCityComponent />
            </td>
          </tr>

          <tr>
            <td>
              <InputStateComponent />
            </td>
          </tr>

          <tr>
            <td>
              <InputPostcodeComponent />
            </td>
          </tr>

          <tr>
            <td>
              <InputCountryComponent />
            </td>
          </tr>
          <tr>
          <td colSpan={2}>
            <Button style={{ float: 'right' }} htmlType="submit" type="primary">Submit</Button>
          </td>
        </tr>
        </tbody>
      </table>
  
  );
};

export default TableAddressDetail;
