import React, { BaseSyntheticEvent } from 'react'
import { Modal, Button, message } from 'antd'
import AddRepresentativeForm from '../../../add/addCustomer/addRepresentative/add-representative-form'
import { useParams } from 'react-router-dom'
import { useForm, FormContext } from 'react-hook-form'
import { Email } from '../../../../../store/contract/Email'
import { useMutation } from '@apollo/react-hooks'
import { ADD_CUS_REPRESENTATIVE } from '../../../../../graphql/mutation'
interface CreateNewRepresentativeProps {
    setOpen: (value: boolean) => void,
    open: boolean,
    refetchData?: () => void
}


type FormData = {
    fullName: string,
    salutation: string,
    phoneNumber: string,
    emails: Array<Email>,
    position: string
}
const CreateNewRepresentative: React.FC<CreateNewRepresentativeProps> = (props: any) => {

     // create new form
     const methods = useForm()

    let { id } = useParams();

    const [createCustomer] = useMutation(ADD_CUS_REPRESENTATIVE, 
        {
            onCompleted: () => {
                message.success("New representative created")
                methods.reset()
                if(props.refetchData) {
                    props.refetchData()
                }
                // reload the data
            },
            onError: (error) => {
                console.log(error)
                message.error("Can't create representative, please try again")
            }
        })


   

    // BaseSyntheticEvent<object, any, any>
    const onSubmit = (data: any) => { 
        // supplierId: $supplierId, salutation: $salutation, fullName: $fullName, position: $position, phoneNumber: $phoneNumber, emails: $emails
        // createCustomer({ variables: {...data, supplierId: id}})
        console.log(data)
     }

     const onCancel = (e: any) => {
        props.setOpen(false)

    }

    const onOk = () => {
        props.setOpen(false)
    
    }

    return (
        <Modal
            footer={null}
            visible={props.open}
            onCancel={onCancel}
            onOk={onOk}
        >

            <FormContext {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <AddRepresentativeForm />
                </form>
            </FormContext>

        </Modal>
    )
}


export default CreateNewRepresentative
