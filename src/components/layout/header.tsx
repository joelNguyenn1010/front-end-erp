import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';

const HeaderLink: React.FC = () => {
    return (
        <Dropdown
            overlay={
                <Menu>
                    <Menu.Item>
                        <Link to="/model">Model</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/item">Item</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/model/add">Add Model</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/item/add">Add Item</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/add/item/noserial">Add Item With No SN</Link>
                    </Menu.Item>
                </Menu>
            }
        >

            <Button
            >Product</Button>
                
        </Dropdown>
    )
}

export default HeaderLink