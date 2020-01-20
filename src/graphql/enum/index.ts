import { gql } from 'apollo-boost';
export const SALUTATION_ENUM = gql`
    enum SalutationEnum {
        Mr,
        Ms,
        Mrs
    }

    input EmailInput {
        name: String
    }
`