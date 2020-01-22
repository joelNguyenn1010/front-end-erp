import React from 'react'
import { Cascader, Form, Select } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import { useFormContext, Controller } from 'react-hook-form'
import { PricingLevel } from '../../../../../store/contract/Customer'

const options = [
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '4',
        label: '4',
    },
    {
        value: '5',
        label: '5'
    }
]

const AddPricingLevel = () => {

    const { control } = useFormContext()

    const keys = Object.keys(PricingLevel)

    const pricingLevels = (
        <Select
        
        defaultValue={PricingLevel.Level5}>
            {keys.map((value: string, index: number) => <Select.Option key={index} value={value}>{value}</Select.Option>)}
        </Select>
    )

    return (
        <Form.Item
            label="Pricing Level"
            style={{width: "100%"}}
        >
            <Controller
                        style={{width: "100%"}}

            control={control} name="pricingLevel" as={pricingLevels} defaultValue={PricingLevel.Level5} />

        </Form.Item>
    )
}

export default AddPricingLevel
