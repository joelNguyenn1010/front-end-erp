import React from 'react';
import { Input, Popover } from 'antd';
import ContentData from './ContentData';
import CreateButton from './CreateButton';
import { Spin } from 'antd';

export interface Content {
    id: number,
    name: string,
}


interface SearchCreationProps {
    content?: Array<Content>,
    loading?: boolean,
    onSelected?: (selected: Content) => void,
    onClickCreate: (input: string) => void,
    resetInput?: () => void,
    input: string,
    setSearch: (input: string) => void,
    onChange?: (input: React.ChangeEvent<HTMLInputElement>) => void
}


const SearchCreation: React.FC<SearchCreationProps> = props => {

  

    const [focus, setFocus]: [boolean, (data: boolean) => void] = React.useState<boolean>(false)

    const onFocusInput = (inc: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true)
    }

    const onOutFocusInput = (out: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setFocus(false)
        }, 100)
    }

  

    return (
        <Input.Group>
            <Popover
            placement="bottom"
                content={
                    <React.Fragment>
                        {!props.loading ? props.content && <ContentData
                            input={props.input}
                            selectedContent={props.onSelected}
                            content={props.content} /> 
                            : 
                            <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                                <Spin />
                            </div>
                            }
                        <CreateButton input={props.input} setInput={props.setSearch} onClickCreate={props.onClickCreate} />
                    </React.Fragment>
                }

                visible={focus}>
                <Input placeholder="Search"
                    onFocus={onFocusInput}
                    onBlur={onOutFocusInput}
                    onChange={props.onChange}
                    value={props.input}
                />
            </Popover>
        </Input.Group>
    )
}

export default SearchCreation