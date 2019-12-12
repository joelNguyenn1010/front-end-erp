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
                        <Link to="/model/add">Add Model</Link>
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