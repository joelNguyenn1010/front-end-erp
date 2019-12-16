import React, { useState, useContext } from 'react';
import SearchCreation, { Content } from '../../../components/searchCreation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MANUFACTURE_QUERY } from '../../../graphql/query';
import { ADD_MANUFACTURE } from '../../../graphql/mutation';
import { message } from 'antd';
import { CreateModelContext } from '../../../context/provider/createModelContext';


const ManufactorSearch: React.FC = () => {


    const  context: any = useContext(CreateModelContext)

    const {loading, error, data, refetch } = useQuery(MANUFACTURE_QUERY, {
        // bỏ varialbe search vào
        variables: { name: '' },
    })

   

    if(error) {
        message.error("We can't fetch the manufacture, please try again")
    }

    // Để add manufacture mới
    const [addManufacture] = useMutation(ADD_MANUFACTURE, {
        onError: (error: any) => {
            // xem có lỗi hay không
            message.error("We can't create new manufacture, please try again")
        },
        onCompleted: (data: any) => {
            const name = data.createNewManufacture.name;
            // fetch lại data mới khi tạo
            refetch({name: name})
            message.success(`Manufacture ${data.createNewManufacture.name} created`)
        }
    })


    // execute khi button create chạy
    const onCreate = (val: string) => {
        addManufacture({ variables: { name: val } })
    }


    const onSelected = (val: string) => {
        // cái này được gọi sau khi người dùng chọn, nên bỏ vào redux, nó sẽ trả về id của cái select
       context.value.manufactorId = parseInt(val)
      
    }

    let timeout: any = null;

    const onSearch = (val: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({name: val})
        }, 220);
    }
    

    return (
        <React.Fragment>
            <SearchCreation
                placeholder="manufacture"
                loading={loading}
                content={data ? data.manufactor ? data.manufactor.data : [] : []}
                onClickCreate={onCreate}
                onSelected={onSelected}
                onSearch={onSearch}
            />
        </React.Fragment>

    )
}

export default ManufactorSearch