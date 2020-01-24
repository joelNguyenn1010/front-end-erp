import React, { useContext, useState } from 'react';
import SearchCreation from '../../../components/searchCreation';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { message } from 'antd';
import { CATEGORY_QUERY } from '../../../graphql/query/modelQuery';
import { ADD_CATEGORY } from '../../../graphql/mutation/modelMutation';
import { CreateModelContext } from '../../../context/provider/createModelContext';
import { useDispatch, useSelector } from 'react-redux';
import { changeValueAction } from '../../../store/action/model/createModelAction';
import { AppState } from '../../../store';

let timeout: any = null;
const CategorySearch: React.FC = () => {


    const dispatch: any = useDispatch()

    const name = useSelector((state: AppState) => state.createModelReducer.input.category)


    const { loading, error, data, refetch } = useQuery(CATEGORY_QUERY, {
        // bỏ varialbe search vào
        variables: { name: '' },
    })


    if (error) {
        message.error("We can't fetch the category, please try again")
    }

    // Để add manufacture mới
    const [addManufacture] = useMutation(ADD_CATEGORY, {
        onError: (error: any) => {
            // xem có lỗi hay không
            message.error("We can't create new category, please try again")
        },
        onCompleted: (data: any) => {
            const name = data.createNewCategory.name;
            // fetch lại data mới khi tạo
            refetch({ name: name })
            message.success(`Category ${data.createNewCategory.name} created`)
        }
    })


    // execute khi button create chạy
    const onCreate = (val: string) => {
        addManufacture({ variables: { name: val } })
    }


    const onSelected = (val: string, option: any) => {
        // cái này được gọi sau khi người dùng chọn, nên bỏ vào redux, nó sẽ trả về id của cái select
        dispatch(changeValueAction('category', val))
        dispatch(changeValueAction('categoryId', parseInt(option.key)))
        refetch({ name: '' })

    }



    const onSearch = (val: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({name: val})
        }, 520);
    }



    return (
        <React.Fragment>
            <label>Category:</label>
            <SearchCreation
                placeholder="Category"
                loading={loading}
                content={data ? data.category ? data.category.data : [] : []}
                onClickCreate={onCreate}
                onSelected={onSelected}
                onSearch={onSearch}
                input={name}
       
            />
        </React.Fragment>

    )


}

export default CategorySearch