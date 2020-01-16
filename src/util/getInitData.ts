import { gql } from 'apollo-boost';
import client from "../graphql"

export const getCiscoId = () => {
    client.query({
        query: gql`
    query{
        manufactor(limit:1, page:1, name: "cisco") {
          data {
            name
            id
          }
        }
      }
      
    `})

    .then((res) => {
    
        localStorage.setItem('manufactor', res.data.manufactor.data[0].name)
    })
}