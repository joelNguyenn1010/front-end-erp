import { gql } from "apollo-boost";

export const FIND_WARRENTY_SUPPLIER = gql`
    query($id: Int) {
        findSupplier(id: $id) {
            id
            ipsPolicy
            warrantyPolicy
        }
    }
`