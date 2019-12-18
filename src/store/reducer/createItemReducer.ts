
export interface Item {
    sn?: string,
    model?: {
        id: number,
        name: string
    },
    conditionId?: number,
    supplierId?: number,
    note?: string

}

export interface CreateItem {
    items: Array<Item>
}

const init: CreateItem = {
    items: []
}

export const createItemReducer = (state: CreateItem = init, action: any) => {
    switch(action.type) {
        case 'ADD_SN':

            const oldState: Array<Item> = state.items.concat()

            const newItem: Item = {
                sn: action.payload
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

