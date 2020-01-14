import React from 'react'
import { Cascader } from 'antd'
import {  useDispatch } from 'react-redux'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'

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
