import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { ChangeDataAction } from '../../../store/action/itemAction/createItemWithoutSNAction';
import TextArea from 'antd/lib/input/TextArea';


const NoteInput = () => {

    const name = useSelector((state: AppState) => state.CreateItemWithoutSNReducer.input.note)

    const dispatch  = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = val.target.value
        dispatch(ChangeDataAction('note', newVal))
    }

    return (
        <div>   
            <label>
                Note:
            </label>
            <TextArea rows={4} value={name} onChange={onChange}/>
        </div>
    )
}

export default NoteInput
