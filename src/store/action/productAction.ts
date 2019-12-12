import { Model } from "../contract/Model";

export interface GetModel {
    type: string,
    payload: Model
}
export type ProductActionTypes = GetModel