import React, { useState } from 'react'
import { useForm, FormContext } from 'react-hook-form'
import { Form, Popover, Tooltip, message, Button } from 'antd'
import { useMutation } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'


interface EditableDescriptionFieldProps {
    name: any,
    value: any,
    selectEnum?: any,
    isTextarea?: boolean
    mutation: any,
    id?: any
}

const UpdateDescriptionField: React.FC<EditableDescriptionFieldProps> = props => {


    const [visible, setVisible] = React.useState<boolean>(false)
    

    const [updateSupplier] = useMutation(props.mutation, {
        onCompleted: () => {
            message.success("Update success")
            setVisible(false)
        },
        onError: (error: any) => {
            message.error("Error, please try again")
        }
    })

    const methods = useForm()
    const { register, handleSubmit } = methods

    const onSubmit = (data: any) => {
        if(props.id) {
            const variables = {
                id: props.id,
                ...data
            }
            updateSupplier({ variables })
        }

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
        <Popover 
      
        // mouseLeaveDelay={() => cconsol}
        onVisibleChange={(visible: any) => setVisible(visible)}
        visible={visible}
        
        trigger="click" content={formEdit}>
            <Tooltip placement="right" title={"Click here to edit"}>
                <div onClick={() => setVisible(true)}>

                {props.value ? <p>{props.value}</p> : <Button>Edit</Button>}
                </div>
            </Tooltip>
            {/* {edit && formEdit} */}
        </Popover>
    )
}

export default UpdateDescriptionField
