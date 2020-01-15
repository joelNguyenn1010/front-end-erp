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
query($name: String!){
  supplier(limit: 5, page: 1, name: $name){
    data{
      id
      name
    }
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

export const GET_WHLOCATION_QUERY = gql`
  query($name: String!){
    whlocation(name: $name, limit: 10, page: 1){
      data{
        id
      name
      }
      
    }
  }
`