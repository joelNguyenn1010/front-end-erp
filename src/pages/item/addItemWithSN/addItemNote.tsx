import React from 'react'
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../store';
import { changeItemValue } from '../../../store/action/itemAction/createItemAction';
const { TextArea } = Input;

interface ItemNoteProps {
    index: number
}

const AddItemNote:React.FC<ItemNoteProps> = props => {

    const name = useSelector((state:AppState) => state.createItemReducer.items[props.index].note)

    const dispatch = useDispatch()

    const onChange = (val: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = val.target.value
        dispatch(changeItemValue(props.index, 'note', newVal))
    }

    return (
        <div>
            <TextArea value={name} placeholder="Note..." allowClear onChange={onChange} />
        </div>
    )
}

export default AddItemNote
