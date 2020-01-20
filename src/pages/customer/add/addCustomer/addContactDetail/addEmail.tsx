import React, { Fragment } from "react";
import { Form, Input, Icon, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import {
  changeCustomerValue,
  addEmail,
  deleteData,
  submitRepresentativeEmail
} from "../../../../../store/action/customerAction/createCustomerAction";

let id = 0;

const AddEmail = (props: any) => {
  const [input, setInput] = React.useState<string>('');
  const dispatch = useDispatch();
  const name = useSelector((state: AppState) => state.CustomerReducer.input.emails)

  const remove = (k: any) => {
    const { form } = props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // We need at least one email
    if (keys.length === 1) {
      return;
    }else{
      //remove data in redux
      name.splice(k,1)
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter((key: any) => key !== k)
      
    });
    //call function delete email in redux
    dispatch(deleteData(k))
    
  };

  const add = () => {
    const { form } = props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addEmail(input));
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const { keys, names } = values;
 
        
      }
    });
  };

  const { getFieldDecorator, getFieldValue } = props.form;

  getFieldDecorator("keys", { initialValue: [''] });
  const keys = getFieldValue("keys");
  const formItems = keys.map((k: any) => (
    
    <Form.Item required={false} key={k}>
      {getFieldDecorator(`names[${k}]`, {
        validateTrigger: ["onChange", "onBlur"],
        rules: [
          {
            type: "email",
            message: "This field require an E-mail!"
          },
          {
            required: true,
            message: "Please input your E-mail!"
          }
        ]
      })(
        <Input
          onChange={(e: any) => setInput(e.target.value)}
          placeholder="Email"
          style={{ width: "85%" }}
        />
      )}
      {keys.length > 1 ? (
        <Icon
          type="minus-circle-o"
          onClick={() => remove(k)}
          style={{ marginLeft: "10px" }}
        />
      ) : null}
    </Form.Item>
  ));

  return (
    <div>
      <Form onSubmit={handleSubmit} >
        {formItems}
        <Form.Item>
          <Button type="dashed"  onClick={add} style={{ width: "60%" }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create()(AddEmail);
