import React, { useEffect } from "react";
import FindSN from "./findSN";
import { TableBodyItem } from "./tableBodyItem";
import { useDispatch } from "react-redux";

const AddItem: React.FC = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    return () => {
        // dispatch({type: "CLEAR:ITEMS:SN"})
    }
  }, [])
  
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
