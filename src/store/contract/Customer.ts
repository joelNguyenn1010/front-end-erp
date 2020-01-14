import { ShippingAccount } from './ShippingAccount';
import { CreateAddress } from './Address'
import {Email} from './Email'
import {Ecommercial} from './Ecommercial'

export interface Customer {
    id: string,
    organisation: string,
    contactType: string,
    priceLevel: string,
    ecommercialId?: [Ecommercial],
    salutation?: string,
    firstName: string,
    lastName: string,
    position: string,
    phoneNumber: string,
    optionPaypal?: string,
    emails: [Email],
    address?: [CreateAddress],
    noteForShipping?: string,
    noteForReceiving?: string,
    shipping?: [ShippingAccount],
    currency?: string,
    ipsPaymentTerm?: string,
    cusPaymentTerm?: string,
    bankName?: string,
    bankBranch?: string,
    bankBsb?: number,
    bankAccount?: number,
    gstNumber?: number,
    ipsWarrantyPolicy?: string,
    cusWarrantyPolicy?: string
    note?: string

}

export interface CreateCustomer {
    input: {
        organisation?: string,
        organisationId: number,
        contactType: string,
        priceLevel: string,
        salutation?: string,
        firstName: string,
        lastName?: string,
        position?: string,
        phoneNumber?: string,
        optionPaypal?: string,
        country: string,
        countryId: number,
        postcode: string,
        postcodeId: number,
        city?: string,
        state?: string,
        emails: Array<Email>,
        streetNumber?: string,
        streetName?: string,
        noteForShipping?: string,
        noteForReceiving?: string,
        shipping?: Array<ShippingAccount>,
        currency?: string,
        currencyId: number,
        ecommercial?: Array<Ecommercial>,
        ipsPaymentTerm?: string,
        ipsPaymentTermId: number,
        cusPaymentTerm?: string,
        cusPaymentTermId: number,
        accountName?:string,
        bankName?: string,
        bankBranch?: string,
        bankBsb?: string,
        bankAccount?: string,
        gstNumber?: string,
        ipsWarrantyPolicy?: string,
        cusWarrantyPolicy?: string,
        note?: string,
    },
    
    
}

