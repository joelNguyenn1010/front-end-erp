import React, { useState, useEffect } from 'react'
import { Drawer, message } from 'antd'
import AddModel from '../../model/addModel'
import { useDispatch, useSelector } from 'react-redux'
import { ModelCreate } from '../../../store/contract/Model'
import { AppState } from '../../../store'
import { addModelWithCiscoCheck, makeLoadingModel, makeCiscoModelCreation, changeItemValue } from '../../../store/action/itemAction/createItemAction'
import client from '../../../graphql'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { FIND_MODEL_WITH_NAME } from '../../../graphql/query'

interface AddNewModelModalProps {
    setOpen: (value: boolean) => void,
    open: boolean,
    ciscoModel: string,
    setCiscoModel: any,
    onSuccessCreateOrClose: (response: any) => void
}
const AddNewModelModal: React.FC<AddNewModelModalProps> = props => {

    const dispatch = useDispatch()

    const response = useSelector((state: AppState) => state.createModelReducer.res)



    useEffect(() => {
        const model: ModelCreate = {
            input: {
                name: props.ciscoModel,
                hasSerial: true,
                category: '',
                manufactor: '',
                manufactorId: 0,
                categoryId: 0,
            },
            res: {
                id: 0,
                name: ''
            }
        }

        dispatch({
            type: "ASSIGNINITMODEL",
            payload: model.input
        })


    }, [])

    const onClose = () => {
        props.onSuccessCreateOrClose(response)  
    }
    return (
        <Drawer visible={props.open} onClose={onClose} >
            <AddModel />
        </Drawer>
    )
}

export default AddNewModelModal
