import React from "react";
import { TableRowItem } from "./tableRowItem";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";
import { Item } from "../../../store/contract/Item";
import SubmitItemButton from "./submitItemButton";
import { Empty } from "antd";

export const TableBodyItem: React.FC = () => {
  const items: Array<Item> = useSelector(
    (state: AppState) => state.createItemReducer.items
  );

  return (
    <tbody>
      <SubmitItemButton />
      {items && items.length > 0 ? (
        items.map((value: Item, index: number) => {
          return (
            <TableRowItem
              index={index}
              key={value.serialNumber}
              value={value}
            />
          );
        })
      ) : (
        <tr>
          <td colSpan={6}>
            <Empty />
          </td>
        </tr>
      )}
    </tbody>
  );
};
