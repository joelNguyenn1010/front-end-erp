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
          <th style={{width: '20%'}}>SN</th>
          <th style={{width: '20%'}}>Model</th>
          <th style={{width: '15%'}}>Condition</th>
          <th style={{width: '15%'}}>Supplier</th>
          <th style={{width: '15%'}}>Warehouse</th>
          <th style={{width: '20%'}}>Note</th>
          <th style={{width: '15%'}}>Action</th>
        </tr>
        <FindSN />
      </thead>

      <TableBodyItem />
    </table>

    
  );
};

export default AddItem;
