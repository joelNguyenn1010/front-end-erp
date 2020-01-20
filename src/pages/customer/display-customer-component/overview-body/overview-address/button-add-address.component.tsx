import React, { useState } from "react";
import { Button } from "antd";

import CreateNewAddress from './create-new-address-modal.component'

const ButtonAddAddressComponent = () => {
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

      {open && <CreateNewAddress setOpen={setOpen} open={open}/>}
      
    </React.Fragment> 
    
  );
};

export default ButtonAddAddressComponent;
