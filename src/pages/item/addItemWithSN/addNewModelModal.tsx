import React, { useState, useEffect } from 'react'
import { Drawer } from 'antd'
import AddModel from '../../model/addModel'
import { useDispatch, useSelector } from 'react-redux'
import { ModelCreate } from '../../../store/contract/Model'
import { AppState } from '../../../store'
import { addModelWithCiscoCheck, makeLoadingModel, makeCiscoModelCreation } from '../../../store/action/itemAction/createItemAction'
import { changeValueAction } from '../../../store/action/createModelAction'

interface AddNewModelModalProps {
    setOpen: (value: boolean) => void,
    open: boolean,
    ciscoModel: string,
    index: number
}
const AddNewModelModal: React.FC<AddNewModelModalProps> = props => {

    // const [open, setOpen] = useState<boolean>(true)

    const dispatch = useDispatch()

    const sn = useSelector((state: AppState) => state.createItemReducer.items[props.index].sn)



    useEffect(() => {
        console.log("Should not renbder")
        const model: ModelCreate = {
            input: {
                name: props.ciscoModel,
                hasSerial: true,
                category: '',
                manufactor: '',
                manufactorId: 0,
                categoryId: 0,
                
            }
        }

        dispatch({
            type: "ASSIGNINITMODEL",
            payload: model.input
        })


        dispatch(addModelWithCiscoCheck(sn, props.index));

        return () => {


            // dispatch(addModelWithCiscoCheck(sn, props.index));
            if(sn){
                
                // dispatch(addModelWithDBChecked(props.value.sn, props.index))
                dispatch({type: "CLEAR"})
                
                //ciscomodel 
            
            dispatch(makeCiscoModelCreation(props.index, false, props.ciscoModel))
            }
                
        }
    }, [])

    const onClose = () => {
        props.setOpen(false)
    }
    return (
        <Drawer visible={props.open} onClose={onClose} >
            <AddModel />
        </Drawer>
    )
}

export default AddNewModelModal