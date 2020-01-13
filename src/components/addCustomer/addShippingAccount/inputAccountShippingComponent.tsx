import React from 'react'
import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'

const InputAccountShippingComponent = () => {

    const name =  useSelector((state:AppState) => state.CreateCustomerReducer.input.account)

    const dispatch = useDispatch();

    const onChange = (val: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('account', newVal))
    }

    return (
        <div>
            <Input  value={name} onChange={onChange} allowClear placeholder='Account shipping' />
        </div>
    )
}
export default InputAccountShippingComponent
