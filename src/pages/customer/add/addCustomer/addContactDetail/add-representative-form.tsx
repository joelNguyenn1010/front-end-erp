import React from "react";
import AddSalutation from "./addSalutation";
import AddFirstName from "./addFirstName";
import AddPosition from "./addPosition";
import AddPhoneNumber from "./addPhoneNumber";
import AddEmails from "./addEmails";
import { Button } from "antd";

interface AddRepresentativeFormProps {
}
const AddRepresentativeForm: React.FC<AddRepresentativeFormProps> = props => {


  return (


    <table style={{ width: "100%" }}>
      <tbody>

        <tr>
          <td>
            <AddSalutation />
          </td>
        </tr>

        <tr>
          <td>
            <AddPosition />
          </td>
        </tr>
        <tr>
          <td>
            <AddFirstName />
          </td>
        </tr>

        <tr>
          <td>
            <AddPhoneNumber />
          </td>
        </tr>

        <tr>
          <td colSpan={2}>
           <label>Email:</label>
            <AddEmails />
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

export default AddRepresentativeForm;
