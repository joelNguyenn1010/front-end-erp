import React, { useEffect, useState } from 'react';
import SearchCreation, { Content } from '../../../components/searchCreation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MANUFACTURE_QUERY } from '../../../graphql/query';
import { ADD_MANUFACTURE } from '../../../graphql/mutation';
import { Button, message } from 'antd';


const ManufactorCreation: React.FC = () => {


    const [search, setSearch] = useState<string>('')

    const { loading, error, data, refetch } = useQuery(MANUFACTURE_QUERY, {
        variables: { name: search },
        notifyOnNetworkStatusChange: true,
    })




    const [addManufacture] = useMutation(ADD_MANUFACTURE, {
        onError: () => {
            message.error("We can't create new manufacture, please try again")
        },
        onCompleted: (data: any) => {
            refetch({name: ""})
            message.success("Manufacture created")
        }

    })


    const onCreate = (input: string) => {
        addManufacture({ variables: { name: input } })

    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    console.log(data)

    return (
        <React.Fragment>
            <SearchCreation
                loading={loading}
                content={data ? data.manufactor ? data.manufactor.data : [] : []}
                onClickCreate={onCreate}
                input={search}
                setSearch={setSearch}
                onChange={onChangeInput}
            />
        </React.Fragment>

    )
}

export default ManufactorCreation