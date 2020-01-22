import React from 'react'
import { Table, Result } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GET_SUPPLIER_QUERY } from '../../graphql/query'
import { Link, withRouter } from 'react-router-dom'
import AddSupplier from './addSupplier'
import LoadingSpin from '../../components/loadingSpin'

interface SupplierProps {
    history: any
}
const Supplier: React.FC<SupplierProps> = props => {


    const columns = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: "name"
        },
        {
            title: 'Contact Type',
            key: 'contactType',
            dataIndex: "contactType"
        },
        {
            title: 'Pricing Level',
            key: 'pricingLevel',
            dataIndex: 'pricingLevel'
        }
    ]


    const { data, refetch, loading } = useQuery(GET_SUPPLIER_QUERY, { variables: { name: "" } })

    const onSuccesCreate = () => {
        refetch({name: ""})
    }

    const renderDisplay = () => {
        if(loading) {
            return <LoadingSpin />
        } else if(data && data.supplier && data.supplier.data) {
            return  <Table
            rowKey="id"
            columns={columns}
            bordered
            onRowClick={(record: any, index: number, event: Event) => {
                if (record && record.id) {
                    const id = record.id
                    props.history.push(`/supplier/${id}`)
                }


            }}
            dataSource={data ? data.supplier ? data.supplier.data : [] : []}
        />
        } else {
            return <Result
            status="error"
            subTitle={`Something went wrong when we try to get the suppliers, please try again`}
            title="Can't get the suppliers">
          </Result>
        }
    }
    return (
        <React.Fragment>
            <AddSupplier onSuccess={onSuccesCreate}/>

            {renderDisplay()}
           
        </React.Fragment>

    )
}

export default withRouter(Supplier)
