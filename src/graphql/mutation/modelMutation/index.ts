import { gql } from "apollo-boost";

//ADD MUTATION
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