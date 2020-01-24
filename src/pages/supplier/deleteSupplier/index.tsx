import React from 'react'
import { Menu, Button, Popconfirm, message } from 'antd'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { DELETE_SUPPLIER } from '../../../graphql/mutation/supplierMutation'

// this have to be menu
interface DeleteSupplierProps {
    record: any
}
const DeleteSupplier: React.FC<DeleteSupplierProps> = props => {
    const id = props.record.id

    const [deleteSupplier] = useMutation(DELETE_SUPPLIER, {
        onCompleted: () => {
            message.success("Delete success")
        },
        onError: (error) => {
            console.log(error)
            message.error("Error when delete supplier, please try again")
        }
    }
    )
    const handleDelete = () => {
        deleteSupplier({ variables: { id } })
    }
    return (
        <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete()}
        >
            <a>Delete</a>
        </Popconfirm>
    )
    
}

export default DeleteSupplier
