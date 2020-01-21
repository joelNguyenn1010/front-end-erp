import React, { Fragment, useEffect } from "react";
import { Form, Input, Icon, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import {
  changeCustomerValue,
  addEmail,
  deleteData,
  submitRepresentativeEmail,
  modifyEmail
} from "../../../../../store/action/customerAction/createCustomerAction";

// let id = 0;

const initEmail = {
  email: ""
}

const AddEmail = (props: any) => {
  // const [input, setInput] = React.useState<string>('');
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
    const emails = form.getFieldValue("keys");

    console.log(emails, 'add')
    
    // const names = form.getFieldValue("emails");
    // const nextKeys = keys.concat(id++);
    // console.log(keys,names,'add')
    // // const nextNames = names.concat([""])
    // // can use data-binding to set
    // // important! notify form to detect changes
    // form.setFieldsValue({
    //   keys: nextKeys,
    //   // names: nextNames,
    // });


  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value
 
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const { keys, names } = values;
        console.log(values)
        // addEmail
        // dispatch(modifyEmail(value));
        
      } 
    });
  };

  const { getFieldDecorator, getFieldValue } = props.form;

  
  useEffect(() => {
    props.form.setFieldsValue({
      keys: [initEmail]
    });
  }, [])


  getFieldDecorator("keys", { initialValue: [initEmail] });
  const emails = getFieldValue("keys");

  const formItems = emails.map((email: string, index: number) => (
    <Form.Item required={false} key={index}>
      {getFieldDecorator(`emails[${index}]`, {
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
          onChange={onChange}
          placeholder="Email"
          name={`emails[${index}]`}
          style={{ width:  "93%"  }}
        />
      )}
      {emails.length > 1 ? (
        <Icon
          type="minus-circle-o"
          // onClick={() => remove(k)}
          style={{ marginLeft: "10px" }}
        />
      ) : null}
    </Form.Item>
    )
  );

  return (
    <div>
      <Form>
        {formItems}
        <Form.Item>
          <Button type="dashed"  onClick={add} style={{ width: "60%" }}>
            <Icon type="plus" /> Add Email
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'dynamic_form_item' })(AddEmail);
