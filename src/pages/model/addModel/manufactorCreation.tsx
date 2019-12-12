import React from 'react';
import SearchCreation, { Content } from '../../../components/searchCreation';


const ManufactorCreation: React.FC = () => {

    const [data, setData]: [Array<Content>, (value: Array<Content>) => void] = React.useState<Array<Content>>([])

    const onCreate = (input: string) => {

    }

    return (
        <SearchCreation
            content={data}
            onClickCreate={onCreate}
        />
    )
}

export default ManufactorCreation