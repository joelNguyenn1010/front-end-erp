import React from "react";
import InputCountryComponent from "./inputCountryCoponent";
import InputPostcodeComponent from "./inputPostcodeComponent";
import InputCityComponent from "./inputCityComponent";
import InputStateComponent from "./inputStateComponent";
import InputStreetnameComponent from "./inputStreetnameComponent";
import InputTypeComponent from "./inputTypeComponent";
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
