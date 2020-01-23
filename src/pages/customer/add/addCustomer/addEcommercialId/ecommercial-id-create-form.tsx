// @ts-ignore
import React from "react"
import AddEcommercialId from "./addEcommercialId";
import AddEcommercialName from "./addEcommercialName";
import {Button} from "antd";

const EcommercialForm = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <AddEcommercialName/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <AddEcommercialId/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <Button style={{ float: 'right' }} htmlType="submit" type="primary">Submit</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EcommercialForm