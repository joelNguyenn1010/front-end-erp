import { gql } from 'apollo-boost'

export const ADD_MANUFACTURE = gql`
mutation($name: String!) {
    createNewManufacture(name: $name) {
      id
      name
    }
  }
`


export const ADD_CATEGORY = gql`
mutation($name: String!) {
    createNewCategory(name: $name) {
      id
      name
    }
  }
`




export const ADD_SUPPLIER = gql`
mutation($name: String!) {
  createNewSupplier(name: $name){
    id
    name
  }
}
`

// export const ADD_MODEL_SHORTCUT = gql`
//     mutation($object: Any!) {
//       createNewModel()
//     }
// `

export const ADD_MODEL = gql`
mutation($name: String!, 
  $manufactorId: Int!, 
  $categoryId: Int!, 
  $hasSerial: Boolean!, 
  $shortDescription: String, 
  $longDescription: String)
  {
  createNewModel(name: $name, 
    manufactorId: $manufactorId, 
    categoryId: $categoryId, 
    hasSerial: $hasSerial, 
    shortDescription: $shortDescription, 
    longDescription: $longDescription )
    {
    id
    name
    hasSerial
    shortDescription
    longDescription
    manufactors{name}
    }
  }
`

export const ADD_ITEM = gql`
  mutation($warehouse: String!, $supplierId: Int!, $modelId: Int!, $serialNumber: String, $price: Float, $note: String, $quantity: Int!, $conditionId: Int!){
    createNewItem(warehouse: $warehouse, supplierId: $supplierId, modelId: $modelId, serialNumber: $serialNumber, price: $price, note: $note, quantity: $quantity, conditionId: $conditionId){
      id
      conditionId
      warehouse
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

export const DELETE_ITEM = gql`
  mutation($id: Int!){
    deleteItemWithId(id: $id){
      id
    }
  }
`


export const EDIT_MODEL_NAME = gql`
  mutation($name: String!, $id: Int!) {
      updateModel(id: $id, name: $name) {
          id
          name
      }
  }
`

export const EDIT_MODEL_NOTE = gql`
  mutation($note: String!, $id: Int!) {
      updateModel(id: $id, note: $note) {
          id
          note
      }
  }
`

export const EDIT_MODEL_MANUFACTOR = gql`
  mutation($manufactorId: Int!, $id: Int!) {
    updateModel(id: $id, manufactorId: $manufactorId) {
      manufactors {
        id
        name
      }
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