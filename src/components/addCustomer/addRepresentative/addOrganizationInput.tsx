import React from 'react'
import SearchCreation from "../../searchCreation"
import { useQuery } from '@apollo/react-hooks'
import { GET_MODEL_QUERY } from '../../../graphql/query'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { message } from 'antd'

let timeout : any = null

const OrganizationInput = () => {

    const name = useSelector((state: AppState) => state.CreateCustomerReducer.input.organisation)

    

    

    // if(error) {
    //     message.error("We can't fetch data. Please try again")
    // }

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(function() {
            // refetch({name: val})
        })
    }

    return (
        <div>
            
            <SearchCreation 
                onSearch={onSearch}
                input={name}
                
            />
        </div>
    )
}

export default OrganizationInput
