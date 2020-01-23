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

    enum ContactTypeSupplier {
        Gov,
        Corp,
        Broker,
        Individual,
        Other
    }

    enum PricingLevel {
        Level1,
        Level2,
        Level3,
        Level4,
        Level5
    }

    input EmailWithIdInput {
        email: String
        id: Int
    }
`