import React from 'react'
import { Table } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GET_SUPPLIER_QUERY } from '../../graphql/query'
import { Link, withRouter } from 'react-router-dom'

interface SupplierProps {
    history: any
}
const Supplier: React.FC<SupplierProps> = props => {


    const columns = [
        {
            title : 'Name',
            key: 'name',
            dataIndex: "name"
        }
    ]

    const { data } = useQuery(GET_SUPPLIER_QUERY, {variables: {name: ""}})

    return (
        <Table 
            rowKey="id"
            columns={columns}
            bordered
            onRowClick={(record: any, index: number, event: Event) => {
                if(record && record.id) {
                    const id = record.id
                    props.history.push(`/supplier/${id}`)
                }

                
            }}
            dataSource={data ? data.supplier ? data.supplier.data : []  : []}
        />
    )
}

export default withRouter(Supplier)
