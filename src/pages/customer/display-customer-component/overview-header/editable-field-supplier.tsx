import React from 'react'
import { useForm, FormContext } from 'react-hook-form'
import {  Popover, Tooltip, message, Button } from 'antd'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_SUPPLIER } from '../../../../graphql/mutation/supplierMutation'
import { useParams } from 'react-router-dom'


interface EditableFieldProps {
    name: any,
    value: any,
    selectEnum?: any,
    isTextarea?: boolean
}

const EditableField: React.FC<EditableFieldProps> = props => {

    const { id } = useParams()

    const [updateSupplier] = useMutation(UPDATE_SUPPLIER, {
        onCompleted: () => {
            message.success("Update success")
        },
        onError: (error: any) => {
            message.error("Error, please try again")
        }
    })

    const methods = useForm()
    const { register, handleSubmit } = methods

    const onSubmit = (data: any) => {
        const variables = {
            id,
            ...data
        }

        updateSupplier({ variables })
    }


    const renderInput = props.isTextarea ?
        (
            <React.Fragment>
                <textarea
                defaultValue={props.value}
                    name={props.name}
                    className="ant-input"
                    ref={register}
                />
                <Button htmlType="submit">Submit</Button>
            </React.Fragment>
        )
        :
        (<input                 defaultValue={props.value}
            name={props.name} className="ant-input" ref={register} />)


    const formEdit = (
        <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} >
                {!props.selectEnum ? renderInput : props.selectEnum}
            </form>
        </FormContext>
    )
    return (
        <Popover trigger="click" content={formEdit}>
            <Tooltip placement="right" title={"Click to edit"}>

                {props.value ? <p>{props.value}</p> : <Button>Edit</Button>}
            </Tooltip>
            {/* {edit && formEdit} */}
        </Popover>
    )
}

export default EditableField
