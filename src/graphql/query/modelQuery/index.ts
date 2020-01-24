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

export const FIND_MODEL_WITH_NAME = gql`
query($name: String!) {
  findModelWithName(name: $name) {
    name
    id
  }
}
`