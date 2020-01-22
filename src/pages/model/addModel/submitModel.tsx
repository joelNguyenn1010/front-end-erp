import React, { useContext } from 'react'
import { Button } from 'antd';
import { CreateModelContext } from '../../../context/provider/createModelContext';
import { useDispatch } from 'react-redux';
import { submitModelAction } from '../../../store/action/model/createModelAction';

const SubmitModel: React.FC = () => {

    // const context: any = useContext(CreateModelContext)

    const dispatch = useDispatch()

    return (
        <Button
        
            onClick={() => {
                dispatch(submitModelAction())
            }}
        >Create</Button>
    )
}
export default SubmitModel