import React, { useState } from 'react'
import SearchCreation from '../../../components/searchCreation'
import { CreateItemContext } from '../../../context/provider/createItemContext';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_SUPPLIER_QUERY } from '../../../graphql/query';
import { message } from 'antd';
import { ADD_SUPPLIER } from '../../../graphql/mutation';

const FindSupplier: React.FC = () => {
    const context: any = React.useContext(CreateItemContext);

    const [input, setInput] = useState<string>('')


    const { loading, error, data, refetch } = useQuery(GET_SUPPLIER_QUERY, {
        // bỏ varialbe search vào
        variables: { name: '' },
    })



    //display error if can not connact to provider
    if (error) {
        message.error("We can't fetch data supplier, please try again")
    }

    //add data that user selected and return id
    const onSelect = (e: string) => {
        context.value.supplierId = parseInt(e)
    }


    const [addSupplier] = useMutation(ADD_SUPPLIER, {
        onError: () => {
            message.error("We can't create new supplier, please try again")
        },
        onCompleted: (data: any) => {
            //create new name in mutation ADD_SUPPLIER
            const name = data.createNewSupplier.name
            //refetch API 

            refetch({ name: name })
            //Print message
            message.success(`Supplier ${data.createNewSupplier.name} created`)

        }
    })

    const onCreate = (e: string) => {
        addSupplier({ variables: { name: e } })
    }


    // Search on content of data with timeout
    let timeout: any = null;

    const onSearch = (val: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({ name: val })
        }, 220);
    }

    return (
        <React.Fragment>
            <SearchCreation
                input={input}

                placeholder='Supplier'
                loading={loading}
                onSearch={onSearch}
                onSelected={onSelect}
                //if have data will display all data or return null array
                content={data ? data.supplier ? data.supplier.data : [] : []}
                onClickCreate={onCreate}

            />
        </React.Fragment>
    )
}

export default FindSupplier;
