import React from 'react'
import InputShippingAccount from "./inputShippingAccountComponent";
import InputCourrierNameComponent from "./inputCourrierNameComponent";
import { Button } from 'antd';

const ShippingAccountForm = () => {
    return (
        <table style={{width: '100%'}}>
            <tbody>
                <tr>
                    <td>
                        <InputShippingAccount/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <InputCourrierNameComponent/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button style={{ float: 'right' }} htmlType="submit" type="primary">Submit</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ShippingAccountForm