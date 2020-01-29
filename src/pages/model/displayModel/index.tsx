import React, { useState } from "react";
import DisplayModelContainer from "./displayModelContainer"
import AddModel from "../addModel";
import { Drawer, Button } from "antd";

const DisplayModel: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="container">
      <Button type="primary" onClick={() => setOpen(true)}>Create Model</Button>
      <Drawer

        title="Create Model"
        placement="right"

        onClose={() => setOpen(false)}
        visible={open}
      >
        <AddModel />
      </Drawer>

      <DisplayModelContainer />
    </div>
  );
};

export default DisplayModel;
