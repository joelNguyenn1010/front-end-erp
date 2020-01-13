import React from 'react'
import { Cascader } from 'antd'

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

    const onChange = () => {

    }

    return (
        <div>
            <Cascader onChange={onChange} options={options}/>
        </div>
    )
}

export default AddPricingLevel
