import React from 'react'

import {Input} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const InputCityComponent = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.city)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('city', newVal))
    }

    return (
        <div>
            <Input value={name} placeholder='city' onChange={onChange} allowClear />
        </div>
    )
}

export default InputCityComponent
