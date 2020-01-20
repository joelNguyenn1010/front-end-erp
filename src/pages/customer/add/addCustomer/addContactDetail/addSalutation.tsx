import React from 'react'
import { Cascader } from 'antd'
import {  useDispatch } from 'react-redux'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const options = [
    {
        value: 'Mr',
        label: 'Mr'
    },
    {
        value: 'Ms',
        label: 'Ms'
    },
    {
        value: 'Mrs',
        label: 'Mrs'
    },
    {
        value: 'Other',
        label: 'Other'
    },
]

export const AddSalutation = () => {


    const dispatch = useDispatch();
    const onChange = (e: string[]) => {
        dispatch(changeCustomerValue('salutation', e[0]))
    }

    return (
        <div>
            <Cascader onChange={onChange} options={options}/>
        </div>
    )
}

export default AddSalutation
