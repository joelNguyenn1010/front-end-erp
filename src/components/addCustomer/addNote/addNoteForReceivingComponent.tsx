import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'
import TextArea from 'antd/lib/input/TextArea';


const AddNoteForReceivingComponent = () => {

    const name = useSelector((state: AppState) => state.CreateCustomerReducer.input.noteForReceiving)
    const dispatch  = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = val.target.value
        dispatch(changeCustomerValue('noteForReceiving', newVal))
    }

    return (
        <div>   
            <TextArea rows={3} value={name} onChange={onChange}/>
        </div>
    )
}

export default AddNoteForReceivingComponent
