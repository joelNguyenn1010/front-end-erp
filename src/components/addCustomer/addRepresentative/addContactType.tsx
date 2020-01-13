import React from 'react'
import { Cascader } from 'antd'

const options = [
    {
        value: "gov",
        label: "Gov"
    },
    {
        value: "corp",
        label: "Corp"
    },
    {
        value: "broker",
        label: "Broker"
    },
    {
        value: "individual",
        label: "Individual"
    }
]


const AddContactType = () => {

    
    const onChange = () => {

    }


    return (
        
        <div>
            
            <Cascader options={options} onChange={onChange}/>
        </div>
    )
}

export default AddContactType
