import React from 'react'
import {  Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { changeValueAction } from '../../../store/action/model/createModelAction';

const HasSerialModel: React.FC = () => {

    // const context: any = useContext(CreateModelContext)
    const dispatch = useDispatch()

    const hasSerial = useSelector((state: AppState) => state.createModelReducer.input.hasSerial)


    return (
        <Radio.Group value={hasSerial} onChange={(value: RadioChangeEvent) => dispatch(changeValueAction('hasSerial', value.target.value))}>
            <Radio.Button value={true}>Manage By Serial Number</Radio.Button>
            <Radio.Button value={false}>Manage By Quantity</Radio.Button>
        </Radio.Group>
    )
}

export default HasSerialModel