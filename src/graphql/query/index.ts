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