import React from 'react'
import { Table } from 'antd'

const OverviewEmailComponent = () => {

    const columns = [
        {
            title: 'Email',
            key:'email',
        },
        {
            title: 'Status',
            key: 'status',
        }
    ]

    return (
        <Table 
            columns={columns}
            bordered
        />
    )
}

export default OverviewEmailComponent
