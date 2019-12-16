import React from 'react';
import { Form } from 'antd';
import ManufactorCreation from './manufactorSearch';
import CategorySearch from './categorySearch';
import AddName from './addName';
import SubmitModel from './submitModel'
import HasSerialModel from './hasSerialModel';

const AddModel: React.FC = () => {


    return <Form>

        <AddName />
        <Form.Item>
            <ManufactorCreation />
        </Form.Item>
        <Form.Item>
            <CategorySearch />
        </Form.Item>

        <Form.Item>
            <HasSerialModel />
            
        </Form.Item>
        <SubmitModel />

    </Form>
}

export default AddModel