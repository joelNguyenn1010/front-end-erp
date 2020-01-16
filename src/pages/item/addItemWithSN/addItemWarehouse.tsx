import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store";
import {  message } from "antd";
import { changeItemValue } from "../../../store/action/itemAction/createItemAction";
import SearchCreation from "../../../components/searchCreation";
import { useQuery } from "@apollo/react-hooks";
import { GET_WHLOCATION_QUERY } from "../../../graphql/query";

interface AddWarehouseProps {
  index: number;
}

let timeout: any = null;

const AddItemWarehouse: React.FC<AddWarehouseProps> = props => {

  const limit: number = 5;
  const page: number = 1

  const name = useSelector(
    (state: AppState) => state.createItemReducer.items[props.index].whlocation
  );

  const dispatch = useDispatch();

  const { data, refetch, error } = useQuery(GET_WHLOCATION_QUERY, {
    variables: { name: "", limit, page }
  });

  if (error) {
    message.error("We cant fetch data from database, please try again");
  }

  const onSelected = (val: string, option: any) => {
    refetch({name: '', limit, page})
    dispatch(changeItemValue(props.index, "whlocation", val));
    dispatch(
      changeItemValue(props.index, "whlocationId", parseInt(option.key))
    );
  };

  const onSearch = (val: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      refetch({ name: val, limit, page});
    }, 250);
  };

  
  return (
    <SearchCreation
      input={name}
      onSearch={onSearch}
      onSelected={onSelected}
      content={data ? (data.whlocation ? data.whlocation.data : []) : []}
    />
  );
};

export default AddItemWarehouse;
