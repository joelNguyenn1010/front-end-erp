import React from 'react'
import {Cascader} from 'antd'
import { useDispatch } from 'react-redux'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const InputTypeComponent = () => {

    

    const dispatch = useDispatch();

    const onChange = (val: string) => {
        dispatch(changeCustomerValue('type', val))
    }

    return (

        <div>
            
        </div>
    )
}

export default InputTypeComponent
