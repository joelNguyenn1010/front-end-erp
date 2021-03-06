import React from 'react'
import {EditItemContext} from '../../provider/EditItemProvider'
import { TableEditRow } from './TableEditRow'

interface TableRowProps {
}
export const TableRow: React.FC<TableRowProps> = props => {

    const context: any = React.useContext(EditItemContext)

    return context.data.map((value: any) => {
        return <TableEditRow value={value} key={value.key} />
    })
    
}
