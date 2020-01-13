import React from "react";
import NumericInput from "../../../components/conponentInputNumberOnly/inputNumberOnly";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store";
import { ChangeDataAction } from "../../../store/action/createItemWithoutSNAction";

const DisplayQuantityInput = () => {
  const name = useSelector(
    (state: AppState) => state.CreateItemWithoutSNReducer.input.quantity
  );
  // const [state, setState] = React.useState({value: ''})

  const dispatch: any = useDispatch();

  const onChange = (value: number) => {
    // setState({ value });
    dispatch(ChangeDataAction("quantity", value));
  };

  return (
    <div>
      <label>
        Quantity: 
      </label>
      <NumericInput value={name} onChange={onChange} placeholder='Quantity' maxLength={3} minLength={1} />
    </div>
  );
};

export default DisplayQuantityInput;
