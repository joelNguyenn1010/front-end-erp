import React, { useState } from "react";
import { Button } from "antd";

import CreateNewAddress from './create-new-address-modal.component'

interface ButtonAddAddressComponentProps {
  onClose?: () => void
}

const ButtonAddAddressComponent:React.FC<ButtonAddAddressComponentProps> = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);


  return (
    <React.Fragment>
      <Button
        onClick={() => setOpen(true)}
        style={{ width: "100%" }}
        type="primary"
      >
        Add more
      </Button>

      {open && <CreateNewAddress onClose={props.onClose} setOpen={setOpen} open={open}/>}
      
    </React.Fragment> 
    
  );
};

export default ButtonAddAddressComponent;
