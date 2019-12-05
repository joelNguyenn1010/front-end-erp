import React from 'react'
import KeywordForm from './KeywordForm'
import { Row, Col } from 'antd'
import PanelTitle from '../PanelTitle'
import KeywordList from './KeywordList'

const KeywordContainer: React.FC = () => {
    const title = "Keywords"

    return (
        <Row>
            <Col span={24}>
                <PanelTitle
                    title={title}
                    icon={"form"}
                />
            </Col>

            <KeywordForm />

            <KeywordList />

        </Row>
    )
}
export default KeywordContainer