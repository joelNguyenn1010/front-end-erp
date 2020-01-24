import React, { useState } from 'react'
import SearchCreation from '../../../components/searchCreation'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_SUPPLIER_QUERY } from '../../../graphql/query/supplierQuery'
import client from '../../../graphql'
import { UPDATE_ITEM_SUPPLIER } from '../../../graphql/mutation/productMutation'
import {  ADD_SUPPLIER } from '../../../graphql/mutation/supplierMutation'
import { message } from 'antd'

interface EditCellSupplierProps {
    text: any,
    record: any
}

let timeout : any = null

const EditCellSupplier = (props: any) => {
    const{text, record} = props

    const [value, setValue] = useState<string>(text)

    const {data, refetch} = useQuery(GET_SUPPLIER_QUERY, {
        variables:{name: '', limit: 5, page: 1}
    }) 

    const onSearch = (val: string) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            refetch({name: val, limit: 5, page: 1})
        })
        
    }

    const [addSupplier] = useMutation(ADD_SUPPLIER, {
        onError: () => {
            message.error("We can't create supplier, please try again")
        },
        onCompleted: (data: any) => {
            const name = data.createNewSupplier.name

            refetch({name: name, limit: 5, page: 1})

            message.success(`Supplier ${name} created`)
        }
    })

    const onCreate = (val: string) => {
        addSupplier({variables: {name: val}})
    }

    const onSelected = (val: string, option: any) => {
        setValue(val)
        client.mutate({mutation: UPDATE_ITEM_SUPPLIER,  variables:{id: record.id, supplierId: parseInt(option.key)}})
        .then((res:any) => {
            message.success('Updated new supplier')
            
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
            content={data ? data.supplier ? data.supplier.data : [] : []}
            onClickCreate={onCreate}
        />
    )
}

export default EditCellSupplier
