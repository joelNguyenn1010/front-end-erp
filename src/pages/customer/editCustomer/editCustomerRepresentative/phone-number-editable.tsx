import React, { useState } from 'react'
import { Tooltip, Form, Input, Popover, InputNumber } from 'antd';
import EditableDisplayText from '../../../../components/sharedStyled/EditableDisplayText';



interface PhoneNumberEditableProps {
    handleSave: any,
    text: any,
    record: any,
}


const PhoneNumberEditable: React.FC<PhoneNumberEditableProps> = props => {

    const [value, setValue] = useState<any>(props.text);

    const {text, record} = props

    const onChange = (e: number | undefined) => {
        setValue(e);
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
                <InputNumber
                    minLength={1}
                    maxLength={12}
                    placeholder={`${value}`}
                    value={parseInt(value) }
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
