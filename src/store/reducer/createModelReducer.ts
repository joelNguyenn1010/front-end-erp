import { ModelCreate } from "../contract/Model"
import { CreateModelActionTypes } from '../action/createModelAction'

const init: ModelCreate = {
    input: {
        name: '',
        manufactor: '',
        manufactorId: -1,
        category: '',
        categoryId: -1,
        hasSerial: true
    },

    res: {
        id: 0,
        name: ''
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

        case "ASSIGNINITMODEL":
            return {
                ...state,
                input: action.payload
            }

        case "ASSIGNRESPONSE":
            return {
                ...state,
                res: action.payload
            }

        case "CLEAR":
            return {
                ...state,
                input: {
                    name: '',
                    manufactor: '',
                    manufactorId: -1,
                    category: '',
                    categoryId: -1,
                    hasSerial: true
                },
            }
        default:
            return state
    }
}