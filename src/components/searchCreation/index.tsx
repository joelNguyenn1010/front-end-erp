import React from 'react';
import { Input, Popover } from 'antd';
import ContentData from './ContentData';
import CreateButton from './CreateButton';

export interface Content {
    key: string,
    name: string,
}


interface SearchCreationProps {
    content?: Array<Content>,
    loading?: boolean,
    onSelected?: (selected: Content) => void,
    onClickCreate: (input: string) => void,
    onChangeInput: (input: string) => void
}


const SearchCreation: React.FC<SearchCreationProps> = props => {

    const [focus, setFocus]: [boolean, (data: boolean) => void] = React.useState<boolean>(false)

    const [input, setInput]: [string, (data: string) => void] = React.useState<string>('')

    const onFocusInput = (inc: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true)
    }

    const onOutFocusInput = (out: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setFocus(false)
        }, 100)
    }



    const onChangeInput = (ele: React.ChangeEvent<HTMLInputElement>) => {
        setInput(ele.target.value)
        props.onChangeInput(ele.target.value)
    }

    return (
        <Input.Group>
            <Popover
            placement="bottom"
                content={
                    <React.Fragment>
                        {props.content && <ContentData
                            input={input}
                            selectedContent={props.onSelected}
                            content={props.content} />}
                        <CreateButton input={input} onClickCreate={props.onClickCreate} />
                    </React.Fragment>
                }

                visible={focus}>
                <Input placeholder="Search"
                    onFocus={onFocusInput}
                    onBlur={onOutFocusInput}
                    onChange={onChangeInput}
                    value={input}
                />
            </Popover>
        </Input.Group>
    )
}

export default SearchCreation