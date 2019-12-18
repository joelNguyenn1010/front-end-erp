import React from 'react'
import { TableRowItem } from './tableRowItem'

import { useSelector } from 'react-redux'
import { AppState } from '../../../store'
import { Item } from '../../../store/reducer/createItemReducer'

export const TableBodyItem: React.FC= () => {

    const items: any = useSelector((state: AppState) => state.createItemReducer.items)

    console.log("item",items)
    
    return (
        <tbody>
            {items ? items.map((value: Item, index: number) => {
                return <TableRowItem index={index} key={value.sn} value={value} />
            }) : ''}
      </tbody>
    )
}
