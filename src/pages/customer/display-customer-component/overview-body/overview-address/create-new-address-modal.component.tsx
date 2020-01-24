import React from "react";
import { Modal, message } from "antd";
import TableAddressDetail from "../../../add/addCustomer/addAddress/address-detail-create-form";
import { useParams } from "react-router-dom";
import { useForm, FormContext } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SUPPLIER_ADDRESS } from "../../../../../graphql/mutation/supplierMutation";

interface CreateNewAddressProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  refetchData?: () => void;
}

const CreateNewAddress: React.FC<CreateNewAddressProps> = (props: any) => {
  let { id } = useParams();
  const methods = useForm();

  const [createAddress] = useMutation(ADD_SUPPLIER_ADDRESS, {
    onCompleted: () => {
      message.success("New address created");
      if (props.refetchData) {
        props.refetchData();
      }
      // reload the data
    },
    onError: error => {
      console.log(error);
      message.error("Can't create representative, please try again");
    }
  });

  const onSubmit = (data: any) => {
    // supplierId: $supplierId, salutation: $salutation, fullName: $fullName, position: $position, phoneNumber: $phoneNumber, emails: $emails
    createAddress({ variables: { ...data, supplierId: id } });
    props.setOpen(false);

  };

  const onCancel = (e: any) => {
    props.setOpen(false);
  };

  const onOk = () => {
    props.setOpen(false);
  };

  return (
    <Modal footer={null} visible={props.open} onCancel={onCancel} onOk={onOk}>
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TableAddressDetail />
        </form>
      </FormContext>
    </Modal>
  );
};

export default CreateNewAddress;
