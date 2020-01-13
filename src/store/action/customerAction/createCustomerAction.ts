


export const changeCustomerValue = ( key: string, value: any) => {
    return {
        type: 'CUSTOMER:CHANGE_VALUE',
        payload:{
            
            key,
            value
        }
    }
}

export const changeValue = (index: number, key: string, value: any) => {
    return {
        type: 'CUSTOMER:CHANGE_VALUE_ECOMMERCIAL',
        payload:{
            index,
            key,
            value
        }
    }
}

export const submitCustomerAction = () => {
    return {
        
    }
}



export const addEmail = (email: string) => {
    return{
        type:'CUSTOMER:ADD_EMAIL',
        payload: email
    }
}

export const deleteEmail = (index: number) => {
    return {
        type:'CUSTOMER:DELETE_EMAIL',
        payload: index
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


