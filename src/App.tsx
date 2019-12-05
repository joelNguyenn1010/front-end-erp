import React from 'react';
import KeywordContainer from './components/Keywords/KeywordContainer'
import 'antd/dist/antd.css';
import { Row, Col, Card } from 'antd'
import SitesContainer from './components/Sites/SitesContainer';
import SettingContainer from './components/Setting/SettingContainer';

const App: React.FC = () => {
  return (
    <Card title="Google Adwords Configurator">
      <Row gutter={[8, 8]}>
        <Col span={8} >
          <KeywordContainer />
        </Col>

        <Col span={8} >
          <SitesContainer />
        </Col>

        <Col span={8} >
          <SettingContainer />
        </Col>
      </Row>
    </Card>
  );
}

export default App;
