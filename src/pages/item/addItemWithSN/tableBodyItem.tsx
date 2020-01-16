import React from 'react'
import { TableRowItem } from './tableRowItem'

import { useSelector } from 'react-redux'
import { AppState } from '../../../store'
import { Item } from '../../../store/contract/Item'
import SubmitItemButton from './submitItemButton'


export const TableBodyItem: React.FC= () => {

    const items: any = useSelector((state: AppState) => state.createItemReducer.items)

    
    return (
        <tbody>
            <SubmitItemButton  />
            {items ? items.map((value: Item, index: number) => {
                
                return <TableRowItem  index={index} key={value.serialNumber} value={value} />
                
            }) : ''}
      </tbody>
    )
}
