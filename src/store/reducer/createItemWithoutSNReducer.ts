
import { ItemWithoutSn } from './../contract/ItemWithoutSn';
import { CreateItemWithoutSNActionTypes } from './../action/createItemWithoutSNAction'

const inputInit = {

        model: '',
        // bỏ cái này là -1 vì nếu để 0, backend vẫn nhận đây là valid id của model
        modelId: -1,
        supplier: '',
        supplierId: -1,
        quantity: 1,
        whlocation: '',
        whlocationId: -1,
        note: '',
        conditionId: -1,
        condition: ''

}

const init: ItemWithoutSn = {
    input: inputInit
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
                input: inputInit
            }
        default:
            return state

    }
}

