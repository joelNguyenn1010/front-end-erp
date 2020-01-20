import React, { Children } from 'react'
import { Table } from 'antd'

const OverviewNoteComponent = () => {

    const columns = [

        {
            title: "Note for shipping",
            key: "noteShipping"
            
        },
        {
            title: "Note for receiving",
            key: "noteReceiving"
        },
        {
            title: "Note",
            key: "note"
        }
    ]

    return (
        <Table 
            columns={columns}
            bordered
        />
    )
}

export default OverviewNoteComponent
