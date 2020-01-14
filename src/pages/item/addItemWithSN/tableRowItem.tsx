import React, { useState } from "react";

import AddItemSupplier from "./addItemSupplier";
import ItemModelCreation from "./itemModelCreation";
import AddItemCondition from "./addItemCondition";
import AddItemNote from "./addItemNote";
import DeleteItemButton from "./deleteItemButton";
import { Item } from "../../../store/contract/Item";
import AddItemWarehouse from "./addItemWarehouse";
import SubmitItemButton from "./submitItemButton";

interface TableRowItemProps {
  value: Item;
  index: number;
}

export const TableRowItem: React.FC<TableRowItemProps> = props => {
  return (
    
         
      <tr>
        
        <td>{props.value.serialNumber}</td>
        <td>
          <ItemModelCreation value={props.value} index={props.index} />
        </td>
        <td>
          <AddItemCondition index={props.index} />
        </td>
        <td>
          <AddItemSupplier index={props.index} />
        </td>
        <td>
          <AddItemWarehouse index={props.index} />
        </td>
        <td>
          <AddItemNote index={props.index} />
        </td>
        <td>
          <DeleteItemButton index={props.index} />
          
        </td>
      </tr>
    
  );
};
