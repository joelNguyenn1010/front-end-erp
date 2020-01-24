import React from 'react'
import { Card, Button, message } from 'antd'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_SUPPLIER_NOTE } from '../../../../../graphql/mutation/supplierNote'
import { useParams } from 'react-router-dom'

const AddSupplierNote = () => {
    const { register, handleSubmit, reset } = useForm()
    const { id } = useParams()
    const [createNote] = useMutation(CREATE_SUPPLIER_NOTE, {
        onCompleted: () => {
            message.success("Note created")
            reset({})
        },
        onError: (error) => {
            console.log(error)
            message.error("Can't create note")
        }
    })
    const onSubmit = (data: any) => {

        createNote({ variables: { ...data, supplierId: id } })
    }


    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea ref={register} className="ant-input" name="internalNote" />
                <Button htmlType="submit">Add Note</Button>
            </form>
        </Card>
    )
}

export default AddSupplierNote
