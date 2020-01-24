import React from 'react'
import { Table, Descriptions, Row, Col } from 'antd'
import Courier from './courier'
import SupplierNote from './supplier-note'

const OverviewShippingComponent = () => {

    return (
        <Row>
            <Col span={12}>
                <Courier />
            </Col>
            <Col span={12}>
                <SupplierNote />

            </Col>
        </Row>
    )
}

export default OverviewShippingComponent
