import React from 'react';
import { List, Typography, Button, Input } from 'antd';
import { Content } from '.';

import { Empty } from 'antd';

interface ContentDataProps {
    content: Array<Content>,
    selectedContent?: (selected: Content) => void,
    input: string
}


const ContentData: React.FC<ContentDataProps> = props => {

    const onSelected = (id: number, name: string) => {
        if (props.selectedContent) {
            const selectContent: Content = {
                id,
                name
            }
            props.selectedContent(selectContent)
        }
    }


    return (
        <React.Fragment>
           {props.content.length > 0 ? <List
            size="small"
                style={{ overflow: 'auto', maxHeight: '10rem',  clear: 'both' }}
            >
                {props.content.map(data => (
                    <List.Item        
                        onClick={() => onSelected(data.id, data.name)}
                        style={{ cursor: 'pointer', padding: '1rem' }} key={data.id}>
                        <Typography.Paragraph>
                            {data.name}
                        </Typography.Paragraph>
                    </List.Item>
                ))}

                </List> 
            : 
            
            <Empty />
            }

      
        </React.Fragment>
    )
}

export default ContentData