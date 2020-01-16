import React from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { deleteItems } from '../../../store/action/itemAction/createItemAction'

interface DeleteItemProps {
    index: number,
    // cancel: any
}

const DeleteItemButton:React.FC<DeleteItemProps> = (props) => {

    // const name = useSelector((state: AppState) => state.createItemReducer.items)

    const dispatch = useDispatch()

    const onClick = () => {
        
        dispatch(deleteItems(props.index))
    }

    
    return (
        <div>
            <Button
                onClick = {onClick}
            >
                Delete
            </Button>
        </div>
    )
}

export default DeleteItemButton
