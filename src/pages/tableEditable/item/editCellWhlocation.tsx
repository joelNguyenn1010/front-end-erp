import React, { useState } from 'react'
import SearchCreation from '../../../components/searchCreation'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_WHLOCATION_QUERY } from '../../../graphql/query'
import client from '../../../graphql'
import { UPDATE_ITEM_WHLOCATION, ADD_WHLOCATION } from '../../../graphql/mutation'
import { message } from 'antd'

interface EditCellWhlocationProps {
    record: any,
    text: any
}

let timeout: any = null

const EditCellWhlocation:React.FC<EditCellWhlocationProps> = (props: any) => {
    const { record, text} = props

    const [value, setValue] = useState<string>(text)

    const {data, refetch} = useQuery(GET_WHLOCATION_QUERY,{
        variables:{name:'', limit: 5, page: 1}
    })


    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            refetch({name: val, limit: 5, page: 1})
        }, 250);
    }

    

    const onSelected = (val: string, option: any) => {
        setValue(val)
        client.mutate({mutation: UPDATE_ITEM_WHLOCATION, variables:{id: record.id, whlocationId: parseInt(option.key)}})
        .then(res => {
            message.success('Updated new wh location')
        })
        .catch(err => {
            setValue(text)
            message.error('Cant update supplier, please try again')
        })
    }

    return (
        <SearchCreation 
            input={value}
            onSearch={onSearch}
            onSelected={onSelected}
            content={data ? data.whlocation ? data.whlocation.data : [] : []}
            
        />
    )
}

export default EditCellWhlocation
