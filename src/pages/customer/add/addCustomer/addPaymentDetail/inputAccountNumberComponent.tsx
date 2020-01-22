import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import NumericInput from '../../../../../components/conponentInputNumberOnly/inputNumberOnly'
import { InputNumber, Form } from 'antd'
import { useFormContext } from 'react-hook-form'

const InputBankAccountComponent = () => {

   const {register, errors} = useFormContext()

    return (

        <Form.Item
            label="Account number"
            help={errors.accountNumber ? "Account number is required" : ""}
            validateStatus={errors.accountNumber ? "error" : ''}
        >
            <input className="ant-input" name="accountNumber" ref={register({ required: true })} placeholder='99999999' />
        </Form.Item>

    )
}
export default InputBankAccountComponent

