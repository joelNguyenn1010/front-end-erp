import React, { useEffect } from 'react'
import { Drawer } from 'antd'
import AddModel from '../../model/addModel'
import { useDispatch, useSelector } from 'react-redux'
import { ModelCreate } from '../../../store/contract/Model'
import { AppState } from '../../../store'

interface AddNewModelModalProps {
    setOpen: (value: boolean) => void,
    open: boolean,
    ciscoModel: string,
    setCiscoModel: any,
    onSuccessCreateOrClose: (response: any) => void,
    model: ModelCreate
}
const AddNewModelModal: React.FC<AddNewModelModalProps> = props => {

    const dispatch = useDispatch()

    const response = useSelector((state: AppState) => state.createModelReducer.res)



    useEffect(() => {
   
        dispatch({
            type: "ASSIGNINITMODEL",
            payload: props.model.input
        })


    }, [])

    const onClose = () => {
        props.onSuccessCreateOrClose(response)  
    }
    return (
        <Drawer visible={true} onClose={onClose} >
            <AddModel />
        </Drawer>
    )
}

export default AddNewModelModal
