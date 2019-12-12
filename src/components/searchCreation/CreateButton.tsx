import React from 'react';
import { Button } from 'antd';


interface CreateButtonProps {
    input: string
}


const CreateButton: React.FC<CreateButtonProps> = props => {
    return (
        <div style={{ paddingTop: '1rem' }}>
           {props.input.length > 0 && <Button>Create</Button>}
        </div>
    )
}

export default CreateButton