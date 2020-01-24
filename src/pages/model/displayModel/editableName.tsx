import React, { useState } from "react";
import EditableDisplayText from "../../../components/sharedStyled/EditableDisplayText";
import { Input, Form, Popover, message, Tooltip } from "antd";
import client from "../../../graphql";
import { EDIT_MODEL_NAME } from "../../../graphql/mutation/modelMutation";

interface EditableNameProps {
  record: any;
  text: any;
}

const EditableName: React.FC<EditableNameProps> = props => {
  const { record, text } = props;

  const [value, setValue] = useState<string>(text);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value && value.length > 0) {
      const modelId = record.id;

      client
        .mutate({
          mutation: EDIT_MODEL_NAME,
          variables: { id: modelId, name: value }
        })
        .then(res => {
          message.success("Success");
        })
        .catch(err => {
          message.error("Can't change the name, please try again");
        });
    } else {
      message.warning("The value you enter is empty");
    }
  };

  const title = "Press Enter to submit";

  const contentEdit = (
    <Tooltip title={title} placement="top">
      <Form onSubmit={onSubmit}>
        <Input
          minLength={1}
          placeholder={value}
          value={value}
          onChange={onChange}
        />
      </Form>
    </Tooltip>
  );

  return (
    <Popover trigger="click" placement="right" content={contentEdit}>
      <EditableDisplayText>{text}</EditableDisplayText>
    </Popover>
  );
};

export default EditableName;
