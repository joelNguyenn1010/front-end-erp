import React, { useContext } from 'react'
import { Select, Radio } from 'antd';
import { CreateModelContext } from '../../../context/provider/createModelContext';
import { RadioChangeEvent } from 'antd/lib/radio';

const HasSerialModel: React.FC = () => {

    const context: any = useContext(CreateModelContext)


    return (
        <Radio.Group onChange={(value: RadioChangeEvent) => context.value.hasSerial = value.target.value}>
            <Radio.Button value={true}>Manage By Quantity</Radio.Button>
            <Radio.Button value={false}>Manage By Serial Number</Radio.Button>
        </Radio.Group>
    )
}

export default HasSerialModel