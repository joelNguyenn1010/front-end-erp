import React from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

const Box: React.FC = props => {
    return(
        <Content>
            {props.children}
        </Content>
    )
}

export default Box