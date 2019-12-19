import React from 'react'

export interface ItemWithoutSn {
    input: {
        model: string,
        modelId: number,
        supplier: string,
        supplierId: number,
        quantity: number,
        whlocation: string,
        whlocationId: number,
        note: string,
        conditionId: number,
        condition: string
    },
    value?: Array<string>
}
