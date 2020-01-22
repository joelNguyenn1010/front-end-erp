import React from "react";
import { Modal, message } from "antd";
import AddPaymentForm from "../../../add/addCustomer/addPaymentDetail/add-payment-form";
import { useForm, FormContext } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_SUPPLIER_PAYMENT } from "../../../../../graphql/mutation";

interface CreateNewPaymentProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  onSuccess?: () => void
}


const CreateNewPaymentModal: React.FC<CreateNewPaymentProps> = (props: any) => {


  const [createBankAccount] = useMutation(CREATE_SUPPLIER_PAYMENT, {
    onCompleted: () => {
      message.success("New payment created")
      if (props.onSuccess)
        props.onSuccess()
    },
    onError: (error) => {
      message.error("Something went wrong, please try again")
      console.log(error)
    }
  })

  const onCancel = () => {
    props.setOpen(false);
  };

  const onOk = () => {
    props.setOpen(false);
  };


  const methods = useForm();

  const onSubmit = (data: any) => {
    createBankAccount(data)
  };



  return (
    <div>
      <Modal visible={props.open} footer={null} onCancel={onCancel} onOk={onOk} >
        {/* <TablePaymentDetail /> */}
        <FormContext {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AddPaymentForm />

          </form>
        </FormContext>
      </Modal>
    </div>
  );
};

export default CreateNewPaymentModal;
