import React, { useState } from 'react'
import { Popover, message, Form, Button } from 'antd'
import EditableDisplayText from '../../../components/sharedStyled/EditableDisplayText'
import TextArea from 'antd/lib/input/TextArea'
import client from '../../../graphql'
import { EDIT_MODEL_NOTE } from '../../../graphql/mutation'

interface EditableNoteProps {
    record: any
    text: any
}

const EditableNote: React.FC<EditableNoteProps> = props => {
    const { record, text } = props

    const [value, setValue] = useState<string>(text)



    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      

        if(value && value.length > 0) {

        

        const modelId = record.id;

        client.mutate({ mutation: EDIT_MODEL_NOTE, variables: { id: modelId, note: value } })
            .then((res) => {
                message.success("Success")
            })
            .catch((err) => {
                message.error("Can't change the note, please try again")
            })

        } else {
            message.warning("The value you enter is empty");
        }

    }

    const contentEdit = (
        <Form onSubmit={onSubmit}>
            <TextArea minLength={1} placeholder={value} value={value} onChange={onChange} />
            <Button htmlType="submit">Submit</Button>
        </Form>
    )

    return <Popover trigger="click" placement="right" content={contentEdit}>
        {text ? <EditableDisplayText style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
            {text}
        </EditableDisplayText> :
        
        (<Button>Edit</Button>)
        }
      

    </Popover>
}

export default EditableNote