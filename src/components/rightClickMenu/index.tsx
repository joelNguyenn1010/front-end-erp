import React from 'react'
import { Dropdown, Menu } from 'antd'

interface RightClickMenuProps {
    menus: Array<React.ReactNode>,
    data: any
}

const RightClickMenu: React.FC<RightClickMenuProps> = props => {
    const menu = (
        <Menu>
            {props.menus.map((data: React.ReactNode, index: number) => (
                <Menu.Item key={index}>{data}</Menu.Item>
            ))}
 
        </Menu>
    )
    return (
        <Dropdown overlay={menu} trigger={['contextMenu']}>
            <tr
                style={{
                    textAlign: 'center',
                    background: '#f7f7f7',
                    height: 200,
                    lineHeight: '200px',
                    color: '#777',
                }}

            >
                {props.children}
            </tr>
        </Dropdown>
    )
}

export default RightClickMenu
