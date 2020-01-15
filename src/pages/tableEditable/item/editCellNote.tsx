import React, { useState } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import client from '../../../graphql'
import { UPDATE_ITEM_NOTE } from '../../../graphql/mutation'
import { Form, Button, message } from 'antd'

interface EditCellNoteProps {
    text: any,
    record: any
}

const EditCellNote:React.FC<EditCellNoteProps> = (props: any) => {
    const {text, record } = props

    const [value, setValue] = useState<string>(text)
    
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value)
    }

    const onSubmit = (event: React.KeyboardEvent<HTMLFormElement>) => {
        console.log(value)
        client.mutate({mutation: UPDATE_ITEM_NOTE, variables:{id: record.id, note: value}})
        .then(res => {
            message.success('Updated note')
        })
        .catch(err => {
            console.log(err)
            message.error('Cant update note, please try agiain')
        })

        event.preventDefault();
    }

    // const contentEdit = (
    //     <Form onSubmit={onSubmit}>
    //         <TextArea placeholder={value} value={value} onChange={onChange} />
    //         <Button htmlType="submit">Submit</Button>
    //     </Form>
    // )

    return (
        
        <Form onSubmit={onSubmit}>
            <TextArea placeholder={value}  value={value} onChange={onChange} />
            <Button htmlType="submit">Submit</Button>
        </Form>
    )
}

export default EditCellNote
