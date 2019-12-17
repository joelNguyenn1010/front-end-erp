import React from "react";
import FindSN from "./findSN";
import { TableBodyItem } from "./tableBodyItem";

const AddItem: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>SN</th>
          <th>Model</th>
          <th>Condition</th>
          <th>Supplier</th>
          <th>Note</th>
          <th></th>
        </tr>
        <FindSN />
      </thead>

      <TableBodyItem />
    </table>

    
  );
};

export default AddItem;
