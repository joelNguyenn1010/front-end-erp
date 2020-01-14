import { Ecommercial } from './../contract/Ecommercial';
import { Customer } from './../contract/Customer';
import { Email } from '../contract/Email'
import { CreateCustomer } from '../contract/Customer'



const init: CreateCustomer = {
    input: {
        organisation: '',
        organisationId: 0,
        contactType: '',
        contactTypeId: 0,
        priceLevel: '5',
        priceLevelId: 0,
        salutation: '',
        salutationId: 0,
        firstName: '',
        lastName: '',
        position: '',
        phoneNumber: '',
        optionPaypal: '',
        country: 'Australia',
        countryId: 0,
        postcode: '',
        postcodeId: 0,
        city: '',
        state: '',
        emails: [],
        streetNumber: '',
        streetName: '',
        noteForShipping: '',
        noteForReceiving: '',
        courierName: '',
        account: '',
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

export const CreateCustomerReducer = (state: CreateCustomer = init, action: any) => {
    const oldState: CreateCustomer = Object.assign({}, state)
    // const newState : Array<Customer> = state.input.ecommercial.concat()
    switch (action.type) {

        case 'CUSTOMER:CHANGE_VALUE':
            let oldInput: any = Object.assign({}, state.input)

            oldInput[action.payload.key] = action.payload.value

            return {
                ...state,
                input: oldInput
            }

        case 'CUSTOMER:CHANGE_VALUE_ECOMMERCIAL':
           

            let oldEcommerce: Array<any> = oldState.input.ecommercial.concat()

            let objEcommerce = Object.assign({}, oldEcommerce[action.payload.index])
            objEcommerce[action.payload.key] = action.payload.value

            oldEcommerce[action.payload.index] = objEcommerce
            oldState.input.ecommercial = oldEcommerce

            return {
                ...state,
                ...oldState
            }

        case 'CUSTOMER:ADD_EMAIL':

            const newEmailState: Email = {

                name: action.payload
            }
            oldState.input.emails.push(newEmailState)
            return {
                ...state,
                ...oldState
            }

        case 'CUSTOMER:DELETE_EMAIL':
            let a: any = Object.assign({}, state.input.emails)
            return {
                ...state,
                ...oldState
            }


        case 'CUSTOMER:ADD_ECOMMERCIAL':
            const newEcommercial: Ecommercial = {
                id: action.payload.id,
                name: action.payload.name
            }
            oldState.input.ecommercial.push(newEcommercial)
            return {
                ...state,
                ...oldState
            }



        case "CLEAR":
            return {
                ...state,
                input: {
                    organisation: '',
                    organisationId: 0,
                    contactType: '',
                    contactTypeId: 0,
                    priceLevel: '5',
                    priceLevelId: 0,
                    salutation: '',
                    salutationId: 0,
                    firstName: '',
                    lastName: '',
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