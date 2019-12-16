import React from 'react';
import { Input } from 'antd';
import Axios, { AxiosResponse } from 'axios';
export type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'

interface SearchAPIProps {
    method: Method,
    url: string,
    onSuccess: (value: AxiosResponse<any>) => void,
    onError: (err: any) => void,
    getInput?: (value: string) => void
}
const SearchAPI: React.FC<SearchAPIProps> = props => {
    let timeout: any = null;


    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        if(props.getInput) {
            props.getInput(e.target.value)
        }
       
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            Axios({
                method: props.method,
                url: props.url
            })
                .then((value: AxiosResponse<any>) => props.onSuccess(value))
                .catch((err: any) => props.onError(err))

        }, 220);
    }

    return (
        <Input onChange={onSearch} />
    )
}

export default SearchAPI