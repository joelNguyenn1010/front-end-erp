import React from 'react'
import {Cascader} from 'antd'
import { useDispatch } from 'react-redux'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const InputTypeComponent = () => {

    const options = [
        {
            value:'shipping',
            lable: 'shipping',
        },
        {
            value: 'portal',
            label: 'portal'
        }
    ]

    const dispatch = useDispatch();

    const onChange = (val: string[]) => {
        dispatch(changeCustomerValue('type', val[0]))
    }

    return (

        <div>
            <Cascader options={options} onChange={onChange}/>
        </div>
    )
}

export default InputTypeComponent
