import React from 'react'
import { Input, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { changeCustomerValue } from '../../../store/action/customerAction/createCustomerAction'
import SearchCreation from '../../searchCreation'

let timeout: any = null

const InputCurrencyComponent = () => {

    const name = useSelector((state:AppState) => state.CreateCustomerReducer.input.currency)

    const dispatch = useDispatch()

    // if(error){
    //     message.error('We cant fetch data from database, please try again')
    // }

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            // refetch({name:val, limit:10, page:1})
        }, 250)
    }

    const onSelected = (val: string, option: any) => {
        dispatch(changeCustomerValue('currency', val))
        dispatch(changeCustomerValue('currencyId', parseInt(option.key)))
    }

    return (
        <div>
            <SearchCreation 
                input={name}
                onSearch={onSearch}
                onSelected={onSelected}
            />
        </div>
    )
}
export default InputCurrencyComponent
