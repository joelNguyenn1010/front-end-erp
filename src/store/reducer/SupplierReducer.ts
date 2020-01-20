import { Suppliers, ContactType, PricingLevel} from "../contract/Suppliers";

const init: Suppliers = {
    id: -1,
    name: '',
    contactType: ContactType.Individual,
    pricingLevel: PricingLevel.Level5,
    ipsPolicy: '',
    warrantyPolicy: '',

    representatives: []
}

export const SupplierReducer = (state: Suppliers = init, action: any) => {
    switch(action.type){
        
        default:
            return state
    }
}