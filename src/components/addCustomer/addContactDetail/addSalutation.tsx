import React from 'react'
import { Cascader } from 'antd'

const options = [
    {
        value: 'mr',
        label: 'Mr'
    },
    {
        value: 'ms',
        label: 'Ms'
    },
    {
        value: 'mrs',
        label: 'Mrs'
    },
    {
        value: 'other',
        label: 'Other'
    }
]

export const AddSalutation = () => {

    const onChange = () => {

    }

    return (
        <div>
            <Cascader onChange={onChange} options={options}/>
        </div>
    )
}

export default AddSalutation
