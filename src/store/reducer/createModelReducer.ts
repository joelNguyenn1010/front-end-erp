import { ModelCreate } from "../contract/Model"
import { CreateModelActionTypes } from '../action/model/createModelAction'
import { ModelActionTypes } from "../types/model/model.types"

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
        case ModelActionTypes.CHANGE_VALUE:
            let oldInput: any = Object.assign({}, state.input)
            oldInput[action.payload.key] = action.payload.value
            return {
                ...state,
                input: oldInput
            }

        case ModelActionTypes.ASSIGNINITMODEL:
            return {
                ...state,
                input: action.payload
            }

        case ModelActionTypes.ASSIGNRESPONSE:
            return {
                ...state,
                res: action.payload
            }

        case ModelActionTypes.CLEAR:
            return {
                ...state,
                input: inputInit.input,
            }
        case ModelActionTypes.CLEAR_RESPONSE:
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