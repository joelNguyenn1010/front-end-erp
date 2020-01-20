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
export interface Suppliers {
    id: number,
    name: string,
    contactType: ContactType,
    pricingLevel: PricingLevel,
    ipsPolicy?: string,
    warrantyPolicy?: string,

    representatives?: Array<Representative>
}

export interface Representative {
    id: number,
    supplierId: number,
    salutation: Salutation,
    fullName: string,
    position: string,
    phoneNumber: number
}