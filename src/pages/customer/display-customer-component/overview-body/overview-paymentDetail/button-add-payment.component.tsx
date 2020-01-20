import React, { useState } from "react";
import { Button } from "antd";
import CreateNewPaymentModal from "./create-new-payment-modal.component";

const ButtonAddPayment = () => {
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

        {open && <CreateNewPaymentModal setOpen={setOpen} open={open} />}
      </React.Fragment>
    </div>
  );
};

export default ButtonAddPayment;
