import React from 'react'
import { Descriptions } from 'antd'

const SupplierNote = () => {
    return (
        <React.Fragment>
            <Descriptions title="" bordered layout="vertical">

                <Descriptions.Item label="Note for shipping" span={1}>
                    Shipping</Descriptions.Item>
            </Descriptions>
            <Descriptions title="" bordered layout="vertical">
                <Descriptions.Item label="Note for shipping" span={1}>
                    Shipping</Descriptions.Item>
            </Descriptions>
        </React.Fragment>
    )

}

export default SupplierNote
