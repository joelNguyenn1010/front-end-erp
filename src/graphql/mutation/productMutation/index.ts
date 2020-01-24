import { gql } from "apollo-boost";


export const ADD_ITEM = gql`
  mutation($whlocationId: Int!, $supplierId: Int!, $modelId: Int!, $serialNumber: String, $price: Float, $note: String, $quantity: Int!, $conditionId: Int!){
    createNewItem(whlocationId: $whlocationId, supplierId: $supplierId, modelId: $modelId, serialNumber: $serialNumber, price: $price, note: $note, quantity: $quantity, conditionId: $conditionId){
      id
      conditionId
      whlocations{
        id
        name
      }
      suppliers{
        id
        name
      }
      models{
        id
        name
      }
      serialNumber
      price
      note
      quantity
      conditions{
        id
        name
      }

    }
  }
`


export const ADD_WHLOCATION = gql`
  mutation($name: String!){
    createNewWHLocation(name: $name){
      id 
      name
    }
  }
`

export const CREATE_NEW_WHLOCATION = gql`
mutation($name: String!) {
  createNewWHLocation(name: $name) {
      id
      name
  }
}
`



export const UPDATE_ITEM_NOTE = gql`
  mutation($id: Int!, $note: String){
    updateItem(id: $id, note: $note){
      id
      note
    }
  }
`



export const UPDATE_ITEM_CONDITION = gql`
  mutation($id: Int!, $conditionId: Int, ){
    updateItem(id: $id, conditionId: $conditionId, ){
      
      conditionId
      conditions{
        id
        name
      }

    }
  }
`

export const UPDATE_ITEM_STOCKSTATUS = gql`
  mutation($id: Int!, $stockStatus: Boolean){
    updateItem(id: $id, stockStatus: $stockStatus){
      stockStatus
    }
  }
`

export const UPDATE_ITEM_SUPPLIER = gql`
  mutation($id: Int!, $supplierId: Int){
    updateItem(id: $id, supplierId: $supplierId){
      
      suppliers{
        id
        name
      }
    }
  }
`

export const UPDATE_ITEM_WHLOCATION = gql`
  mutation($id: Int!, $whlocationId: Int){
    updateItem(id: $id, whlocationId: $whlocationId){
      whlocations{
        id
        name
      }
    }
  }
`

export const DELETE_ITEM = gql`
  mutation($id: Int!){
    deleteItemWithId(id: $id){
      id
    }
  }
`