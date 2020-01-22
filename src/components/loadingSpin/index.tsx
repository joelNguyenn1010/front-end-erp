import React from 'react'
import { Spin } from 'antd'

const LoadingSpin = () => {
    return (
        <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
            <Spin />
        </div>
    )
}

export default LoadingSpin
