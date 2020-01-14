import React from 'react'
import { Table } from 'antd'

const OverviewCustomerComponent = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Type',
            dataIndex: 'type'
        },
        {
            title: 'Pricing level',
            dataIndex: 'pricingLevel'
        },
        {
            title: 'Country',
            dataIndex: 'country'
        }
    ]


    return (
        <div>
            <Table 
                columns={columns}
            />
        </div>
    )
}
export default OverviewCustomerComponent
