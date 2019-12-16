import React from 'react';
import axios from 'axios';
import { Form, Input } from 'antd';
import Search from 'antd/lib/input/Search';
const FindSN: React.FC = () => {

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.trim();

        axios.get(`http://apisn.ipsupply.net:2580/api/check-sn/${input}`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
    }

    return(
        <Form.Item>
            <Search loading  onChange={onSearch}/>
        </Form.Item>
    )

}

export default FindSN