import { CustomerActionTypes } from './../../types/customer/customer.types';
import { message } from 'antd';
import { ADD_CUS_REPRESENTATIVE, ADD_CUS_REPRESENTATIVE_EMAIL, ADD_SUPPLIER_ADDRESS } from './../../../graphql/mutation/supplierMutation';
import { AppState } from "../../../store"
import client from "../../../graphql"



//Change value 
export const changeCustomerValue = ( key: string, value: any) => {
    return {
        type: CustomerActionTypes.CHANGE_VALUE,
        payload:{
            key,
            value
        }
    }
}

export const changeValueEcommercial = (index: number, key: string, value: any) => {
    return {
        type: CustomerActionTypes.CHANGE_VALUE_ECOMMERCIAL,
        payload:{
            index,
            key,
            value
        }
    }
}

export const changeValueShipping = (index: number, key: string, value: any) => {
    return{
        type: CustomerActionTypes.CHANGE_VALUE_SHIPPING,
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
        type:CustomerActionTypes.ADD_EMAIL,
        payload: email
    }
}

export const modifyEmail = (key: any, email: string) => {
    return {
        type: CustomerActionTypes.CUSTOMER_MODIFY_EMAIL,
        payload: {
            key,
            email
        }
    }
}




export const addEcommercial = ( id: string, name: string) => {
    return {
        type: CustomerActionTypes.ADD_ECOMMERCIAL,
        payload: {
            id,
            name
        }
    }
}

export const addShippingAccount = (courierName: string, accountShipping: string) => {
    return{
        type: CustomerActionTypes.ADD_SHIPPINGACCOUNT,
        payload: {
            courierName,
            accountShipping
        }
    }
}


//delete data from redux
export const deleteData = (index: number) => {
    return {
        type: CustomerActionTypes.DELETE_DATA,
        payload: index
    }
}

//submit data to redux
export const submitRepresentativeAction = (props: any) => {
    return (dispatch: any, getState: () => AppState) => {
        const input = getState().CustomerReducer.input
        // console.log(input)

        const newRepresentative = {
            salutation: input.salutation,
            position: input.position,
            fullName: input.fullName,
            phoneNumber: input.phoneNumber,
            supplierId: props,
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

export const submitAddressAction = (props: any) => {
    return (dispatch: any, getState : () => AppState) => {
        
        const input = getState().CustomerReducer.input
        const newAddress = {
            supplierId: props,
            country: input.country,
            postcode: input.postcode,
            city: input.city,
            state: input.state,
            street: input.streetName,
            type: input.type
        }
        client.mutate({mutation: ADD_SUPPLIER_ADDRESS, variables: {...newAddress}})
        .then(res => {
            message.success("New address created")
        })
        .catch(err => {
            message.error("Cant create new address, please try again")
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




