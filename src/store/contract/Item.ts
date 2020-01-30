export interface Item {
    serialNumber: string,
    model: string,
    modelId?: number,
    condition: string,
    conditionId: number,
    supplier: string,
    supplierId: number,
    note: string,
    isFetchingModel: boolean,
    noModelInDB: boolean,
    ciscoModel: string,
    whlocation: string,
    whlocationId: number,
    quantity: number,
    version?: string
}

// export interface ItemCreate { 
//     input: {
//         warehouse: string,
//         condition: string,
//         conditionId: number,
//         model: string, 
//         modelId: number,
//         sn: string,
//         supplier: string,
//         supplierId: number,
//         note: string
//     }
// }