import React from 'react'
import { Input, message, Form, Select } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import SearchCreation from '../../../../../components/searchCreation'
import { Controller, useFormContext } from 'react-hook-form'

let timeout: any = null

enum CurrencyEnum {
    AUD = "AUD",
    USA = "USA"
}

const InputCurrencyComponent = () => {

    const {control, setValue} = useFormContext()


    const keys = Object.keys(CurrencyEnum)

    // const name = useSelector((state:AppState) => state.CustomerReducer.input.currency)

    // const dispatch = useDispatch()

    // // if(error){
    // //     message.error('We cant fetch data from database, please try again')
    // // }

    // const onSearch = (val: string) => {
    //     clearTimeout(timeout)
    //     timeout = setTimeout(function(){
    //         // refetch({name:val, limit:10, page:1})
    //     }, 250)
    // }

    const onChange = (value: any) => {
        setValue("currency", value)
    }
    
    // const onSelected = (val: string, option: any) => {
    //     dispatch(changeCustomerValue('currency', val))
    //     dispatch(changeCustomerValue('currencyId', parseInt(option.key)))
    // }

    const currencies = (
        <Select onChange={onChange} defaultValue={CurrencyEnum.AUD}>
            {keys.map((value: string, index: number) => <Select.Option key={index} value={value}>{value}</Select.Option>)}
        </Select>
    )


    return (
        // <div>
        //     <SearchCreation 
        //         input={name}
        //         onSearch={onSearch}
        //         onSelected={onSelected}
        //     />
        // </div>
        <Form.Item
            label="Currency"
        >
            <Controller defaultValue={CurrencyEnum.AUD} as={currencies} control={control} name="currency" />
        </Form.Item>
    )
}
export default InputCurrencyComponent
