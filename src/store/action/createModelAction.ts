import { AppState } from "..";
import client from "../../graphql";
import { ADD_MODEL } from "../../graphql/mutation";
import { message } from "antd";


export interface AssignResponse {
    type: string,
    payload: any
}

export const assignResponse = (value: any) => {
    return {
        type: "ASSIGNRESPONSE",
        payload: value
    }
}

export interface ChangeValue {
    type: string,
    payload: {
        key: string,
        value: any
    }
}

export const changeValueAction = (key: string, value: any) : ChangeValue => {

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
            if(res) {
                const id = res.data.createNewModel.id
                const name = res.data.createNewModel.name
                dispatch(assignResponse({id, name}))
            }
            message.success("New Model created")

            dispatch({type: "CLEAR"})
        })
        .catch(err =>{
            message.error("Cant create new model, please try again")
        })
    }
}



// 
export type CreateModelActionTypes = ChangeValue | AssignResponse