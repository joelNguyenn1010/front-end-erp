import React from "react";
import { Form, Cascader,
} from "antd";

const options = [
  {
    value: "sydney",
    label: "Sydney",
    children: [
      {
        value: "8/4a",
        label: "8/4A"
      },
      {
        value: "50",
        label: "Nha 50"
      },
      {
        value: "142",
        label: "Nha 142"
      }
    ]
  },
  {
    value: "us",
    label: "US",
    children: [
      {
        value: "jv",
        label: "JV"
      }
    ]
  }
];

const FindWarehouse = () => {

    const onChange = (value: any) => {
        console.log(value)
    }

  return (
    <div>
      
        <Cascader defaultValue={["sydney", "8/4a"]} options={options} onChange={onChange}/>,
      
    </div>
  );
};

export default FindWarehouse;
