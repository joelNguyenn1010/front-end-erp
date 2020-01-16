import React from "react";
import { Form, message } from "antd";
import Search from "antd/lib/input/Search";
import {
  checkSNInDB,
  addItem
} from "../../../store/action/itemAction/createItemAction";
import { useDispatch } from "react-redux";



const FindSN: React.FC = () => {
  
  const dispatch = useDispatch();

  const [input, setInput] = React.useState<string>("");

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    checkSNInDB(input)
      .then(() => {
        message.error("This item already added");
      })
      .catch(() => {
        dispatch(addItem(input));
      });

    setInput("");
  };

  return (
    <tr >
      <td colSpan={8}>
        <Form onSubmit={onSearch}>
          <Search
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
          />
        </Form>
      </td>
    </tr>
  );
};

export default FindSN;
