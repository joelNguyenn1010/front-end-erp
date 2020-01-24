import React from 'react'
import { Table } from 'antd'

const Courier = () => {
   const columns = [
        {
            title: 'Courier',
            key:'email',
        },
        {
            title: 'Shipping Account',
            key:'shippingAccount',
        },
    ]
    return (
        <Table
            columns={columns}
        />
    )
}

export default Courier
