
import { AppState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { ChangeDataAction } from "../../../store/action/itemAction/createItemWithoutSNAction";
import React from "react";
import { Select, message} from "antd";
import SearchCreation from "../../../components/searchCreation";
import { useQuery } from "@apollo/react-hooks";
import { GET_CONDITION_QUERY } from "../../../graphql/query";


let timeout: any = null
const ConditionInput = () => {

    const name = useSelector((state: AppState) => state.CreateItemWithoutSNReducer.input.condition)

    const {loading, data, error, refetch} = useQuery(GET_CONDITION_QUERY, {
      variables: {name: ''}
    })

    if(error){
      message.error("We can't fetch data of condition, please try again")
    }

    const dispatch: any = useDispatch();

    const onSelected = (e: string, option: any) => {
        dispatch(ChangeDataAction('condition', e))
        dispatch(ChangeDataAction('conditionId', parseInt(option.key)))
    }

    const onSearch = (val: string) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        refetch({name: val})
      }, 200)
    }

  return (
    <div>
      <label>
        Condition:
      </label>
      <SearchCreation 
        input={name}
        onSelected={onSelected}
        onSearch={onSearch}
        loading={loading}
        content={data ? data.condition ? data.condition.data : [] : []}
        
      />
    </div>
    

  );
};

export default ConditionInput;
