import React from 'react'
import { Modal } from 'antd'
import TableRepresentative from '../../../add/addCustomer/tableRepresentative'
import { useDispatch } from 'react-redux'
import { submitRepresentativeAction } from '../../../../../store/action/customerAction/createCustomerAction'
import { useParams } from 'react-router-dom'

interface CreateNewRepresentativeProps {
    setOpen: (value: boolean) => void,
    open: boolean,
    onClose?: () => void
}

const CreateNewRepresentative:React.FC<CreateNewRepresentativeProps> = (props: any) => {

    let {id} = useParams();

    const dispatch = useDispatch();

    const onCancel = () => {
        props.setOpen(false)
        
    }

    const onOk = () => {
        props.setOpen(false)
        
        dispatch(submitRepresentativeAction(id))
        if(props.onClose) {
            props.onClose();
        }
    }

    return (
        <div>
            <Modal visible={props.open} onCancel={onCancel} onOk={onOk} >
                <TableRepresentative />
            </Modal>
        </div>
    )
}


export default CreateNewRepresentative
