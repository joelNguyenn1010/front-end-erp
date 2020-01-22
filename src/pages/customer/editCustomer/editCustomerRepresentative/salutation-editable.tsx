import React from 'react'
import { Salutation } from '../../../../store/contract/Customer'
import { Select } from 'antd';
const { Option } = Select;

interface SalutationEditableProps {
    handleSave: any,
    text: any,
    record: any,
}

const SalutationEditable: React.FC<SalutationEditableProps> = props => {
    const keys = Object.keys(Salutation);

    const {text, record} = props

    const onChange = (value: any) => {
        const id = record.id

        props.handleSave({salutation: value, id})

    }

    return (
        <Select defaultValue={text} style={{ width: 120 }} onChange={onChange}>
            {keys.map((salutaiton: string, index: number) => <Option key={index} value={salutaiton}>{salutaiton}</Option>)}
        </Select>
    )
}

export default SalutationEditable
