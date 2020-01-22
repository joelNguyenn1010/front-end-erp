import React from 'react'
import { Cascader, Select, Form } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import { ContactType } from '../../../../../store/contract/Customer'
import { Controller, useFormContext } from 'react-hook-form'

// const options = [
//     {
//         value: "gov",
//         label: "Gov"
//     },
//     {
//         value: "corp",
//         label: "Corp"
//     },
//     {
//         value: "broker",
//         label: "Broker"
//     },
//     {
//         value: "individual",
//         label: "Individual"
//     }
// ]


const AddContactType = () => {

    const keys = Object.keys(ContactType)

    const { control } = useFormContext()

    const contactTypes = (
        <Select defaultValue={ContactType.Individual}>
            {keys.map((value: string, index: number) => <Select.Option key={index} value={value}>{value}</Select.Option>)}
        </Select>
    )
    return (
        <Form.Item
            label="Contact Type"
        >
            <Controller control={control} name="contactType" as={contactTypes} defaultValue={ContactType.Individual} />

        </Form.Item>
    )
}

export default AddContactType
