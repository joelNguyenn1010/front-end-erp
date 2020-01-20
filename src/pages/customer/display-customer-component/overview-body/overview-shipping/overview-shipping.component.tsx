import React from 'react'
import {Table } from 'antd'

const OverviewShippingComponent = () => {

    const columns = [
        {
            title: "Courier",
            key: "courier"
          },
          {
            title: "Shipping Account",
            key: "shippingAccount"
          },
          {
            title: "Note for shipping",
            key: "noteShipping"
            
        },
        {
            title: "Note for receiving",
            key: "noteReceiving"
        },
    ]

    return (
        <Table 
            columns={columns}
            bordered
        />
    )
}

export default OverviewShippingComponent
