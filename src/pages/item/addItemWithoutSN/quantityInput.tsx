import React from "react";
import NumericInput from "../../../components/conponentInputNumberOnly/inputNumberOnly";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store";
import { ChangeDataAction } from "../../../store/action/createItemWithoutSNAction";
import { InputNumber } from "antd";

const DisplayQuantityInput = () => {

  // const [state, setState] = React.useState({value: ''})

  const dispatch: any = useDispatch();

  const onChange = (value: number | undefined) => {
    // setState({ value });
    if(value) {
      dispatch(ChangeDataAction("quantity", value));

    }
  };

  return (
    <div>
      <label>
        Quantity: 
      </label>
      <InputNumber min={1} max={100} defaultValue={1} onChange={onChange} />
      {/* <NumericInput value={name} onChange={onChange} placeholder='Quantity' maxLength={3} minLength={1} /> */}
    </div>
  );
};

export default DisplayQuantityInput;
