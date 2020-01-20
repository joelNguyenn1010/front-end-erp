
import React from 'react'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import TextArea from 'antd/lib/input/TextArea'

const InputCusWarrantyPolicyComponent = () => {

    const name = useSelector((state: AppState) => state.CustomerReducer.input.cusWarrantyPolicy)

    const dispatch = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('cusWarrantyPolicy', newVal))
    }

    return (
        <div>
            <TextArea rows={3} value={name}  placeholder='Customer warranty policy' allowClear onChange={onChange}/>
        </div>
    )
}
export default InputCusWarrantyPolicyComponent
