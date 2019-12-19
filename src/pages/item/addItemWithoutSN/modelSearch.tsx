import React from 'react'
import SearchCreation from '../../../components/searchCreation'
import { useQuery } from '@apollo/react-hooks'
import { GET_MODEL_QUERY } from '../../../graphql/query'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { message } from 'antd'
import { ChangeDataAction } from '../../../store/action/createItemWithoutSNAction'

let timeout: any = null

const ModelSearch: React.FC = () => {

    const name = useSelector((state: AppState) => state.CreateItemWithoutSNReducer.input.model)

    const dispatch: any = useDispatch();

    const {loading, data, refetch, error} = useQuery(GET_MODEL_QUERY, {
        variables: {name: '', limit: 5, page: 1}
    })


    if(error){
        message.error("We can't fetch the manufacture, please try again")
    }

    const onSelected = (val: string, option: any) => {
        console.log(option)
        dispatch(ChangeDataAction('model', val))
        dispatch(ChangeDataAction('modelId', parseInt(option.key)))
    }


    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            refetch({name: val, limit:5, page:1 })
        }, 250)
    }

    return (
        <React.Fragment>
            <label>Model: </label>
            <SearchCreation 
                placeholder={"Model"}
                loading={loading}
                onSearch={onSearch}
                input={name}
                content={data ? data.model ? data.model.data : [] : []}
                onSelected={onSelected}
            />
        </React.Fragment>
    )
}

export default ModelSearch
