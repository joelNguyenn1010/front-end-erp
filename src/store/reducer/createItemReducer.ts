import { Item } from './../contract/Item';
import { ItemActionTypes } from '../types/item/item.types';





export interface CreateItem {
    items: Array<Item>
}

const init: CreateItem = {
    items: []
}

export const createItemReducer = (state: CreateItem = init, action: any) => {
    const oldState: Array<Item> = state.items.concat()
    switch (action.type) {

        case ItemActionTypes.CHANGE_VALUE:

            let oldInput: any = Object.assign({}, oldState[action.payload.index])
      
            oldInput[action.payload.key] = action.payload.value

            oldState[action.payload.index] = oldInput
            return {
                ...state,
                items: oldState
            }

        case ItemActionTypes.DELETE_ITEM:
            oldState.splice(action.payload.index, 1)
            return {
                ...state,
                items: oldState
            }
       


        case ItemActionTypes.CREATESN_DB:
            oldState[action.payload.index].noModelInDB = action.payload.noModelInDB
            oldState[action.payload.index].ciscoModel = action.payload.ciscoModel
            return {
                ...state,
                items: oldState
            }
        case ItemActionTypes.LOADING:

            oldState[action.payload.index].isFetchingModel = action.payload.loading

            return {
                ...state,
                items: oldState
            }

        
        case ItemActionTypes.ADD_SN:

            const newItem: Item = {
                serialNumber: action.payload,
                model: '',
                condition: 'USEDB',
                conditionId: 2,
                supplier: '',
                supplierId: 0,
                note: '',
                isFetchingModel: true,
                noModelInDB: true,
                ciscoModel: '',
                quantity: 1,
                whlocation: 'sydney',
                whlocationId: 1,
            }

            oldState.push(newItem)
            return {
                ...state,
                items: oldState
            }

        case ItemActionTypes.ADD_MODEL:
            return {
                ...state,
                items: action.payload
            }
        case ItemActionTypes.CLEAR_ITEMS_SN:
            return {
                ...state,
                items: []
            }

        default:
            return state;
    }

}

