import React, { Children } from 'react'
import { Table } from 'antd'

const OverviewNoteComponent = () => {

    const columns = [

        
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
