import React from 'react'
import { Button } from 'antd';
import {CreateItemContext} from '../../../context/provider/createItemContext'
 

const SubmitItemWithoutSN = () => {

    const context : any = React.useContext(CreateItemContext)

    return (
        <Button onClick={() => context.action.build()}>
            Create
        </Button>
    )
}

export default SubmitItemWithoutSN;
