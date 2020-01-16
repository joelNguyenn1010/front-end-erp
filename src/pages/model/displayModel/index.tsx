import React from "react";
import { Form } from "antd";
import DisplayModelContainer from "./displayModelContainer"
import AddModel from "../addModel";

const DisplayModel: React.FC = () => {
  return (
    <div className="container">
      <AddModel />
      <DisplayModelContainer />
    </div>
  );
};

export default DisplayModel;
