import React from 'react'
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
interface ComponentLayoutProps {
    headersContent?: React.FC
    footerContent?: React.FC
}


const ComponentLayout: React.FC<ComponentLayoutProps> = props => {
    return (
        <Layout>
            <Header>
                {props.headersContent}
            </Header>

            <Content>
                {props.children}
            </Content>

            {props.footerContent && <Footer>props.footerContent</Footer>}
        </Layout>
    )
};

export default ComponentLayout