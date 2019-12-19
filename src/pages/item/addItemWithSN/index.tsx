import React from "react";
import FindSN from "./findSN";
import { TableBodyItem } from "./tableBodyItem";

const AddItem: React.FC = () => {
  
  return (
    <table style={{width: "100%"}}>
      <thead >
        <tr>
          <th >SN</th>
          <th style={{width: '30%'}}>Model</th>
          <th >Condition</th>
          <th >Supplier</th>
          <th >Note</th>
          <th >Action</th>
        </tr>
        <FindSN />
      </thead>

      <TableBodyItem />
    </table>

    
  );
};

export default AddItem;
