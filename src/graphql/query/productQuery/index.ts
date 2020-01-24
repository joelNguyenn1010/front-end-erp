import { gql } from 'apollo-boost'

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