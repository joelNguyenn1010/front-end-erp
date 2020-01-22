import React from 'react'

import {SupplierAddressTypeEnum} from '../../../../store/contract/Customer'
import { Select } from 'antd';
const {Option} = Select;

interface EditTypeCustomerProps  {
    text: any,
    record: any,
    handleSave?: any,
}

const EditTypeCustomer:React.FC<EditTypeCustomerProps> = (props :any) => {

    const keys = Object.keys(SupplierAddressTypeEnum);
    const {text, record } = props

    const onChange = (value: any) => {
        const id = record.id
        props.handleSave({type: value, id})
    }

    return (
        <Select defaultValue={text} style={{ width: 120 }} onChange={onChange}>
            {keys.map((type: string, index: number) => <Option key={index} value={type}>{type}</Option>)}
        </Select>
    )
}

export default EditTypeCustomer
