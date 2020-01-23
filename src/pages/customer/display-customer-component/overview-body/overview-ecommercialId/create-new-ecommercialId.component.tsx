
// @ts-ignore
import React from "react"
import {useParams} from "react-router-dom";
import {FormContext, useForm} from "react-hook-form";
import {useMutation} from "@apollo/react-hooks";
import {ADD_ECOMMERCIAL_ID, ADD_SUPPLIER_ADDRESS} from "../../../../../graphql/mutation";
import {message, Modal} from "antd";
import EcommercialForm from "../../../add/addCustomer/addEcommercialId/ecommercial-id-create-form";

interface CreateEcommercialIdProps {
    setOpen: (value: boolean) => void;
    open: boolean;
    refetchData?: () => void;
}

const CreateEcommercialId: React.FC<CreateEcommercialIdProps> = (props: any) => {
    let { id } = useParams();
    const methods = useForm();

    const [createAddEcommercial] = useMutation(ADD_ECOMMERCIAL_ID, {
        onCompleted: () => {
            message.success("New ecommercial id created");
            if (props.refetchData) {
                props.refetchData();
            }
            // reload the data
        },
        onError: error => {
            console.log(error);
            message.error("Can't create ecommercial id, please try again");
        }
    });

    const onSubmit = (data: any) => {
        // supplierId: $supplierId, salutation: $salutation, fullName: $fullName, position: $position, phoneNumber: $phoneNumber, emails: $emails
        createAddEcommercial({ variables: { ...data, supplierId: id } });
        // console.log(data)
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
                    <EcommercialForm />
                </form>
            </FormContext>
        </Modal>
    )
}

export default CreateEcommercialId