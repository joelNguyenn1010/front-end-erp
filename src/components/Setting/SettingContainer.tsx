import React from 'react';
import PanelTitle from '../PanelTitle';
import { Row, Col, Card } from 'antd'
import BrowserList from './BrowserSetting/BrowserSetting';
import WaitTargetSite from './WaitTargetSite/WaitTargetSite';
import VisitPageSetting from './VisitPageSetting/VisitPageSetting';
import ModeSetting from './ModeSetting/ModeSetting';
import OptionSetting from './OptionSetting/OptionSetting';
import VisitPageSettingContainer from './VisitPageSetting/VisitPageSettingContainer';
import TargetSiteSetting from './TargetSiteSetting/TargetSiteSetting';
import AutomaticResetSetting from './AutomaticResetSetting/AutomaticResetSetting';
import ExportReport from './SettingActions/ExportReport';
import StopSetting from './SettingActions/StopSetting';
import StartSetting from './SettingActions/StartSetting';
import ButtonGroup from 'antd/lib/button/button-group';
const SettingContainer: React.FC = props => {
    return (
        <Row>
            <Row>
                <PanelTitle
                    title="Settings"
                    icon="setting"
                />
            </Row>

            <Row>
                <BrowserList />
            </Row>

            <Row>
                <Card>
                    <WaitTargetSite />

                    <VisitPageSettingContainer />

                    <TargetSiteSetting />

                    <AutomaticResetSetting />
                </Card>
            </Row>

            {/* Mode Setting components */}
            <Row>
                <ModeSetting />
            </Row>

            {/* Option setting components */}
            <Row>
                <OptionSetting />
            </Row>


            <Row>
                <ButtonGroup style={{"width": "100%"}}>
                    <ExportReport  />

                    <StopSetting />

                    <StartSetting />
                </ButtonGroup>
            </Row>
        </Row>

    )
}

export default SettingContainer