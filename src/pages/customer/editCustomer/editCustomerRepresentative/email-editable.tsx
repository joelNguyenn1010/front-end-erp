import React from "react";
import {  message, Form } from "antd";
import { useForm, useFieldArray } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_REPRESENTATIVE_EMAIL } from "../../../../graphql/mutation";
import * as yup from 'yup'
interface EmailEditableProps {
  text: any;
  record: any;
}

const schema = yup.object().shape({
  emails: yup.array().of(
    yup.object().shape({
      email: yup.string().email().required()
    })
  )
})

const EmailEditable: React.FC<EmailEditableProps> = (props: any) => {
  const { text, record } = props;

  const { register, control, handleSubmit, errors } = useForm({
    
    validationSchema:schema,
    defaultValues: { emails: text }
  });
  const { fields, remove } = useFieldArray({
    control,
    name: "emails"
  });

  const [updateEmail] = useMutation(UPDATE_REPRESENTATIVE_EMAIL, {
    onCompleted: () => message.success("Data saved"),
    onError: () => message.error("Error when try to save data")
  });

  const onChange = (val: any) => {
    console.log(val)
    const id = record.id;
    updateEmail({ variables: { ...val, representativeId: id } });
  };

  return(
    <Form 
    onSubmit={handleSubmit(onChange)} 
    onBlur={handleSubmit(onChange)}>
      
      {fields.map((item, index) => (
        <li key={item.id}>
          <Form.Item
            help={errors.emails && "Email is not validated"}
            validateStatus={errors.emails ? "error" : ""}
          >
            <input
              className="ant-input"
              name={`emails[${index}].email`}
              ref={register}
            />
            <input
              name={`emails[${index}].id`}
              ref={register}
              style={{ display: "none" }}
            />
          </Form.Item>
          
        </li>
        
      ))}
      
      <input type="submit" style={{ display: "none" }} />
    </Form>
  )

};

export default EmailEditable;
