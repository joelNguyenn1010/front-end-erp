import { ShippingAccount } from './ShippingAccount';
import { CreateAddress } from './Address'
import {Email} from './Email'
import {Ecommercial} from './Ecommercial'

export enum ContactType {
    Gov = "Gov",
    Corp = "Corp",
    Broker = "Broker",
    Individual = "Individual"
}

export enum PricingLevel {
    Level1= "1",
    Level2 = "2",
    Level3= "3",
    Level4 = "4",
    Level5 = "5"
}

export enum Salutation {
    Mr='Mr',
    Ms='Ms',
    Mrs='Mrs',
    Other='Other'
}

export enum SupplierAddressTypeEnum {
    postal='postal',
    shipping='shipping'
}

export interface Customer {
    id: string,
    supplier: string,
    contactType: ContactType,
    priceLevel: PricingLevel,
    ecommercialId?: [Ecommercial],
    salutation?: Salutation,
    firstName: string,
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
        supplier?: string,
        supplierId: number,
        contactType: ContactType,
        priceLevel: PricingLevel,
        salutation?: Salutation,
        fullName?: string,
        position?: string,
        phoneNumber?: string,
        optionPaypal?: string,
        country: string,
        countryId: number,
        postcode: string,
        postcodeId: number,
        type: SupplierAddressTypeEnum,
        city?: string,
        state?: string,
        streetName?: string,
        emails: Array<Email>,
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

