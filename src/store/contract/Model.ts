import { Category } from "./Category";
import { OtherModelName } from "./OtherModelName";

export interface Model {
    id?: string,
    name: string,
    addedBy?: string,
    addedDate?: string,
    categories?: Category,
    otherName: [OtherModelName] | [],
    hasSerial?: boolean,
    shortDescription?: string,
    longDescription?: string,
    note?: string,
}


export interface ModelCreate {
    input: {
        name: string,
        hasSerial: boolean,
        category: string,
        manufactor: string,
        manufactorId: number,
        categoryId: number,
    }, res : {
        id: number,
        name: string,
    }
}


