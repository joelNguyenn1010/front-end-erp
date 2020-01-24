import React from 'react'
import {ADD_COURIER} from "../../../../../../graphql/mutation/supplierMutation";
import { useParams } from 'react-router-dom';
import { useForm, FormContext } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { message, Modal } from 'antd';
import ShippingAccountForm from "../../../../add/addCustomer/addShippingAccount/shipping-account-form";

interface CreateNewCourierProps {
    refetchData: () => void
    open: any
    setOpen: (value: boolean) => void
}

const CreateNewCourier:React.FC<CreateNewCourierProps> = (props: any) => {
    let { id } = useParams();
    const methods = useForm();

    const [createShippingAccount] = useMutation(ADD_COURIER, {
        onCompleted: () => {
            message.success("New shipping account created");
            methods.reset()
            if (props.refetchData) {
                props.refetchData();
            }
            // reload the data
        },
        onError: error => {
            message.error("Can't create shipping account, please try again");
        }
    });

    const onSubmit = (data: any) => {

        createShippingAccount({ variables: { ...data, supplierId: id } });
        props.setOpen(false);
    };

    const onCancel = (e: any) => {
        props.setOpen(false);
    };

    const onOk = () => {
        props.setOpen(false);
    };
    return(
        <Modal footer={null} visible={props.open} onCancel={onCancel} onOk={onOk}>
            <FormContext {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <ShippingAccountForm />
                </form>
            </FormContext>
        </Modal>
    )
}

export default CreateNewCourier