import React from 'react'
import { ADD_EMAIL_SUPPLIER} from "../../../../../graphql/mutation";
import { useParams } from 'react-router-dom';
import { useForm, FormContext } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { message, Modal } from 'antd';
import EmailSupplierForm from "../../../add/addCustomer/addEmailSupplier/email-supplier-form";

interface CreateNewEmailSupplier {
    setOpen: (value: boolean) => void;
    open: boolean;
    refetchData?: () => void;
}


const CreateNewEmailSupplier:React.FC<CreateNewEmailSupplier> = (props: any) => {

    let { id } = useParams();
    const methods = useForm();

    const [createAddEmailSupplier] = useMutation(ADD_EMAIL_SUPPLIER, {
        onCompleted: () => {
            message.success("New email created");
            if (props.refetchData) {
                props.refetchData();
            }
            // reload the data
        },
        onError: error => {
            console.log(error);
            message.error("Can't create email , please try again");
        }
    });

    const onSubmit = (data: any) => {
        console.log(data)
        createAddEmailSupplier({ variables: { ...data, supplierId: id } });
        props.setOpen(false);
    };

    const onCancel = (e: any) => {
        props.setOpen(false);
    };

    const onOk = () => {
        props.setOpen(false);
    };
    return (
        <Modal footer={null} visible={props.open} onCancel={onCancel} onOk={onOk}>
            <FormContext {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <EmailSupplierForm />
                </form>
            </FormContext>
        </Modal>
    )
}

export default CreateNewEmailSupplier