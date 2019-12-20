export interface Item {
    input: {
        location: string,
        locationId: number,
        conditionId: number,
        condition: string,
        supplier: string,
        supplierId: number,
        model: string,
        modelId: number,
        serialNumber: string,
        note: string,
    },
    value?: Array<string>
}