
export interface Item {
    sn: string,
    model: string,
    modelId: number,
    condition: string,
    conditionId: number,
    supplier: string,
    supplierId: number,
    note: string,
    isFetchingModel: boolean,
    noModelInDB: boolean,

}

export interface CreateItem {
    items: Array<Item>
}

const init: CreateItem = {
    items: []
}

export const createItemReducer = (state: CreateItem = init, action: any) => {
    const oldState: Array<Item> = state.items.concat()
    switch (action.type) {


        case 'ITEM:CREATESN:DB':
            oldState[action.payload.index].noModelInDB = action.payload.noModelInDB
            oldState[action.payload.index].model = action.payload.model
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
                sn: action.payload,
                model: '',
                modelId: 0,
                condition: '',
                conditionId: 0,
                supplier: '',
                supplierId: 0,
                note: '',
                isFetchingModel: true,
                noModelInDB: false
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
        default:
            return state;
    }

}

