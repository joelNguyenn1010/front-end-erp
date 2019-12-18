import React from "react";
import FindSN from "./findSN";
import { TableBodyItem } from "./tableBodyItem";

const AddItem: React.FC = () => {
  
  return (
    <table style={{width: "100%"}}>
      <thead >
        <tr>
          <th style={{width: 200}}>SN</th>
          <th style={{width: 200}}>Model</th>
          <th style={{width: 200}}>Condition</th>
          <th style={{width: 200}}>Supplier</th>
          <th style={{width: 200}}>Note</th>
          <th style={{width: 200}}>Function</th>
        </tr>
        <FindSN />
      </thead>

      <TableBodyItem />
    </table>

    
  );
};

export default AddItem;
