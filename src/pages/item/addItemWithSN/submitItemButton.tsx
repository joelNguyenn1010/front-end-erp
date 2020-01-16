import React from "react";
import { Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  submitItemAction,
  deleteItems
} from "../../../store/action/itemAction/createItemAction";
import { AppState } from "../../../store";

const SubmitItemButton: React.FC = () => {
  const name = useSelector((state: AppState) => state.createItemReducer.items);

  const dispatch = useDispatch();

  const onClick = () => {
    for (let i = 0; i < name.length; i++) {
      dispatch(submitItemAction(i));
      console.log("submit");
    }
  };

  return (
    <tr>
      <td style={{paddingBottom: '1rem', paddingTop: '1rem'}} colSpan={7}>
        <Button style={{width:'100%'}} type="primary" onClick={onClick}>Submit</Button>
      </td>
    </tr>
  );
};

export default SubmitItemButton;
