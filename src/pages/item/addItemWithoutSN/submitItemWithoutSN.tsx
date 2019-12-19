import React from 'react'
import { Button } from 'antd';
import {CreateItemContext} from '../../../context/provider/createItemContext'
import { useDispatch } from 'react-redux';
import  {SubmitItemWithoutSNAction}  from '../../../store/action/createItemWithoutSNAction';
 

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