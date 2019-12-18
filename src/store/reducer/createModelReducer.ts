import { Model, ModelCreate } from "../contract/Model"
import { CreateModelActionTypes } from '../action/createModelAction'

const init: ModelCreate = {
    input: {
        id: '',
        name: '',
        manufactor: '',
        manufactorId: 0,
        category: '',
        categoryId: 0,
        hasSerial: true
    },

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

        case "CLEAR":
            return {
                ...state,
                input: {
                    id: '',
                    name: '',
                    manufactor: '',
                    manufactorId: 0,
                    category: '',
                    categoryId: 0,
                    hasSerial: true
                }
            }
        default:
            return state
    }
}