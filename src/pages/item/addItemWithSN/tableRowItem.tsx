import React from "react";
import { Item } from "../../../store/reducer/createItemReducer";

import DisplayItemCondition from "../displayItem/displayItemCondition";
import ItemModelCreation from "./itemModelCreation";
import { useDispatch } from "react-redux";
import { addModelWithCiscoCheck } from "../../../store/action/itemAction/createItemAction";
interface TableRowItemProps {
  value: Item;
  index: number;
}
export const TableRowItem: React.FC<TableRowItemProps> = props => {

  const dispatch = useDispatch()


// start to fetching model
  React.useEffect(() => {
    // effect
    if (props.value.sn) {
      dispatch(addModelWithCiscoCheck(props.value.sn, props.index));
      // dispatch(addModelWithDBChecked(props.value.sn, props.index))
    }


  }, []);


  return (
    
      <tr>
        <td>{props.value.sn}</td>
        <td >

          <ItemModelCreation 
 
          index={props.index} />
         
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
