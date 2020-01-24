import React from 'react'
import {Button} from 'antd'


import AddEmailSupplier from "./add-email-supplier";
import AddEmailNameSupplier from "./add-email-name-supplier";


const EmailSupplierForm = () => {
    // @ts-ignore
    return (
        <table style={{width: '100%'}}>
            <tbody>
                <tr>
                    <td>
                        <AddEmailSupplier/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <AddEmailNameSupplier/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Button style={{float: 'right'}} htmlType="submit" type="primary">Submit</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EmailSupplierForm