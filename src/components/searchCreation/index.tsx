import React, { useState } from 'react';
import { Select, Icon, Button, Divider, Spin } from 'antd';

export interface Content {
    id: number,
    name: string,

}


interface SearchCreationProps {
    content?: Array<Content>,
    onSelected?: any,
    onClickCreate?: (input: string) => void,
    resetInput?: () => void,
    loading?: boolean
    onSearch: (input: string) => void,
    placeholder?: string
}


const SearchCreation: React.FC<SearchCreationProps> = props => {

    const [currentValue, setValue] = useState<string>('')




    return (
        <React.Fragment>
            <Select
            placeholder={props.placeholder}
                onSelect={props.onSelected}

                filterOption={false}
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div
                            onMouseDown={e => e.preventDefault()}
                            style={{ padding: '4px 8px', display: 'flex', justifyContent: 'center' }}
                        >
                {props.onClickCreate &&  <Button onClick={() =>{
                    if(props.onClickCreate)
                        props.onClickCreate(currentValue)
                }
                    
                    } ><Icon type="plus" /></Button> }
                        </div>
                    </div>
                )}
                showSearch
                onSearch={(val: string) => {
                    props.onSearch(val)
                    setValue(val)
                }}
            >

                {!props.loading ? props.content && props.content.map((val) => (
                    <Select.Option key={val.id}>{val.name}</Select.Option>
                )) :
                    <Select.Option key={1}><div
                        onMouseDown={e => e.preventDefault()}
                        style={{ padding: '4px 8px', display: 'flex', justifyContent: 'center' }}
                    >
                        <Spin />
                    </div>
                    </Select.Option>
                }
            </Select>
        </React.Fragment>
    )
}

export default SearchCreation