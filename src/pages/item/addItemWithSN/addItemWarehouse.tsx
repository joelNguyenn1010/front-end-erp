import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store";
import { Cascader, message } from "antd";
import { changeItemValue } from "../../../store/action/itemAction/createItemAction";
import SearchCreation from "../../../components/searchCreation";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_WHLOCATION_QUERY } from "../../../graphql/query";
import { validate } from "graphql";
import { ADD_WHLOCATION } from "../../../graphql/mutation";

interface AddWarehouseProps {
  index: number;
}

let timeout: any = null;

const AddItemWarehouse: React.FC<AddWarehouseProps> = props => {
  const name = useSelector(
    (state: AppState) => state.createItemReducer.items[props.index].whlocation
  );

  const dispatch = useDispatch();

  const { data, refetch, error, loading } = useQuery(GET_WHLOCATION_QUERY, {
    variables: { name: "", limit: 5, page: 1 }
  });

  if (error) {
    message.error("We cant fetch data from database, please try again");
  }

  const onSelected = (val: string, option: any) => {
    dispatch(changeItemValue(props.index, "whlocation", val));
    dispatch(
      changeItemValue(props.index, "whlocationId", parseInt(option.key))
    );
  };

  const onSearch = (val: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      refetch({ name: val, limit: 5, page: 1 });
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
