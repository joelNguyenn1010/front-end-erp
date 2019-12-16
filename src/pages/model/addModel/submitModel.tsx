import React, { useContext } from 'react'
import { Button } from 'antd';
import { CreateModelContext } from '../../../context/provider/createModelContext';

const SubmitModel: React.FC = () => {

    const context: any = useContext(CreateModelContext)

    return (
        <Button
        
            onClick={() => context.action.build()}
        >Create</Button>
    )
}
export default SubmitModel