import React from 'react'
import { Select, Form } from 'antd'
import { useDispatch } from 'react-redux'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import { Salutation } from '../../../../../store/contract/Customer'
import { useFormContext, Controller } from 'react-hook-form'


export const AddSalutation = () => {

    const {  setValue, control } = useFormContext()


    const keys = Object.keys(Salutation);

    const onChange = (value: any) => {
        setValue("salutation", value)
    }

    const SalutationSelection = (
        <Select defaultValue={"Mr"} style={{ width: '100%' }} onChange={onChange}>
            {keys.map((salutaiton: string, index: number) => <Select.Option key={index} value={salutaiton}>{salutaiton}</Select.Option>)}
        </Select>
    )

    return (
        <Form.Item
            label={"Salutation"}
        >
            <Controller rules={{required: true}} as={SalutationSelection} name="salutation" control={control} defaultValue="Mr"/>
        </Form.Item>
    )

}

export default AddSalutation
