import { gql } from "apollo-boost";

export const FIND_WARRENTY_SUPPLIER = gql`
    query($id: Int) {
        findSupplier(id: $id) {
            id
            ipsPolicy
            warrantyPolicy
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
          id
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

export const GET_ECOMMERCIALID_QUERY = gql`
 query($limit: Int!, $page: Int!, $supplierId: Int!) {
  ecommercialId(supplierId: $supplierId, limit: $limit, page: $page){
    data {
      id
      supplierId
      identify
      name
    }
  }
}
`

export const GET_EMAIL_SUPPLIER = gql`
    query($limit: Int!, $page: Int!, $supplierId: Int!){
        supplierEmail(limit: $limit, page: $page, supplierId: $supplierId){
            data{
                id
                supplierId
                email
                typeemail
            }
        }
    }
`