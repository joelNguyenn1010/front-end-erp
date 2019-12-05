import React from 'react'
import { Icon, Row, Col, Typography } from 'antd'

const { Title } = Typography;


interface PanelTitleProps {
    title: string,
    icon: string
}

const PanelTitle: React.FC<PanelTitleProps> = props => {
    return (
        <Row>
            <Col span={24}>
                <Title level={3}><Icon type={props.icon} /> {props.title}</Title>
            </Col>
        </Row>
    )
}

export default PanelTitle