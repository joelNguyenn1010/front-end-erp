import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import { changeCustomerValue } from "../../../../../store/action/customerAction/createCustomerAction";
import { Cascader, Form } from "antd";
import ListCountry from "../../../list country/listCountry";
import { useFormContext, Controller } from "react-hook-form";

let timeout: any = null;

const InputCountryComponent = (props: any) => {
  
  const { setValue, control } = useFormContext();



  const onChange = (val: string) => {
    setValue("country",val)
  };

  const CountrySelection = (<ListCountry style={{width: '100%'}} value="Australia" onChange={(val: any) => onChange(val)}/>)

  return (
    <Form.Item label={"Country"}>
      
      <Controller
        rules={{ required: true }}
        as={CountrySelection}
        name="country"
        control={control}
        defaultValue="Australia"
      />
    </Form.Item>

      
    
  );
};

export default InputCountryComponent;
