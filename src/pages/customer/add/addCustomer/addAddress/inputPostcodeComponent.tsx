import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import { changeCustomerValue } from "../../../../../store/action/customerAction/createCustomerAction";
import { InputNumber } from "antd";

let timeout: any = null;
const InputPostcodeComponent = () => {
  const name = useSelector(
    (state: AppState) => state.CustomerReducer.input.postcode
  );

  const dispatch = useDispatch();

  const onChange = (val: number | undefined) => {
    dispatch(changeCustomerValue("postcode", val));
  };

  return (
    <div>
      <InputNumber
        style={{width: 200}}
        maxLength={6}
        onChange={onChange}
        placeholder="Postcode"
      />
    </div>
  );
};

export default InputPostcodeComponent;
