import React from 'react';
import { Button } from 'antd';


interface CreateButtonProps {
    input: string,
    onClickCreate: (input: string) => void,
    setInput: (input: string) => void
}


const CreateButton: React.FC<CreateButtonProps> = props => {
    return (
        <div style={{ paddingTop: '1rem', display: 'flex', width: '100%', justifyContent: 'center' }}>
           {props.input.length > 0 && <Button
           onClick={() => {props.onClickCreate(props.input); props.setInput('')}}
           >Create</Button>}
        </div>
    )
}

export default CreateButton