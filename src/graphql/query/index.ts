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
          id
          name
          hasSerial
          shortDescription
          longDescription
          manufactors{
            name
          }
        }
        total
    }
  }

`

export const GET_ITEM_QUERY = gql`
query($limit: Int!, $page: Int!, $serialNumber: String!){
  findItemBySerial(limit: $limit, page: $page, serialNumber: $serialNumber){
    data{
      key: id
      conditionId
      warehouse
      supplierId
      serialNumber
      price
      note
      conditionId
    }
    total
  }
}
`

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
  supplier(limit: 10, page: 1, name: $name){
    data{
      id
      name
    }
  }
}
`

