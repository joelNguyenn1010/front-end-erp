import React from "react";
import SearchCreation from "../../../components/searchCreation";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store";
import { useQuery } from "@apollo/react-hooks";
import { GET_CONDITION_QUERY } from "../../../graphql/query/productQuery";
import { message } from "antd";
import { changeItemValue } from "../../../store/action/itemAction/createItemAction";

let timeout: any = null;

interface ItemConditionProps {
  index: number;
}

const AddItemCondition: React.FC<ItemConditionProps> = props => {
  const name = useSelector(
    (state: AppState) => state.createItemReducer.items[props.index].condition
  );

  const { data, loading, error, refetch } = useQuery(GET_CONDITION_QUERY, {
    variables: { name: "", limit: 6, page: 1 }
  });

  if (error) {
    message.error("We cant fetch data from database, please try again");
  }

  const dispatch = useDispatch();

  const onSearch = (val: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      refetch({ name: val, limit: 6, page: 1 });
    }, 200);
  };

  const onSelected = (val: string, option: any) => {
    console.log(option.key);
    dispatch(changeItemValue(props.index, "condition", val));
    dispatch(changeItemValue(props.index, "conditionId", parseInt(option.key)));
  };

  return (
    <div>
      <SearchCreation
        input={name}
        onSearch={onSearch}
        onSelected={onSelected}
        content={data ? (data.condition ? data.condition.data : []) : []}
        loading={loading}
      />
    </div>
  );
};

export default AddItemCondition;
