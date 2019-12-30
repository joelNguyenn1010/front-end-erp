import React from 'react'
import SearchCreation from '../../../components/searchCreation'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_SUPPLIER_QUERY } from '../../../graphql/query'
import { message } from 'antd'
import { changeItemValue } from '../../../store/action/itemAction/createItemAction'
import { ADD_SUPPLIER } from '../../../graphql/mutation'

interface ItemSupplierProps {
    index : number
}

let timeout: any = null

const AddItemSupplier:React.FC<ItemSupplierProps> = props => {

    const name = useSelector((state:AppState) => state.createItemReducer.items[props.index].supplier)

    const {data, loading, refetch, error} = useQuery(GET_SUPPLIER_QUERY, {
        variables: {name: '', limit: 10, page: 1}
    })

    if(error){
        message.error("We can't fetch supplier data, please try again")
    }

    const dispatch = useDispatch()

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            refetch({name: val, limit: 10, page: 1})
        })
    }

    const onSelected = (val: string, option: any) => {
        dispatch(changeItemValue(props.index, 'supplier', val))
        dispatch(changeItemValue(props.index, 'supplierId', parseInt(option.key)))
    }

    const [addSupplier] = useMutation(ADD_SUPPLIER, {
        onError: () => {
            message.error("We can't create supplier, please try again")
        },
        onCompleted: (data: any) => {
            const name = data.createNewSupplier.name

            refetch({name: name, limit: 5, page: 1})

            message.success(`Supplier ${data.createNewSupplier.data} created`)
        }
    })

    const onCreate = (val: string) => {
        addSupplier({variables: {name: val}})
    }


    return (
        <div>
            <SearchCreation 
                onSearch={onSearch}
                onSelected={onSelected}
                placeholder="Supplier"
                input={name}
                loading={loading}
                content={data ? data.supplier ? data.supplier.data : [] : []}
                onClickCreate={onCreate}
            /> 
        </div>
    )
}

export default AddItemSupplier