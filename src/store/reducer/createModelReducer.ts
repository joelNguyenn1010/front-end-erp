import { ModelCreate } from "../contract/Model"
import { CreateModelActionTypes } from '../action/createModelAction'

// const cisco = localStorage.getItem('manufactor') ? localStorage.getItem('manufactor') : "Cisco"
const inputInit = {
    input: {
        name: '',
        manufactor: "Cisco",
        manufactorId: 2,
        category: '',
        categoryId: -1,
        hasSerial: true
    },
}
const init: ModelCreate = {
    input: inputInit.input,

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
                input: inputInit.input,
            }
        case "CLEAR:RESPONSE":
            return {
                ...state,
                res: {
                    id: 0,
                    name: ''
                }
            }
        default:
            return state
    }
}