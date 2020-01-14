import React from 'react'
import { Row, Col, Table } from 'antd';
import TableContactDetail from '../../../components/addCustomer/tableRepresentative';
import TableRepresentative from '../../../components/addCustomer/tableContactDetail'
import TableAddressDetail from '../../../components/addCustomer/tableAddressDetail'
import TablePaymentDetail from '../../../components/addCustomer/tablePaymentDetail';
import TableWarrantyPolicy from '../../../components/addCustomer/tableWarrantyPolicy'


const AddCustomer: React.FC = () => {

    // const emails: any = useSelector((state:AppState) => state.CreateCustomerEmailReducer.emails)

    return (
        <div>
            <Row>
                <Col span={12}>
                    <table style={{width:'100%'}}>
                        <thead>
                            Contact Detail
                        </thead>
                        <tbody>
                            <TableContactDetail />
                        </tbody>
                    </table>

                </Col>
                <Col span={12}>
                    <table style={{width:'100%'}}>
                        <thead>
                            Representative:
                        </thead>
                        <tbody>
                            <TableRepresentative />
                        </tbody>
                    </table>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <table style={{width:'100%'}}>
                        <thead>
                            Address:
                        </thead>
                        <tbody>
                            <TableAddressDetail />
                        </tbody>
                    </table>
                </Col>
                <Col span={12}>
                    <table>
                        <thead>
                            Payment Detail:
                        </thead>
                        <tbody>
                            <TablePaymentDetail />
                            <TableWarrantyPolicy />
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>
        
    )
}

export default AddCustomer