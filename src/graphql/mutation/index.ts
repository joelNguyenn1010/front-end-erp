import { gql } from 'apollo-boost'

// enum SalutationEnum {
//   mr,
//   mrs,
//   ms,
//   other
// }


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




export const ADD_SUPPLIER = gql`
mutation($name: String!) {
  createNewSupplier(name: $name){
    id
    name
  }
}
`


export const CREATE_NEW_SUPPLIER_WITH_INFO = gql`
  mutation($name: String!, $contactType: ContactTypeSupplier, $pricingLevel: PricingLevel) {
    createNewSupplier(name: $name, contactType: $contactType, pricingLevel: $pricingLevel){
      id
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



export const ADD_CUS_REPRESENTATIVE = gql`
mutation($supplierId: Int!, $salutation: SalutationEnum, $fullName: String!, $position: String, $phoneNumber: String, $emails: [EmailInput]  ){
  createRepresentative(supplierId: $supplierId, salutation: $salutation, fullName: $fullName, position: $position, phoneNumber: $phoneNumber, emails: $emails){
    id
    supplierId
    salutation
    fullName
    position
    phoneNumber
 }   
}
`

export const ADD_CUS_REPRESENTATIVE_EMAIL = gql`
mutation($email: String){
  createRepresentativeEmail(email: $email){
    id
    email
  }
}
`

export const ADD_SUPPLIER_ADDRESS = gql`
mutation($supplierId: Int!, $country: String, $postcode: String, $city: String, $state: String, $street: String, $type: SupplierAddressTypeEnum){
  createSupplierAddress(supplierId: $supplierId, country: $country, postcode: $postcode, city: $city, state: $state, street: $street, type: $type){
    id
    supplierId
    country
    postcode
    city
    state
    street
    type
  }
}
`

export const ADD_ECOMMERCIAL_ID = gql`
    mutation($supplierId: Int!, $identify: String, $name: String){
    createEcommercialSupplier(supplierId: $supplierId, identify: $identify, name: $name){
    id
    supplierId
    identify
    name
    }
    }
`

export const ADD_EMAIL_SUPPLIER = gql`
    mutation( $email: String!, $supplierId: Int!, $typeemail: String){
        createSupplierEmail( email: $email, supplierId: $supplierId, typeemail: $typeemail){
            supplierId
            email
            typeemail
        }
    }
`



//EDIT MUTATION

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

//UPDATE MUTATION

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

export const UPDATE_CUSTOMER_ADDRESS = gql`
  mutation($id: Int!, $state: String, $street: String, $city: String, $postcode: String, $type: SupplierAddressTypeEnum){
    updateAddress(id: $id, state: $state, street: $street, city: $city, type: $type, postcode: $postcode){
      id
      supplierId
      street
      city
      state
      type
      postcode  
    }
  }
`

export const UPDATE_ADDRESS_COUNTRY = gql`
  mutation($id: Int!, $country: String){
    updateAddress(id: $id, country: $country){
      id
      supplierId
      country
    }
  }
`

export const UPDATE_REPRESENTATIVE_EMAIL = gql`
    mutation($representativeId: Int!, $emails: [EmailWithIdInput]){
      updateRepresentativeEmail(representativeId: $representativeId, emails: $emails){
        id
      }
    }
`

export const UPDATE_EMAIL_SUPPLIER = gql`
    mutation($id: Int!, $email: String!, $typeemail: String){
    updateSupplierEmail(id: $id, email: $email, typeemail: $typeemail){
        id
        supplierId
        email
        typeemail
     }
     }
`




//DELETE MUTATATION
export const DELETE_ITEM = gql`
  mutation($id: Int!){
    deleteItemWithId(id: $id){
      id
    }
  }
`

export const DELETE_REPRESENTATIVE = gql`
  mutation($id: Int!){
    deleteRepresentative(id: $id){
      id
    
    }
  }
`

export const DELETE_ADDRESS = gql`
  mutation($id: Int!){
    deleteSupplierAddress(id: $id){
      id
    }
  }
`

export const DELETE_ECOMMERCIAL_ID= gql`
    mutation($id: Int!){
        deleteEcommercialSupplier(id: $id){
            id
            supplierId
            identify
            name
        }
    }
`

export const DELETE_EMAIL_SUPPLIER = gql`
    mutation($id: Int!){
    deleteSupplierEmail(id: $id){
        id
        email
        supplierId
        typeemail
      }
      
    }
`




export const UPDATE_REPRESENTATIVE = gql`
  mutation($id: Int!, $salutation: SalutationEnum, $fullName: String, $position: String, $phoneNumber: String) {
    updateRepresentative(id: $id, salutation: $salutation, fullName: $fullName, position: $position, phoneNumber: $phoneNumber) {
      id
      fullName
      position
      salutation
      phoneNumber
    }
  }
`



export const CREATE_SUPPLIER_PAYMENT = gql`
  mutation($supplierId: Int!,$currency: String!, $bankName: String!, $bankBranch: String!, $BSB: String!, $accountName: String!, $accountNumber: String!, $paypal: String) {
    createSupplierPayment(supplierId: $supplierId, currency: $currency, bankName: $bankName, bankBranch: $bankBranch, BSB: $BSB, accountName: $accountName, accountNumber: $accountNumber, paypal: $paypal) {
      id
    }
  }
`



export const UPDATE_SUPPLIER_PAYMENT = gql`
  mutation($id: Int!,$currency: String!, $bankName: String!, $bankBranch: String!, $BSB: String!, $accountName: String!, $accountNumber: String!, $paypal: String) {
    updateSupplierPayment(id: $id, currency: $currency, bankName: $bankName, bankBranch: $bankBranch, BSB: $BSB, accountName: $accountName, accountNumber: $accountNumber, paypal: $paypal) {
      id
      currency
      bankName
      bankBranch
      BSB
      accountName
      accountNumber
      paypal
    }
  }
`

export const UPDATE_ECOMMERCIAL_ID = gql`
    mutation($id: Int!, $identify: String, $name: String) {
        updateEcommercialSupplier(id: $id, identify: $identify, name: $name) {
            id
            identify
            name
        }
    }
`