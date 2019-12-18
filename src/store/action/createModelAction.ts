import { Model } from "../contract/Model";

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

// 
export type CreateModelActionTypes = ChangeValue