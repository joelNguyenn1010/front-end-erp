import React from "react";
import OrganizationInput from "./addContactDetail/addOrganizationInput";
import AddContactType from "./addContactDetail/addContactType";
import AddPricingLevel from "./addContactDetail/addPricingLevel";
import AddEcommercialId from "./addContactDetail/addEcommercialId";
import { Button, message } from "antd";
import { useForm, FormContext, useFormContext } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SUPPLIER } from "../../../../graphql/mutation";

interface TableRowContactDetailProps {
    onSuccess?: () => void,

}

const TableRowContactDetail: React.FC<TableRowContactDetailProps>  = props => {

  const methods = useForm()

  const [createNewSupplier] = useMutation(ADD_SUPPLIER,{
    onCompleted: () =>{
      message.success("New organisation created")
      methods.reset({})
      if(props.onSuccess) 
        props.onSuccess()
    },

    onError: () => {
      message.error("Can't create organisation, please try again")
    }
    
  })
  const onSubmit = (data: any) => {

    createNewSupplier({variables: data})
  
  }
  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <table>

          <tbody>
            <tr>
              <td>
                <OrganizationInput />
              </td>
            </tr>
            <tr>
              <td>
                <AddContactType />
              </td>
            </tr>
            <tr>
              <td>
                <AddPricingLevel />
              </td>
            </tr>
          </tbody>
        </table>

        <Button htmlType="submit">Submit</Button>
      </form>
    </FormContext>
  );
};

export default TableRowContactDetail;
