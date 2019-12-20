import React from "react";
import { Item } from "../../../store/reducer/createItemReducer";

import DisplayItemCondition from "../displayItem/displayItemCondition";
import ItemModelCreation from "./itemModelCreation";

interface TableRowItemProps {
  value: Item;
  index: number;
}
export const TableRowItem: React.FC<TableRowItemProps> = props => {



  return (

    <tr>
      <td>{props.value.sn}</td>
      <td >

        <ItemModelCreation
          value={props.value}
          index={props.index}
        />

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
