import React, { FormEvent, ChangeEvent } from 'react'
import { Form, Icon, Input, Button } from 'antd'

interface QueryFormProps {
    handleSubmit: (event: FormEvent) => void,
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
    color?: string,
    value: string
}


const QueryForm: React.FC<QueryFormProps> = props => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Input
                onChange={props.handleInputChange}
                size={"large"}
                value={props.value}
                suffix={
                    <Button 
                    style={{backgroundColor: props.color}}
                    htmlType="submit" 
                    type="primary" 
                    size="small"><Icon type="plus-circle" />Add</Button>
                }
            />
        </Form>
    )
}

export default QueryForm