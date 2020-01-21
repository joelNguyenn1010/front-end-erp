import React, { useState } from 'react'
import {Modal} from 'antd'
import TableAddressDetail from '../../../add/addCustomer/tableAddressDetail'
import { CreateAddress } from '../../../../../store/contract/Address'
import { useDispatch } from 'react-redux'
import { submitAddressAction } from '../../../../../store/action/customerAction/createCustomerAction'
import { useParams } from 'react-router-dom'

interface CreateNewAddressProps {
    setOpen: (value: boolean) => void,
    open: boolean,
    onClose?: () => void
}

const CreateNewAddress:React.FC<CreateNewAddressProps> = (props: any) => {

    let {id} = useParams();
    const dispatch = useDispatch()

    const onCancel = (e: any) => {
        props.setOpen(false)
        
    }

    const onOk = () => {
        props.setOpen(false)
        dispatch(submitAddressAction(id))
        if(props.onClose) {
            props.onClose();
        }
    }

    return (
        <Modal visible={props.open} onCancel={onCancel} onOk={onOk} >
            <TableAddressDetail />
        </Modal>
    )
}

export default CreateNewAddress
