import React from 'react'
import { Row, Col } from 'antd';
import TableContactDetail from './addCustomer/addContactDetail/contact-detail-create-form';

interface AddCustomerProps {
    onSuccess?: () => void
}
const AddCustomer: React.FC<AddCustomerProps> = props => {



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