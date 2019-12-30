import React from 'react'
import { Button, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { submitItemAction, deleteItems } from '../../../store/action/itemAction/createItemAction'
import { AppState } from '../../../store'

interface SubmitItemProps {
    index: number
}

const SubmitItemButton: React.FC<SubmitItemProps> = props => {

    const name = useSelector((state: AppState) => state.createItemReducer.items)

    const dispatch = useDispatch()

    const onClick = () => {

        dispatch(submitItemAction(props.index))
        
    }


    return (
        <div>
            <Button
                onClick={onClick}
            >
                Submit
            </Button>
        </div>
    )
}

export default SubmitItemButton
