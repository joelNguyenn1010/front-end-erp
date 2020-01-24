import React from 'react'
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import  {SubmitItemWithoutSNAction}  from '../../../store/action/itemAction/createItemWithoutSNAction';
 

const SubmitItemWithoutSN = () => {

    // const context : any = React.useContext(CreateItemContext)

    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(SubmitItemWithoutSNAction())}>
            Create
        </Button>
    )
}

export default SubmitItemWithoutSN;
