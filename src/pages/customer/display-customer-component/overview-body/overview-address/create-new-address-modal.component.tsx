import React, { useState } from 'react'
import {Modal} from 'antd'
import TableAddressDetail from '../../../add/addCustomer/tableAddressDetail'
import { CreateAddress } from '../../../../../store/contract/Address'

interface CreateNewAddressProps {
    setOpen: (value: boolean) => void,
    open: boolean,
}

const CreateNewAddress:React.FC<CreateNewAddressProps> = (props: any) => {


    const onCancel = (e: any) => {
        props.setOpen(false)
        
    }

    const onOk = () => {
        props.setOpen(false)
    }

    return (
        <Modal visible={props.open} onCancel={onCancel} onOk={onOk} >
            <TableAddressDetail />
        </Modal>
    )
}

export default CreateNewAddress
