import React, { useState } from 'react'
import SearchCreation from '../../../components/searchCreation'
import { GET_CONDITION_QUERY } from '../../../graphql/query'
import { useQuery } from '@apollo/react-hooks'
import client from '../../../graphql'
import { UPDATE_ITEM_CONDITION } from '../../../graphql/mutation'
import { message } from 'antd'

let timeout: any = null

interface EditCellCondtionProps {
    text: any,
    record: any
}

const EditCellCondition:React.FC<EditCellCondtionProps> = props => {

    // console.log(props.index)
    // // const value = props.record ? props.record : ""
    // const name = useSelector((state: AppState) => state.createItemReducer.items[props.index].condition)
    // console.log('text',props.text)
    // console.log('record',props.record)
    

    const {data, refetch} = useQuery(GET_CONDITION_QUERY,{
        variables:{name: '', limit: 6, page: 1}
    })

    const [value, setValue] = useState<string>(props.text)

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            refetch({name: val, limit: 6, page: 1})
        })
    }

    

    const onSelected = (val: string, option: any) => {
        setValue(val)
        client.mutate({mutation: UPDATE_ITEM_CONDITION, variables: {id: props.record.id, conditionId: parseInt(option.key)}})
        .then((res: any) => {
            message.success('updated new condition')
            // refetchFunc(val)
       
            if(res.data.updateItem.conditions.name !== val){
                setValue(res.conditions.name)
            }
        })
        .catch(err => {
         
            message.error('cant updated condition')
        })

    }

    return (
        <SearchCreation 
            input={value}
            onSearch={onSearch}
            onSelected={onSelected}
            content={data ? data.condition ? data.condition.data : [] : []}
            
        />
    )
}

export default EditCellCondition
