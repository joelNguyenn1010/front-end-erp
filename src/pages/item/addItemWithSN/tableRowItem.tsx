import React from "react";
import { Item } from "../../../store/reducer/createItemReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSN,
  addModelWithCiscoCheck
} from "../../../store/action/itemAction/createItemAction";
import { AppState } from "../../../store";
import SearchCreation from "../../../components/searchCreation";
import { useQuery } from "@apollo/react-hooks";
import { GET_MODEL_QUERY } from "../../../graphql/query";
import { CreateItemContext } from "../../../context/provider/createItemContext";
import DisplayItemCondition from "../displayItem/displayItemCondition";
interface TableRowItemProps {
  value: Item;
  index: number;
}
export const TableRowItem: React.FC<TableRowItemProps> = props => {
  const [model, setModel] = React.useState("");

  const context: any = React.useContext(CreateItemContext);

  const { data, loading, error, refetch } = useQuery(GET_MODEL_QUERY, {
    variables: { name: "", limit: 5, page: 1 }
  });

  const dispatch = useDispatch();
  const items = useSelector((state: AppState) => state.createItemReducer.items);

  const onSelected = (e: string) => {
    context.value.modelId = parseInt(e);
  };

  let timeout: any = null;
  const onSearch = (val: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      refetch({ name: val, limit: 5, page: 1 });
    }, 220);
  };

  React.useEffect(() => {
    // effect
    if (props.value.sn) {
      dispatch(addModelWithCiscoCheck(props.value.sn, props.index));
      console.log(props.value);
      // dispatch(addModelWithDBChecked(props.value.sn, props.index))
    }

    return () => {
      // cleanup
    };
  }, []);

  console.log(props.value.model);

  return (
    
      <tr>
        <td>{props.value.sn}</td>
        <td >
          {props.value.model ? (
            props.value.model.name.length > 0 ? (
              props.value.model.name
            ) : (
                <SearchCreation
                placeholder="Create"
                loading={loading}
                content={data ? (data.model ? data.model.data : []) : []}
                onSelected={onSelected}
                onSearch={onSearch}
              />
              
            )
          ) : (
            "Loading"
          )}
        </td>
        <td><DisplayItemCondition /></td>
        <td>Supplier</td>
        <td>Note</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    
  );
};
