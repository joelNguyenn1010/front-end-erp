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



    const init = props.content.concat()

    const [contentData, setData]: [Array<Content>, (data: Array<Content>) => void ] = React.useState<Array<Content>>(init) 

    const onFilterContent = () => {
        if(props.input.length > 0) {
            const filter = props.content.filter(data => data.name.toLowerCase().startsWith(props.input.toLowerCase()))
            setData(filter)
        } else {
            setData(init)
        }
    }

    React.useEffect(() => {
        onFilterContent()
    }, [props.input])

    const onSelected = (key: string, name: string) => {
        if (props.selectedContent) {
            const selectContent: Content = {
                key,
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
                {contentData.map(data => (
                    <List.Item
                        onClick={() => onSelected(data.key, data.name)}
                        style={{ cursor: 'pointer', padding: '1rem' }} key={data.key}>
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