import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import { changeCustomerValue } from "../../../../../store/action/customerAction/createCustomerAction";
import { Cascader } from "antd";
import ListCountry from "../../../list country/listCountry";

let timeout: any = null;

const InputCountryComponent = (props: any) => {
  const name = useSelector(
    (state: AppState) => state.CustomerReducer.input.country
  );


  const dispatch = useDispatch();

  const onChange = (val: string) => {
    dispatch(changeCustomerValue("country", val));
  };

  return (
    <div>
      <ListCountry style={{width: 200}} value={name} onChange={(val: any) => onChange(val)}/>
    </div>
  );
};

export default InputCountryComponent;
