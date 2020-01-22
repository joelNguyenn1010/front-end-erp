import React from "react";
import { Form, Input, Button } from "antd";
import { EditTableContext } from "./editTableRow";

const EditTableCell = (props: any) => {
  const [edit, setEdit] = React.useState({ editing: false });
  const [input, setInput] = React.useState();
  
  const toggleEdit = () => {

    setEdit({ editing: true });
  };

  const save = (e: any) => {
    props.form.validateFields((error: any, values: any) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      setEdit({editing: false})
      props.handleSave({ ...props.record, ...values });
    });
    
  };




  const renderCell = (form: any) => {
    const { children, dataIndex, record, title } = props;
  
    console.log(record[dataIndex], 'ee')
    const { editing } = edit;
    
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {props.form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            onPressEnter={save}
            onBlur={save}
          />
        )}
      </Form.Item>
    ) : (
      <div style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  };
  const { editable, children} = props;

  return (
      <td >
        {editable ? (
          <EditTableContext.Consumer>{renderCell}</EditTableContext.Consumer>
        ) : (
          children
        )}
      </td>
  )
};

export default Form.create()(EditTableCell);
