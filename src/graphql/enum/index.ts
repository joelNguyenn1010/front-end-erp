import { gql } from 'apollo-boost';
export const SALUTATION_ENUM = gql`
    enum SalutationEnum {
        Mr,
        Ms,
        Mrs,
        Other
    }

    input EmailInput {
        name: String
    }

    enum SupplierAddressTypeEnum {
        postal,
        shipping
    }
`