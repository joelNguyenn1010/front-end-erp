import React, { useState } from 'react'
import { Tooltip, Form, Input, Popover, InputNumber } from 'antd';
import EditableDisplayText from '../../../../../components/sharedStyled/EditableDisplayText';



interface PhoneNumberEditableProps {
    handleSave: any,
    text: any,
    record: any,
}


const PhoneNumberEditable: React.FC<PhoneNumberEditableProps> = props => {

    const [value, setValue] = useState<string>(props.text);

    const {text, record} = props

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = record.id
        props.handleSave({id, phoneNumber: value})
    }

    const title = "Press Enter to submit";

    const contentEdit = (
        <Tooltip title={title} placement="top">
            <Form onSubmit={onSubmit}>
                <Input
                    type="number"
                    minLength={1}
                    placeholder={`${value}`}
                    value={value}
                  onChange={onChange}
                />
            </Form>
        </Tooltip>
    );

    return (
        <Popover trigger="click" placement="bottomLeft" content={contentEdit}>
            <EditableDisplayText>{text}</EditableDisplayText>
        </Popover>
    );
}

export default PhoneNumberEditable
