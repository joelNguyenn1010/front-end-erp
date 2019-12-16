import React from 'react'
import { TableCell } from './TableCell'

interface TableEditRowProps {
    value: any
}

export const TableEditRow: React.FC<TableEditRowProps> = props => {

    const values = Object.entries(props.value)
    values.pop()
    return (
        <tr>
          {values.map((value) => {
              return (<TableCell value={value}/>)
          })}  
        </tr>
    )
}
