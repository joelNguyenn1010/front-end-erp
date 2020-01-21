import React from "react";
import InputCountryComponent from "./addAddress/inputCountryCoponent";
import InputPostcodeComponent from "./addAddress/inputPostcodeComponent";
import InputCityComponent from "./addAddress/inputCityComponent";
import InputStateComponent from "./addAddress/inputStateComponent";
import InputStreetnameComponent from "./addAddress/inputStreetnameComponent";

const  TableAddressDetail: React.FC = props => {

  return (

    <div style={{ textAlign: "center" }}>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <tr>
          <td>Country:</td>
          <td>
            <InputCountryComponent />
          </td>
        </tr>

        <tr>
          <td>Postcode:</td>
          <td>
            <InputPostcodeComponent />
          </td>
        </tr>

        <tr>
          <td>City:</td>
          <td>
            <InputCityComponent />
          </td>
        </tr>

        <tr>
          <td>State:</td>
          <td>
            <InputStateComponent />
          </td>
        </tr>

        <tr>
          <td>Address:</td>
          <td>
            <InputStreetnameComponent />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default (TableAddressDetail);
