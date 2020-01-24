import React from 'react'
import { Dropdown, Menu } from 'antd'

interface TableCellRightClickProps {
    // menu: React.ReactNode

}

const TableCellRightClick: React.FC<any> = props => {

    const { record, HandleDelete } = props

    const id = record.id
    const name = record.name

    console.log(props)



    const menu = (
        <Menu>
         
            {props.HandleDelete ?    <Menu.Item><HandleDelete id={id} name={name} /> </Menu.Item>: ''}   
        </Menu>
    );

    return (

        <Dropdown
            overlay={menu} trigger={['contextMenu']}>
            <td>
                {props.children}
            </td>
        </Dropdown>

    )
}

export default TableCellRightClick
