import React from 'react'
import {Input } from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../../../../store'
import {changeCustomerValue} from '../../../../../store/action/customerAction/createCustomerAction'

const InputOptionPaypalComponent = () => {
    const name = useSelector((state:AppState) => state.CustomerReducer.input.optionPaypal)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('optionPaypal', newVal))
    }

    return (
        <div >
            <Input value={name} onChange={onChange} />
        </div>
    )
}

export default InputOptionPaypalComponent
