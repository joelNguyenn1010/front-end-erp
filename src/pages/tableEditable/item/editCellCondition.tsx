import React from 'react'
import SearchCreation from '../../../components/searchCreation'
import { GET_CONDITION_QUERY } from '../../../graphql/query'
import { useQuery } from '@apollo/react-hooks'

let timeout: any = null

interface EditCellCondtionProps {
    record: string
}

const EditCellCondition:React.FC<EditCellCondtionProps> = props => {

    // const value = props.record ? props.record : ""

    const {data, refetch} = useQuery(GET_CONDITION_QUERY,{
        variables:{name: '', limit: 6, page: 1}
    })

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            refetch({name: val, limit: 6, page: 1})
        })
    }

    const onSelected = () => {

    }

    return (
        <SearchCreation 
            defaultValue={props.record}
            input={props.record}
            onSearch={onSearch}
            onSelected={onSelected}
            content={data ? data.condition ? data.condition.data : [] : []}
            
        />
    )
}

export default EditCellCondition
