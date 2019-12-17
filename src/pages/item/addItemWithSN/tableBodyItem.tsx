import React from 'react'
import { TableRowItem } from './tableRowItem'
import { CreateItemContext } from '../../../context/provider/createItemContext'

export const TableBodyItem = () => {

    const {reducer} = React.useContext<any>(CreateItemContext)

    return (
        <tbody>
            {reducer ? reducer.state.map(() => {
                return <TableRowItem />
            }) : ''}
            
            {/* <TableRowItem />
            <TableRowItem />
            <TableRowItem />
            <TableRowItem />
            <TableRowItem />
            <TableRowItem />
            <TableRowItem />
            <TableRowItem /> */}
      </tbody>
    )
}
