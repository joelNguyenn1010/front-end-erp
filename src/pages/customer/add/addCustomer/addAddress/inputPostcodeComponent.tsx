import React from 'react'
import SearchCreation from '../../../../../components/searchCreation'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../../../store'
import { changeCustomerValue } from '../../../../../store/action/customerAction/createCustomerAction'
import { message } from 'antd'


let timeout: any = null
const InputPostcodeComponent = () => {

    const name = useSelector((state:AppState) => state.CustomerReducer.input.postcode)

    const dispatch = useDispatch();

    // if(error){
    //     message.error('We cant fetch data from database, please try again')
    // }

    const onSelected = (val: string, option: any) => {
        dispatch(changeCustomerValue('postcode', val))
        dispatch(changeCustomerValue('postcodeId', parseInt(option.key)))
    }

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout= setTimeout(function() {
            // refetch({name: val, limit:10, page:1})
        },250)
    }


    return (
        <div>
            <SearchCreation 
                onSelected={onSelected}
                onSearch={onSearch}
                input={name}
                
            />
        </div>
    )
}

export default InputPostcodeComponent
