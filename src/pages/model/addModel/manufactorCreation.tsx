import React from 'react';
import SearchCreation, { Content } from '../../../components/searchCreation';
import { useQuery } from '@apollo/react-hooks';
import { MANUFACTURE_QUERY } from '../../../graphql/query';


const ManufactorCreation: React.FC = () => {

  

    const [value, setValue]: [Array<Content>, (value: Array<Content>) => void] = React.useState<Array<Content>>([])

    const onCreate = (input: string) => {

    }

    const [search, setSearch] = React.useState<string>('')

    const {loading, error, data} = useQuery(MANUFACTURE_QUERY, {
        variables: { name: search }
    })

    console.log(loading)
    console.log(error)
    console.log(data)

    return (
        <SearchCreation
            loading={loading}
            content={value}
            onClickCreate={onCreate}
            onChangeInput={(input: string) => {setSearch(input)}}

        />
    )
}   

export default ManufactorCreation