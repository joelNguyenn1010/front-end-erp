import React from "react";
import { Form } from "antd";
import SearchCreation from "../../../../../components/searchCreation";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import { changeCustomerValue } from "../../../../../store/action/customerAction/createCustomerAction";


let timeout: any = null

const InputCountryComponent = (props: any) => {


    const name = useSelector((state:AppState) => state.CustomerReducer.input.country)

    const dispatch = useDispatch();

    // if(error){
    //     message.error('We cant fetch data from database, please try again')
    // }

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            // refetch({name: val, limit: 10, page: 1})
        }, 250)
    }

    const onSelected = (val: string, option: any) => {
        dispatch(changeCustomerValue('country', val))
        dispatch(changeCustomerValue('countryId', parseInt(option.key)))
    }

  return (
    <div>
      
          <SearchCreation 
            onSearch={onSearch}
            onSelected={onSelected}
            input={name}
          />
    </div>
  );
};

export default InputCountryComponent;
