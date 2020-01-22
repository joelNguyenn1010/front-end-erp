import React from 'react'
import { Row, Col } from 'antd';
import TableContactDetail from './addCustomer/tableContactDetail';

interface AddCustomerProps {
    onSuccess?: () => void
}
const AddCustomer: React.FC<AddCustomerProps> = props => {


    console.log('from add')
    return (
        <div>
            <Row>
                <Col span={12}>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td>
                                        <TableContactDetail onSuccess={props.onSuccess} />

                                </td>
                            </tr>
                        </tbody>
                    </table>

                </Col>
            </Row>

        </div>

    )
}

export default AddCustomer