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

export const UPDATE_ITEM_NOTE = gql`
  mutation($id: Int!, $note: String){
    updateItem(id: $id, note: $note){
      note
    }
  }
`
