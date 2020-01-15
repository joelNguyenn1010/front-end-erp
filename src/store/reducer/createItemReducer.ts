import { Item } from './../contract/Item';





export interface CreateItem {
    items: Array<Item>
}

const init: CreateItem = {
    items: []
}

export const createItemReducer = (state: CreateItem = init, action: any) => {
    const oldState: Array<Item> = state.items.concat()
    switch (action.type) {

        case 'ITEM:CHANGE:VALUE':

            let oldInput: any = Object.assign({}, oldState[action.payload.index])
      
            oldInput[action.payload.key] = action.payload.value

            oldState[action.payload.index] = oldInput
            return {
                ...state,
                items: oldState
            }

        case 'ITEM:DELETE:ITEM':

            oldState.splice(action.payload.index, 1)
            return {
                ...state,
                items: oldState
            }
       


        case 'ITEM:CREATESN:DB':
            oldState[action.payload.index].noModelInDB = action.payload.noModelInDB
            oldState[action.payload.index].ciscoModel = action.payload.ciscoModel
            return {
                ...state,
                items: oldState
            }
        case 'ITEM:LOADING':

            oldState[action.payload.index].isFetchingModel = action.payload.loading

            return {
                ...state,
                items: oldState
            }

        
        case 'ADD_SN':

            const newItem: Item = {
                serialNumber: action.payload,
                model: '',
                condition: 'USEDB',
                conditionId: 4,
                supplier: '',
                supplierId: 0,
                note: '',
                isFetchingModel: true,
                noModelInDB: true,
                ciscoModel: '',
                quantity: 1,
                whlocation: '',
                whlocationId: 1,
            }

            oldState.push(newItem)
            return {
                ...state,
                items: oldState
            }

        case 'ADD_MODEL':
            return {
                ...state,
                items: action.payload
            }
        case "CLEAR:ITEMS:SN":
            return {
                ...state,
                items: []
            }

        default:
            return state;
    }

}

