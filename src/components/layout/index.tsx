import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutBox: React.FC = props => {
    const [show, setShow]: [boolean, (data: boolean) => void] = React.useState<boolean>(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={show} onCollapse={setShow}>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        <Icon type="swap-right" />
                        <span>Product</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            {props.children}
        </Layout>
    )
}

export default LayoutBox