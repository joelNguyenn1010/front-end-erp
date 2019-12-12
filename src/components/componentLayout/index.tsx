import React from 'react'
import { Layout } from 'antd';
import HeaderLink from '../layout/header';
const { Header, Content, Footer, Sider } = Layout;
interface ComponentLayoutProps {
    headersContent?: React.ReactNode
    footerContent?: React.ReactNode
}


const ComponentLayout: React.FC<ComponentLayoutProps> = props => {
    return (
        <Layout>
            <Header>
                    <HeaderLink />
            </Header>

            <Content>
                {props.children}
            </Content>

            {props.footerContent && <Footer>props.footerContent</Footer>}
        </Layout>
    )
};

export default ComponentLayout