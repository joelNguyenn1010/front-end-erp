import React from "react";
import { Modal } from "antd";
import AddPaymentForm from "../../../add/addCustomer/addPaymentDetail/add-payment-form";
import { useForm, FormContext } from "react-hook-form";

interface CreateNewPaymentProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

type PaymentForm = {
  
}

const CreateNewPaymentModal: React.FC<CreateNewPaymentProps> = (props: any) => {
  const onCancel = () => {
    props.setOpen(false);
  };

  const onOk = () => {
    props.setOpen(false);
  };


  const methods = useForm()
  return (
    <div>
      <Modal visible={props.open} onCancel={onCancel} onOk={onOk} >
        {/* <TablePaymentDetail /> */}
        <FormContext {...methods}>
          <AddPaymentForm />
        </FormContext>
      </Modal>
    </div>
  );
};

export default CreateNewPaymentModal;
