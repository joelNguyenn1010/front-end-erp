import React from 'react'
import {Input} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'

const AddPosition = () => {

    const  name = useSelector((state:AppState) => state.CreateCustomerReducer.input.position)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value

        dispatch(changeCustomerValue('position', newVal))
    }

    return (
        <div>
            <Input placeholder='Position' value={name} onChange={onChange} allowClear   />
        </div>
    )
}

export default AddPosition
