import { message } from 'antd';
import { ADD_CUS_REPRESENTATIVE, ADD_CUS_REPRESENTATIVE_EMAIL } from './../../../graphql/mutation/index';
import { AppState } from "../../../store"
import client from "../../../graphql"


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
export const submitRepresentativeAction = () => {
    return (dispatch: any, getState: () => AppState) => {
        const input = getState().CustomerReducer.input
        // console.log(input)

        const newRepresentative = {
            salutation: input.salutation,
            position: input.position,
            fullName: input.fullName,
            phoneNumber: input.phoneNumber,
            supplierId: input.supplierId,
            emails: input.emails,
            
        }

        client.mutate({mutation: ADD_CUS_REPRESENTATIVE, variables: {...newRepresentative}})
        .then(res=> {
            message.success("New Representative created")
        })
        .catch(err=>{
            message.error("Cant create new representative, please try again")
        })
    }
}

export const submitRepresentativeEmail = () => {
    return (dispatch: any, getState: () => AppState) => {
        const input = getState().CustomerReducer.input

        const newRepresentativeEmail = {
            email: input.emails,
        }
        client.mutate({mutation: ADD_CUS_REPRESENTATIVE_EMAIL, variables: {...newRepresentativeEmail}})
        .then(res => {
            message.success("New email created!")
        })
        .catch(err => {
            message.error("Cant create email, please try again")
        })
    }
}




