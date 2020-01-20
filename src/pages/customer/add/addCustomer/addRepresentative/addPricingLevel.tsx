import React from 'react'
import { Cascader } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const options = [
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '4',
        label: '4',
    },
    {
        value: '5',
        label: '5'
    }
]

const AddPricingLevel = () => {

    const name = useSelector((state: AppState) => state.CustomerReducer.input.priceLevel)
    const dispatch = useDispatch();

    const onChange = (e: string[]) => {
        dispatch(changeCustomerValue('priceLevel', e[0]))
    }

    return (
        <div>
            <Cascader defaultValue={[name]} onChange={onChange} options={options}/>
        </div>
    )
}

export default AddPricingLevel
