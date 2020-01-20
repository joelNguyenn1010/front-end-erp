import React from 'react'
import { Cascader } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'

const options = [
    {
        value: "gov",
        label: "Gov"
    },
    {
        value: "corp",
        label: "Corp"
    },
    {
        value: "broker",
        label: "Broker"
    },
    {
        value: "individual",
        label: "Individual"
    }
]


const AddContactType = () => {

    const name = useSelector((state: AppState) => state.CustomerReducer.input.contactType)
    
    const dispatch = useDispatch();
    
    const onChange = (e: string[], option: any) => {
        dispatch(changeCustomerValue('contactType',e[0]))
    }


    return (
        
        <div>
            <Cascader defaultValue={[name]} options={options} onChange={onChange}/>
        </div>
    )
}

export default AddContactType
