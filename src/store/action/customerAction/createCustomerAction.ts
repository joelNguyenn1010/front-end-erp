

//Change value 
export const changeCustomerValue = ( key: string, value: any) => {
    return {
        type: 'CUSTOMER:CHANGE_VALUE',
        payload:{
            key,
            value
        }
    }
}

export const changeValueEcommercial = (index: number, key: string, value: any) => {
    return {
        type: 'CUSTOMER:CHANGE_VALUE_ECOMMERCIAL',
        payload:{
            index,
            key,
            value
        }
    }
}

export const changeValueShipping = (index: number, key: string, value: any) => {
    return{
        type: 'CUSTOMER:CHANGE_VALUE_SHIPPING',
        payload: {
            index,
            key,
            value
        }
    }
}




//add data to redux
export const addEmail = (email: string) => {
    return{
        type:'CUSTOMER:ADD_EMAIL',
        payload: email
    }
}



export const addEcommercial = ( id: string, name: string) => {
    return {
        type:'CUSTOMER:ADD_ECOMMERCIAL',
        payload: {
            id,
            name
        }
    }
}

export const addShippingAccount = (courierName: string, accountShipping: string) => {
    return{
        type: 'CUSTOMER:ADD_SHIPPINGACCOUNT',
        payload: {
            courierName,
            accountShipping
        }
    }
}


//delete data from redux
export const deleteData = (index: number) => {
    return {
        type:'CUSTOMER:DELETE_DATA',
        payload: index
    }
}

//submit data to redux
export const submitCustomerAction = () => {
    return {
        
    }
}




