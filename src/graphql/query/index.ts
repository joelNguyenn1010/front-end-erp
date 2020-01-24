import { gql } from 'apollo-boost'

export const MANUFACTURE_QUERY = gql`
query($name: String!) {
    manufactor(page: 1, limit: 10, name: $name) {
      data {
        id
        name
      }
    }
  }
`

export const GET_MODEL_QUERY = gql`
  query($limit: Int!, $page: Int!, $name: String!) {
    model(limit: $limit, page: $page, name: $name) {
        data{
          au_condition {
            name
            QTY
          }
          
          us_condition {
            name
            QTY
          }

          id
          name
          hasSerial
          note
          manufactors{
            name
          }
          items{
            conditions{
              id
              name
            }
            quantity
          }
        }
        total
    }
  }

`

export const GET_ITEM_QUERY = gql`
query($limit: Int!, $page: Int!, $serialNumber: String!, $stockStatus: Boolean){
  findItemBySerial(limit: $limit, page: $page, serialNumber: $serialNumber, stockStatus: $stockStatus){
    data{
      id
      conditionId
      whlocations {
        name
      }
      models {
        name
      }
      location
      serialNumber
      price
      note
      stockStatus
      suppliers{
        id
        name
      }
      conditions{
        id
        name
      }
    }
 
    total
  }
}
`

// export const GET_CUSTOMER_DETAIL = gql`
// query{
//   customer(organization, contactType, pricingLevel, ecommercialId, salutation, firstName, lastName, position, phoneNumber, email, moreEmail
//     optionPaypal, postalCountry, postalPostcode, postalSuburb, postalState, postalAddressNo, postalAddressStreet, noteForShipping, noteForReceiving,
//     currency, ipsPaymentTerm, customerPaymentTerm, bankName, bankBranch, bankBsb, bankAccount, gst/vatNumber, ipsWarrantyPolicies, customerWarrantyPolicies,
//     note, saleOrders, purchasesOrder  ){
//       data{

//       }
//   }
// }
// `

export const CATEGORY_QUERY = gql`
query($name: String!) {
    category(page: 1, limit: 10, name: $name) {
      data {
        id
        name
      }
    }
  }
`

export const GET_SUPPLIER_QUERY = gql`
query($name: String!, $id: Int, $limit: Int!, $page: Int!){
  supplier(name: $name, id: $id, limit: $limit, page: $page){
    data{
      id
      name
      contactType
      pricingLevel
    }
    total
  }

}
`

export const FIND_SUPPLIER_WITH_ID = gql`
  query($id: Int!) {
    findSupplier(id: $id) {
      id
     contactType
     pricingLevel
     name
     ipsTerm
     customerTerm
     VAT
    }
  }
`

export const GET_CONDITION_QUERY = gql`
query($name: String!){
  condition(limit: 6, page:1, name: $name){
    data{
      id
      name
    }
  }
}
`


export const FIND_MODEL_WITH_NAME = gql`
query($name: String!) {
  findModelWithName(name: $name) {
    name
    id
  }
}
`


export const QUERY_WHLOCATION = gql`
query($name: String!) {
  whlocation(name: $name, limit: 10, page: 1) {
   data {
    name
    id
   }
  }
}
`

export const GET_WHLOCATION_QUERY = gql`
  query($name: String!){
    whlocation(name: $name, limit: 5, page: 1){
      data{
        id
      name
      }
      
    }
  }
`

export const GET_REPRESENTATIVE_QUERY = gql`
  query($supplierId: Int!, $limit: Int!, $page: Int!){
    representative(supplierId: $supplierId, limit: $limit, page: $page){
      data{
        id
        salutation
        fullName
        position
        phoneNumber
        representativeemails{
          email
        }
    }
    
    }
  }
`

export const GET_ADDRESS_QUERY = gql`
  query($supplierId: Int!, $limit: Int!, $page: Int!){
    supplierAddresses(supplierId: $supplierId, limit: $limit, page: $page){
      data{
        id
        supplierId
        country
        postcode
        city
        state
        type
        street
      }
    }
  }
`

export const QUERY_SUPPLIER_PAYMENT = gql`
query($limit: Int!, $page: Int!, $supplierId: Int!) {
  supplierPayments(limit: $limit, page: $page, supplierId: $supplierId) {
    data{
      currency
      bankName
      bankBranch
      id
      BSB
      accountName
      accountNumber
      paypal
    }
  }
}
`