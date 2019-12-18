import { Model, ModelCreate } from "../contract/Model"
import { CreateModelActionTypes } from '../action/createModelAction'

const init: ModelCreate = {
    input: {
        id: '',
        name: '',
        manufactor: {
            id: 0,
            name: ''
        },
        category: {
            id: 0,
            name: ''
        },
        hasSerial: false
    }

}

export const createModelReducer = (state: ModelCreate = init, action: CreateModelActionTypes) => {
    switch (action.type) {
        case "CHANGE_VALUE":

            let oldInput: any = Object.assign({}, state.input)
            oldInput[action.payload.key] = action.payload.value

            return {
                ...state,
                input: oldInput
            }
        default:
            return state
    }
}