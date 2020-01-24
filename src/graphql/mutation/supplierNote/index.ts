import { gql } from "apollo-boost";

export const CREATE_SUPPLIER_NOTE = gql`

mutation($internalNote: String, $supplierId: Int!) {
    createSupplierNote(internalNote: $internalNote, supplierId: $supplierId) {
      id
      internalNote
    }
}
`

export const GET_SUPPLIER_NOTE = gql`

query($supplierId: Int!) {
    supplierNote(supplierId: $supplierId) {
      internalNote
      created_at
    }
  }

`