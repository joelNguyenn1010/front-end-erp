import React from "react";
import { Form } from "antd";
import DisplayModelContainer from "./displayModelContainer"

const DisplayModel: React.FC = () => {
  return (
    <div className="container">
      <h1>{localStorage.getItem('manufactor')}</h1>
      <DisplayModelContainer />
    </div>
  );
};

export default DisplayModel;
