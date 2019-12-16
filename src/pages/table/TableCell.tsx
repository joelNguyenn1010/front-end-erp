import React from "react";
import { Input, Form } from "antd";
interface TableCellProps {
  value: any;
}

export const TableCell: React.FC<TableCellProps> = props => {
  const [edit, setEdit] = React.useState({editing:false});

  const [input, setInput] = React.useState(props.value[1]);

  const handleBlur = () => {

     console.log(input)
    //  fetch lai data
      setEdit({editing: false})
  }

  


  const { editing } = edit

  return !editing ? (
    <td onClick={() => setEdit({editing: true})}>{input}</td>
  ) : (
    <React.Fragment>
      <td>
        <Form>
          <Form.Item>
            <Input
              value={input}
              onBlur={handleBlur}
              onPressEnter={handleBlur}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />
          </Form.Item>
        </Form>
      </td>
    </React.Fragment>
  );
};
