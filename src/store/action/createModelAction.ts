import { Model } from "../contract/Model";
import { AppState } from "..";
import client from "../../graphql";
import { ADD_MODEL } from "../../graphql/mutation";
import { message } from "antd";

export interface ChangeValue {
    type: string,
    payload: {
        key: string,
        value: any
    }
}

export const changeValueAction = (key: string, value: any) : ChangeValue => {
    console.log('value', value)
    return {
        type: "CHANGE_VALUE",
        payload: {
            key,
            value
        }
    }
}


export const submitModelAction = () => {
    return (dispatch: any, getState: () => AppState) => {

        const input = getState().createModelReducer.input

        const newModel = {
            name: input.name,
            manufactorId: input.manufactorId,
            categoryId: input.categoryId,
            // note: input.
            hasSerial: input.hasSerial
        }


        client.mutate({mutation: ADD_MODEL, variables: {...newModel}})
        .then(res => {
            message.success("New Model created")

            dispatch({type: "CLEAR"})
        })
        .catch(err =>{
            message.error("Cant create new model, please try again")
        })
    }
}
// 
export type CreateModelActionTypes = ChangeValue