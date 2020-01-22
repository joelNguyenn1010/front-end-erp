import React, { useState } from "react";
import { Button } from "antd";
import CreateNewPaymentModal from "./create-new-payment-modal.component";

interface ButtonAddPaymentProps {
  onSuccess?: () => void
}

const ButtonAddPayment: React.FC<ButtonAddPaymentProps> = props => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <React.Fragment>
        <Button
          onClick={() => setOpen(true)}
          style={{ width: "100%" }}
          type="primary"
        >
          Add more
        </Button>

      <CreateNewPaymentModal onSuccess={props.onSuccess} setOpen={setOpen} open={open} />
      </React.Fragment>
    </div>
  );
};

export default ButtonAddPayment;
