import React from 'react'
import PanelTitle from '../PanelTitle'
import { Row, Col } from 'antd'
import SitesForm from './SitesForm'
import SitesList from './SitesList'
const SitesContainer: React.FC = props => {
    return (
        <Row>


            <Col span={24}>
                <PanelTitle
                    title="Sites"
                    icon="desktop"
                />

            </Col>

            <Col span={24}>
                <SitesForm />
            </Col>

            <Col span={24}>
                <SitesList />
            </Col>

        </Row>
    )
}

export default SitesContainer