import React from 'react';
import { Browser } from '../../../store/contract/googladsSetting/settingType'
import { Checkbox, Col, Card } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useDispatch, useSelector } from 'react-redux';
import { changeBrowsers, changeIncognite } from '../../../store/action/googleadsSetting/settingAction';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { AppState } from '../../../store/ApplicationState';
const BrowserList: React.FC = props => {



    const browsers: Array<string> = Object.values(Browser);


    const browserState: Array<string> = useSelector((state: AppState) => {
        const returnBrowserValue: Array<string> = Object.assign([],state.settingReducer.browsers)
        return returnBrowserValue
    })

    const is_incognito: boolean = useSelector((state: AppState) => state.settingReducer.is_incognito)
    const dispatch = useDispatch()


    const handleChangeBrowserChange = (checkedValue: CheckboxValueType[]) => {

        const newBrowserSetting: Browser[] = Object.assign([], checkedValue)
        dispatch(changeBrowsers(newBrowserSetting))

    }

    const handleIncogniteChange = (checkedValue: CheckboxChangeEvent) => {

        const value: boolean = checkedValue.target.checked
        dispatch(changeIncognite(value))

    }



    return (<React.Fragment>
        <Col xl={18} xs={24}>
            <Card>
                <Checkbox.Group 
                options={browsers} 
                value={browserState}
                onChange={handleChangeBrowserChange} />
            </Card>
        </Col>
        <Col xl={6} xs={24}>
            <Card>
                <Checkbox checked={is_incognito} onChange={handleIncogniteChange}>Incognito</Checkbox>
            </Card>
        </Col>
    </React.Fragment>)
}

export default BrowserList