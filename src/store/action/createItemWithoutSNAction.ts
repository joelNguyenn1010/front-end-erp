import { message } from 'antd';
import { ADD_ITEM } from './../../graphql/mutation/index';

import { AppState } from "..";
import client from '../../graphql';


export interface ChangeData {
    type: string,
    payload: {
        key: string,
        value: any
    }
}


export const ChangeDataAction = (key: string, value: any): ChangeData => {
    console.log(key, value)
    return {

        type: "CHANGE_DATA",
        payload: {
            key,
            value
        }
    }
}

export const SubmitItemWithoutSNAction = () => {
    return (dispatch: any, getState: () => AppState) => {
        const input =  getState().CreateItemWithoutSNReducer.input

        const newItemWithoutSN = {
            model: input.model,
            modelId: input.modelId,
            supplierId: input.supplierId,
            warehouseId: input.whlocationId,
            conditionId: input.conditionId,
            warehouse: input.whlocation,
            quantity: input.quantity,
            condition: input.condition,
            supplier: input.supplier

        }

        client.mutate({mutation: ADD_ITEM, variables: {...newItemWithoutSN}})
        .then(res => {
            message.success("New Item created")

            dispatch({type: "CLEAR_DATA"})
        })
        .catch(err =>{
            message.error("Cant create new item, please try again")
        })
    }
}



export type CreateItemWithoutSNActionTypes = ChangeData