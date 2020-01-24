import React from 'react'
import { Modal, message } from 'antd'
import AddRepresentativeForm from '../../../add/addCustomer/addRepresentativeDetail/representative-create-form'
import { useParams } from 'react-router-dom'
import { useForm, FormContext } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import { ADD_CUS_REPRESENTATIVE } from '../../../../../graphql/mutation/supplierMutation'
interface CreateNewRepresentativeProps {
    setOpen: (value: boolean) => void,
    open: boolean,
    refetchData?: () => void
}





const CreateNewRepresentative: React.FC<CreateNewRepresentativeProps> = (props: any) => {

     // create new form
     const methods = useForm()

    let { id } = useParams();

    const [createCustomer] = useMutation(ADD_CUS_REPRESENTATIVE, 
        {
            onCompleted: () => {
                message.success("New representative created")
                methods.reset({emails: [{email: ""}]})
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
        console.log(data)
        // supplierId: $supplierId, salutation: $salutation, fullName: $fullName, position: $position, phoneNumber: $phoneNumber, emails: $emails
        createCustomer({ variables: {...data, supplierId: id}})
        props.setOpen(false);
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
