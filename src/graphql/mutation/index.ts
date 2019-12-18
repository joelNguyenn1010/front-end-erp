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
