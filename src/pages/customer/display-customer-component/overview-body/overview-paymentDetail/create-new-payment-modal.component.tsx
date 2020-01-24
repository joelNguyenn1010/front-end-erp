import React from "react";
import { Modal, message } from "antd";
import AddPaymentForm from "../../../add/addCustomer/addPaymentDetail/payment-detail-create-form";
import { useForm, FormContext } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_SUPPLIER_PAYMENT } from "../../../../../graphql/mutation/supplierMutation";
import { useParams } from "react-router-dom";

interface CreateNewPaymentProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  onSuccess?: () => void
}

type Form = {
  currency: "AUD"
}

const CreateNewPaymentModal: React.FC<CreateNewPaymentProps> = (props: any) => {

  const { id } = useParams()
  const methods = useForm<Form>();


  const [createBankAccount] = useMutation(CREATE_SUPPLIER_PAYMENT, {
    onCompleted: () => {
      message.success("New payment created")
      methods.reset({currency: "AUD"})
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



  const onSubmit = (data: any) => {
    console.log(data)

    // createCustomer({ variables: {...data, supplierId: id}})

    createBankAccount({ variables: {...data, supplierId: id}})
    props.setOpen(false);
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
