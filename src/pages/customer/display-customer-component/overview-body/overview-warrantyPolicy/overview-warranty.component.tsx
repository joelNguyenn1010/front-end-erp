import React from 'react'
import { Table, Input, Row, Col, Descriptions, Result } from 'antd'
import { FIND_WARRENTY_SUPPLIER } from '../../../../../graphql/query/supplierQuery'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import EditableField from '../../overview-header/editable-field-supplier'
import { Suppliers } from '../../../../../store/contract/Suppliers'
import LoadingSpin from '../../../../../components/loadingSpin'
import UpdateDescriptionField from '../../../../../components/updateDescriptionField'
import { UPDATE_SUPPLIER } from '../../../../../graphql/mutation/supplierMutation'

export const OverviewWarrantyComponent = () => {

    const { id } = useParams()
    const { data, loading } = useQuery(FIND_WARRENTY_SUPPLIER, { variables: { id } })


    if (!loading && data && data.findSupplier) {

        const supplier: Suppliers = {
            ...data.findSupplier
        }
        return (
            <Descriptions layout="vertical" title="" bordered>

                <Row>
                    <Col>
                        <Descriptions.Item label="IPS policy" span={6}> <UpdateDescriptionField
                            name="ipsPolicy"
                            isTextarea={true}
                            value={supplier.ipsPolicy}
                            mutation={UPDATE_SUPPLIER}
                            id={id}

                        /></Descriptions.Item>
                    </Col>
                    <Col>
                        <Descriptions.Item label="Warranty policy" span={6}> <UpdateDescriptionField
                            name="warrantyPolicy"
                            isTextarea={true}
                            mutation={UPDATE_SUPPLIER}

                            value={supplier.warrantyPolicy}
                            id={id}
                            //
                        /></Descriptions.Item>
                    </Col>
                </Row>




            </Descriptions>
        )
    } else if (loading) {
        return <LoadingSpin />
    }
    else {
        return <Result
            status="error"
            subTitle={`Please check the url or make sure the id "${id}" is correct`}
            title="Can't get the company information">
        </Result>
    }

}
