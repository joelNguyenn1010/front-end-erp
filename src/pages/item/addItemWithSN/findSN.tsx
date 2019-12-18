import React from "react";
import axios from "axios";
import { Form, Input, message } from "antd";
import Search from "antd/lib/input/Search";
import client from "../../../graphql";
import { gql } from "apollo-boost";
import { CreateItemDAO } from "../../../context/provider/createItemContext";
import { CreateItemContext } from "../../../context/provider/createItemContext";
import {
  fetchSN,
  checkModelInDB,
  addItem
} from "../../../store/action/itemAction/createItemAction";
import { useDispatch } from "react-redux";

let timeout: any = null;

const FindSN: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const dispatch = useDispatch()

  const [input, setInput] = React.useState<string>("");

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    dispatch(addItem(input))

    setInput("")
  
  };

  return (
    <tr>
      <td colSpan={6}>
        <Form onSubmit={onSearch}>
          <Search
            loading={loading}
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
          />
        </Form>
      </td>
    </tr>
  );
};

export default FindSN;
