import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import TextArea from 'antd/lib/input/TextArea';


const AddNoteForShippingComponent = () => {

    const name = useSelector((state: AppState) => state.CustomerReducer.input.noteForShipping)
    const dispatch  = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('noteForShipping', newVal))
    }

    return (
        <div>   
            <TextArea rows={3} value={name} onChange={onChange}/>
        </div>
    )
}

export default AddNoteForShippingComponent
