
import { ShippingAccount } from '../contract/ShippingAccount';
import { Ecommercial } from '../contract/Ecommercial';
import { Email } from '../contract/Email'
import { CreateCustomer, ContactType, PricingLevel, Salutation, SupplierAddressTypeEnum } from '../contract/Customer'
import { CustomerActionTypes } from '../types/customer/customer.types';



const init: CreateCustomer = {
    input: {
        supplier: '',
        supplierId: 2,
        contactType: ContactType.Individual,
        priceLevel: PricingLevel.Level5,
        salutation: Salutation.Mr,
        fullName: '',
        position: '',
        phoneNumber: '',
        optionPaypal: '',
        country: 'Australia',
        countryId: 0,
        postcode: '',
        postcodeId: 0,
        type: SupplierAddressTypeEnum.postal,
        city: '',
        state: '',
        emails: [],
        streetName: '',
        noteForShipping: '',
        noteForReceiving: '',
        shipping:[],
        currency: '',
        currencyId: 0,
        ecommercial: [],
        ipsPaymentTerm: '',
        ipsPaymentTermId: 0,
        cusPaymentTerm: '',
        cusPaymentTermId: 0,
        accountName: '',
        bankName: '',
        bankBranch: '',
        bankBsb: '',
        bankAccount: '',
        gstNumber: '',
        ipsWarrantyPolicy: '',
        cusWarrantyPolicy: '',
        note: '',
    },

    


}

export const CustomerReducer = (state: CreateCustomer = init, action: any) => {
    const oldState: CreateCustomer = Object.assign({}, state)
    switch (action.type) {

        case CustomerActionTypes.CHANGE_VALUE:
            let oldInput: any = Object.assign({}, state.input)

            oldInput[action.payload.key] = action.payload.value

            return {
                ...state,
                input: oldInput
            }

        case CustomerActionTypes.CHANGE_VALUE_ECOMMERCIAL:
           
            let oldEcommerce: Array<any> = oldState.input.ecommercial ? oldState.input.ecommercial : []

            let newEcommerce = Object.assign({}, oldEcommerce[action.payload.index])
            newEcommerce[action.payload.key] = action.payload.value

            oldEcommerce[action.payload.index] = newEcommerce
            oldState.input.ecommercial = oldEcommerce

            return {
                ...state,
                ...oldState
            }

        case CustomerActionTypes.CHANGE_VALUE_SHIPPING:
            let oldStateShipping: Array<any> = oldState.input.shipping ? oldState.input.shipping : []

            let newStateShipping = Object.assign({}, oldStateShipping[action.payload.index])
            newStateShipping[action.payload.key] = action.payload.value
            oldStateShipping[action.payload.index] = newStateShipping
            oldState.input.shipping = oldStateShipping

            return{
                ...state,
                ...oldState
            }

        case CustomerActionTypes.ADD_EMAIL:

            const newEmailState: Email = {

                name: action.payload
            }
            oldState.input.emails.push(newEmailState)
            return {
                ...state,
                ...oldState
            }

        case CustomerActionTypes.DELETE_DATA:
            let a: any = Object.assign({}, state.input.emails)
            return {
                ...state,
                ...oldState
            }


        case CustomerActionTypes.ADD_ECOMMERCIAL:
            const newEcommercial: Ecommercial = {
                id: action.payload.id,
                name: action.payload.name
            }
            let oldEcomme: Array<any> = oldState.input.ecommercial ? oldState.input.ecommercial : []

            oldEcomme.push(newEcommercial)
            return {
                ...state,
                ...oldState
            }

        case CustomerActionTypes.ADD_SHIPPINGACCOUNT:
            const newShippingAccount: ShippingAccount = {
                courierName: action.payload.courierName,
                accountShipping: action.payload.accountShipping
            }
            oldState.input.shipping?.push(newShippingAccount)
            return{
                ...state,
                ...oldState
            }
        
        case CustomerActionTypes.CLEAR:
            return {
                ...state,
                input: {
                    supplier: '',
                    supplierId: 1,
                    contactType: 'individual',
                    priceLevel: '5',
                    salutation: 'mr',
                    fullName: '',
                    position: '',
                    phoneNumber: '',
                    optionPaypal: '',
                    country: 'Australia',
                    countryId: 0,
                    postcode: '',
                    postcodeId: 0,
                    city: '',
                    state: '',
                    streetNumber: '',
                    streetName: '',
                    noteForShipping: '',
                    noteForReceiving: '',
                    courierName: '',
                    account: '',
                    currency: '',
                    currencyId: 0,
                    ipsPaymentTerm: '',
                    ipsPaymentTermId: 0,
                    cusPaymentTerm: '',
                    cusPaymentTermId: 0,
                    accountName: '',
                    bankName: '',
                    bankBranch: 0,
                    bankBsb: '',
                    bankAccount: '',
                    gstNumber: '',
                    ipsWarrantyPolicy: '',
                    cusWarrantyPolicy: '',
                    note: '',
                }
            }
        default:
            return state;
    }
}