import React from 'react'
import { Table, Descriptions, Row, Col } from 'antd'
import Courier from './courier/button-add-courier'
import SupplierNote from './supplier-note'
import OverviewCourierComponent from "./courier/overview-courier.component";

const OverviewShippingComponent = () => {

    return (
        <Row>
            <Col span={12}>
                <OverviewCourierComponent />
            </Col>
            <Col span={12}>
                <SupplierNote />

            </Col>
        </Row>
    )
}

export default OverviewShippingComponent
