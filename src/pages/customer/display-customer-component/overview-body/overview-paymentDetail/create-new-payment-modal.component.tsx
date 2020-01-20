import React from "react";
import { Modal } from "antd";
import TablePaymentDetail from "../../../add/addCustomer/tablePaymentDetail";

interface CreateNewPaymentProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

const CreateNewPaymentModal: React.FC<CreateNewPaymentProps> = (props: any) => {
  const onCancel = () => {
    props.setOpen(false);
  };

  const onOk = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Modal visible={props.open} onCancel={onCancel} onOk={onOk} >
        <TablePaymentDetail />
      </Modal>
    </div>
  );
};

export default CreateNewPaymentModal;
