import React, { useState } from 'react'
import EditableDisplayText from '../../../components/sharedStyled/EditableDisplayText'
import { Input, Form, Popover, message } from 'antd'
import client from '../../../graphql'
import { EDIT_MODEL_NAME } from '../../../graphql/mutation'


interface EditableNameProps {
    record: any
    text: any
}

const EditableName: React.FC<EditableNameProps> = props => {

    const { record, text } = props

  


    const [value, setValue] = useState<string>(text)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {  
    
        const modelId = record.id;

        client.mutate({ mutation: EDIT_MODEL_NAME, variables: { id: modelId, name: value } })
        .then((res) => {
            message.success("Success")
        })
        .catch((err) => {
            message.error("Can't change the name, please try again")
        })

        event.preventDefault();

    }

    const contentEdit = (
        <Form onSubmit={onSubmit}>
            <Input placeholder={value} value={value} onChange={onChange} />
        </Form>
    )

    return <Popover trigger="click" placement="right" content={contentEdit}>
        <EditableDisplayText>
            {text}
        </EditableDisplayText>
    </Popover>

}

export default EditableName
