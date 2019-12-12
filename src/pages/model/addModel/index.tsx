import React from 'react';
import { Form } from 'antd';
import ManufactorCreation from './manufactorCreation';


const AddModel: React.FC = () => {
    return <Form>
        <Form.Item style={{width: '10rem'}}>
            <ManufactorCreation />

        </Form.Item>
    </Form>
}

export default AddModel