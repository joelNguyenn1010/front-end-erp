import { gql } from "apollo-boost";


export const ADD_SUPPLIER = gql`
mutation($name: String!) {
  createNewSupplier(name: $name){
    id
    name
  }
}
`

export const CREATE_NEW_SUPPLIER_WITH_INFO = gql`
  mutation($name: String!, $contactType: ContactTypeSupplier, $pricingLevel: PricingLevel) {
    createNewSupplier(name: $name, contactType: $contactType, pricingLevel: $pricingLevel){
      id
    }
  }
`

export const ADD_CUS_REPRESENTATIVE = gql`
mutation($supplierId: Int!, $salutation: SalutationEnum, $fullName: String!, $position: String, $phoneNumber: String, $emails: [EmailInput]  ){
  createRepresentative(supplierId: $supplierId, salutation: $salutation, fullName: $fullName, position: $position, phoneNumber: $phoneNumber, emails: $emails){
    id
    supplierId
    salutation
    fullName
    position
    phoneNumber
 }   
}
`

export const ADD_CUS_REPRESENTATIVE_EMAIL = gql`
mutation($email: String){
  createRepresentativeEmail(email: $email){
    id
    email
  }
}
`

export const ADD_SUPPLIER_ADDRESS = gql`
mutation($supplierId: Int!, $country: String, $postcode: String, $city: String, $state: String, $street: String, $type: SupplierAddressTypeEnum){
  createSupplierAddress(supplierId: $supplierId, country: $country, postcode: $postcode, city: $city, state: $state, street: $street, type: $type){
    id
    supplierId
    country
    postcode
    city
    state
    street
    type
  }
}
`

export const ADD_ECOMMERCIAL_ID = gql`
    mutation($supplierId: Int!, $identify: String, $name: String){
    createEcommercialSupplier(supplierId: $supplierId, identify: $identify, name: $name){
    id
    supplierId
    identify
    name
    }
    }
`

export const ADD_EMAIL_SUPPLIER = gql`
    mutation( $email: String!, $supplierId: Int!, $typeemail: String){
        createSupplierEmail( email: $email, supplierId: $supplierId, typeemail: $typeemail){
            supplierId
            email
            typeemail
        }
    }
`


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


export const UPDATE_CUSTOMER_ADDRESS = gql`
  mutation($id: Int!, $state: String, $street: String, $city: String, $postcode: String, $type: SupplierAddressTypeEnum){
    updateAddress(id: $id, state: $state, street: $street, city: $city, type: $type, postcode: $postcode){
      id
      supplierId
      street
      city
      state
      type
      postcode  
    }
  }
`

export const UPDATE_ADDRESS_COUNTRY = gql`
  mutation($id: Int!, $country: String){
    updateAddress(id: $id, country: $country){
      id
      supplierId
      country
    }
  }
`

export const UPDATE_REPRESENTATIVE_EMAIL = gql`
    mutation($representativeId: Int!, $emails: [EmailWithIdInput]){
      updateRepresentativeEmail(representativeId: $representativeId, emails: $emails){
        id
      }
    }
`

export const UPDATE_EMAIL_SUPPLIER = gql`
    mutation($id: Int!, $email: String!, $typeemail: String){
    updateSupplierEmail(id: $id, email: $email, typeemail: $typeemail){
        id
        supplierId
        email
        typeemail
     }
     }
`

export const DELETE_REPRESENTATIVE = gql`
  mutation($id: Int!){
    deleteRepresentative(id: $id){
      id
    
    }
  }
`

export const DELETE_ADDRESS = gql`
  mutation($id: Int!){
    deleteSupplierAddress(id: $id){
      id
    }
  }
`

export const DELETE_ECOMMERCIAL_ID= gql`
    mutation($id: Int!){
        deleteEcommercialSupplier(id: $id){
            id
            supplierId
            identify
            name
        }
    }
`

export const DELETE_EMAIL_SUPPLIER = gql`
    mutation($id: Int!){
    deleteSupplierEmail(id: $id){
        id
        email
        supplierId
        typeemail
      }
      
    }
`




export const UPDATE_REPRESENTATIVE = gql`
  mutation($id: Int!, $salutation: SalutationEnum, $fullName: String, $position: String, $phoneNumber: String) {
    updateRepresentative(id: $id, salutation: $salutation, fullName: $fullName, position: $position, phoneNumber: $phoneNumber) {
      id
      fullName
      position
      salutation
      phoneNumber
    }
  }
`



export const CREATE_SUPPLIER_PAYMENT = gql`
  mutation($supplierId: Int!,$currency: String!, $bankName: String!, $bankBranch: String!, $BSB: String!, $accountName: String!, $accountNumber: String!, $paypal: String) {
    createSupplierPayment(supplierId: $supplierId, currency: $currency, bankName: $bankName, bankBranch: $bankBranch, BSB: $BSB, accountName: $accountName, accountNumber: $accountNumber, paypal: $paypal) {
      id
    }
  }
`



export const UPDATE_SUPPLIER_PAYMENT = gql`
  mutation($id: Int!,$currency: String!, $bankName: String!, $bankBranch: String!, $BSB: String!, $accountName: String!, $accountNumber: String!, $paypal: String) {
    updateSupplierPayment(id: $id, currency: $currency, bankName: $bankName, bankBranch: $bankBranch, BSB: $BSB, accountName: $accountName, accountNumber: $accountNumber, paypal: $paypal) {
      id
      currency
      bankName
      bankBranch
      BSB
      accountName
      accountNumber
      paypal
    }
  }
`

export const UPDATE_ECOMMERCIAL_ID = gql`
    mutation($id: Int!, $identify: String, $name: String) {
        updateEcommercialSupplier(id: $id, identify: $identify, name: $name) {
            id
            identify
            name
        }
    }
`

export const ADD_COURIER = gql`
    mutation($supplierId: Int!, $courier: String!, $shippingAccount: String){
        createCourier(supplierId: $supplierId, courier: $courier, shippingAccount: $shippingAccount){
            id
            supplierId
            courier
            shippingAccount
        }
    }
`

export const UPDATE_COURIER = gql`
    mutation($id: Int!, $courier: String!, $shippingAccount: String){
        updateCourier(id: $id, courier: $courier, shippingAccount: $shippingAccount){
            id
            supplierId
            courier
            shippingAccount
        }
    }
`

export const DELETE_COURIER = gql`
    mutation($id: Int!){
        deleteCourier(id: $id){
            id
            supplierId
            courier
            shippingAccount
        }
    }
`
