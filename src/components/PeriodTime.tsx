import React from 'react';
import { InputNumber } from 'antd';

interface PeriodTimeProps {
    fromTime: number,
    toTime: number,
    onChangePeriod: (values: [number, number]) => void
}

const PeriodTime: React.FC<PeriodTimeProps> = props => {


    const handleFromTimeChange = (e: number | undefined) => {     
        if(e && e < props.toTime) {
            props.onChangePeriod([e, props.toTime])
        }
    }
    

    const handleToTimeChange = (e: number | undefined) => {
        if(e && e > props.fromTime) {
            props.onChangePeriod([props.fromTime, e])
        }
    }

    return(<React.Fragment>
        <InputNumber 
        onChange={handleFromTimeChange}
        max={props.toTime - 1}
        value={props.fromTime} /> <InputNumber 
        onChange={handleToTimeChange}
        min={props.fromTime}
        value={props.toTime}/>
    </React.Fragment>)
}

export default PeriodTime