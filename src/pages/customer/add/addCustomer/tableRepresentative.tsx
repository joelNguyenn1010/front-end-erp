import React from "react";
import AddSalutation from "./addContactDetail/addSalutation";
import AddFirstName from "./addContactDetail/addFirstName";
import AddPosition from "./addContactDetail/addPosition";
import AddPhoneNumber from "./addContactDetail/addPhoneNumber";
import AddEmail from "./addContactDetail/addEmail";

const TableRepresentative = () => {
  return (
    <div>
      <table style={{marginRight: 'auto', marginLeft: 'auto'}}>
        <tr>
          <td>
            Salutation:
            <AddSalutation />
          </td>
          <td>
            Position:
            <AddPosition />
          </td>
        </tr>
        <tr>
          <td>
            Full Name:
            <AddFirstName />
          </td>
          <td>
            Phone Number:
            <AddPhoneNumber />
          </td>
        </tr>

        <tr>
          <td>
            Email:
            <AddEmail />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TableRepresentative;
