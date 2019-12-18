import { Model } from "../contract/Model";
import { Product } from "../contract/Product";
import { ProductActionTypes } from "../action/productAction";

const initModel: Model = {
    name: '',
    otherName: [],
}

const init: Product = {
    model: initModel
}

export const productReducer = (state: Product = init, action: ProductActionTypes) => {
    
    return state;
}

