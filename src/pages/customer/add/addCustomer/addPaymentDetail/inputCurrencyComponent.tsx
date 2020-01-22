import React from 'react'
import { Input, message, Form, Select } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import SearchCreation from '../../../../../components/searchCreation'
import { Controller, useFormContext } from 'react-hook-form'


export enum CurrencyEnum {
    AUD = "AUD",
    USD = "USD"
}

const InputCurrencyComponent = () => {

    const {control, setValue} = useFormContext()


    const keys = Object.keys(CurrencyEnum)

   

    const onChange = (value: any) => {
        setValue("currency", value)
    }
   

    const currencies = (
        <Select onChange={onChange} defaultValue={CurrencyEnum.AUD}>
            {keys.map((value: string, index: number) => <Select.Option key={index} value={value}>{value}</Select.Option>)}
        </Select>
    )


    return (
        <Form.Item
            label="Currency"
        >
            <Controller defaultValue={CurrencyEnum.AUD} as={currencies} control={control} name="currency" />
        </Form.Item>
    )
}
export default InputCurrencyComponent
