
import { ItemWithoutSn } from './../contract/ItemWithoutSn';
import { CreateItemWithoutSNActionTypes } from './../action/createItemWithoutSNAction'


const init: ItemWithoutSn = {
    input: {
        model: '',
        modelId: 0,
        supplier: '',
        supplierId: 0,
        quantity: 1,
        whlocation: 'sydney',
        whlocationId: 0,
        note: '',
        conditionId: 4,
        condition: 'USED B'
    },
}

export const CreateItemWithoutSNReducer = (state: ItemWithoutSn = init, action: CreateItemWithoutSNActionTypes) => {
    switch (action.type) {
        case "CHANGE_DATA":
            let oldInput: any = Object.assign({}, state.input)
            oldInput[action.payload.key] = action.payload.value
            return {
                ...state,
                input: oldInput
            }
        case "CLEAR_DATA":
            return {
                ...state,
                input: {
                    modelId: '',
                    model: '',
                    supplier: '',
                    supplierId: 0,
                    whlocation: 'sydney',
                    whlocationId: 0,
                    note: '',
                    condition: 'USED B',
                    conditionId: 4,
                    quantity:1
                }
            }
        default:
            return state

    }
}

