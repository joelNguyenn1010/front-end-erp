import React from 'react'
import SearchCreation from '../../../components/searchCreation'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_SUPPLIER_QUERY } from '../../../graphql/query/supplierQuery'
import { message } from 'antd'
import { changeItemValue } from '../../../store/action/itemAction/createItemAction'
import { ADD_SUPPLIER } from '../../../graphql/mutation/supplierMutation'

interface ItemSupplierProps {
    index : number
}

let timeout: any = null

const AddItemSupplier:React.FC<ItemSupplierProps> = props => {

    
    const items = useSelector((state:AppState) => state.createItemReducer.items)

    const limit: number = 5
    const page: number = 1

    const {data, loading, refetch, error} = useQuery(GET_SUPPLIER_QUERY, {
        variables: {name: '', limit, page}
    })

    if(error){
        message.error("We can't fetch supplier data, please try again")
    }

    const dispatch = useDispatch()

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            refetch({name: val, limit: 5, page: 1})
        }, 250)
    }

    const onSelected = (val: string, option: any) => {
        for(let i = 0; i < items.length; i ++){
            dispatch(changeItemValue(i, 'supplier', val))
            dispatch(changeItemValue(i, 'supplierId', parseInt(option.key)))
        }
        
    }

    const [addSupplier] = useMutation(ADD_SUPPLIER, {
        onError: () => {
            message.error("We can't create supplier, please try again")
        },
        onCompleted: (data: any) => {
            const name = data.createNewSupplier.name

            refetch({name: name, limit, page})

            message.success(`Supplier ${name} created`)
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
                input={items[props.index].supplier}
                loading={loading}
                content={data ? data.supplier ? data.supplier.data : [] : []}
                onClickCreate={onCreate}
            /> 
        </div>
    )
}

export default AddItemSupplier
