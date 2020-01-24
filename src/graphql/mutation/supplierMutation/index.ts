import { gql } from "apollo-boost";

export const DELETE_SUPPLIER = gql`
    mutation($id: Int!) {
        deleteSupplier(id: $id) {
            id
        }
    }
`

export const UPDATE_SUPPLIER = gql
`
    mutation($id: Int!, 
        $name: String, 
        $contactType: ContactTypeSupplier, 
        $pricingLevel: PricingLevel,
        $ipsTerm: String,
        $customerTerm: String
        $VAT: String
        $warrantyPolicy: String,
        $ipsPolicy: String
        ) {
        updateSupplier(id: $id, 
            name: $name, 
            contactType: $contactType, 
            pricingLevel: $pricingLevel,
            ipsTerm: $ipsTerm,
            customerTerm: $customerTerm,
            warrantyPolicy: $warrantyPolicy,
            ipsPolicy: $ipsPolicy
            VAT: $VAT) {
            id
            name
            contactType
            pricingLevel
            customerTerm
            ipsTerm
            VAT
            ipsPolicy
            warrantyPolicy
        }
    }
`