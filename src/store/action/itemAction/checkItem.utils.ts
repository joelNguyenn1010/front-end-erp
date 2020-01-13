
export const checkItemInDB = (listItems: any, newItemToAdd: any) => {
    const existingItem = listItems.find( (listItem : any) => listItem.serialNumber === newItemToAdd.serialNumber)

    if(existingItem){
        return listItems.map((listItem: any ) => 
            listItem.serialNumber === newItemToAdd.serialNumber
                ?{...listItem, quantity: listItem.quantity + 1}
                : listItem
        )
    }
    return [...listItems, { ...newItemToAdd, quantity: 1 }];


}

