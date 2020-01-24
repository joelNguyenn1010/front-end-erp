import React from 'react'
import { Descriptions, Result } from 'antd'
import UpdateDescriptionField from '../../../../../../components/updateDescriptionField'
import { GET_NOTE_SUPPLIER } from '../../../../../../graphql/query/supplierQuery'
import { useQuery } from '@apollo/react-hooks'
import LoadingSpin from '../../../../../../components/loadingSpin'
import { Suppliers } from '../../../../../../store/contract/Suppliers'
import { useParams } from 'react-router-dom'
import { UPDATE_SUPPLIER } from '../../../../../../graphql/mutation/supplierMutation'

const SupplierNote = () => {

    const { id } = useParams()

    const { data, loading } = useQuery(GET_NOTE_SUPPLIER, { variables: { id } })



    if (!loading && data && data.findSupplier) {

        const supplier: Suppliers = {
            ...data.findSupplier
        }

        return (

            <React.Fragment>
                <Descriptions title="" bordered layout="vertical">

                    <Descriptions.Item label="Note for shipping" span={1}>


                        <Descriptions.Item label="Note for shipping"> <UpdateDescriptionField
                            name="noteShipping"
                            isTextarea={true}
                            value={supplier.noteShipping}
                            mutation={UPDATE_SUPPLIER}
                            id={id}

                        /></Descriptions.Item>


                    </Descriptions.Item>
                </Descriptions>
                <Descriptions title="" bordered layout="vertical">
                    <Descriptions.Item label="Note for Receiving"> <UpdateDescriptionField
                        name="noteReceiving"
                        isTextarea={true}
                        value={supplier.noteReceiving}
                        mutation={UPDATE_SUPPLIER}
                        id={id}

                    /></Descriptions.Item>
                </Descriptions>
            </React.Fragment>
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

export default SupplierNote
