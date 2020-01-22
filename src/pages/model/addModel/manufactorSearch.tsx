import React, { useState, useContext } from 'react';
import SearchCreation from '../../../components/searchCreation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MANUFACTURE_QUERY } from '../../../graphql/query';
import { ADD_MANUFACTURE } from '../../../graphql/mutation';
import { message } from 'antd';
import { CreateModelContext } from '../../../context/provider/createModelContext';
import { useDispatch, useSelector } from 'react-redux';
import { changeValueAction } from '../../../store/action/model/createModelAction';
import { AppState } from '../../../store';
import client from '../../../graphql';
import { gql } from 'apollo-boost';

let timeout: any = null;
const ManufactorSearch: React.FC = () => {
 


    const name = useSelector((state: AppState) => state.createModelReducer.input.manufactor)

    const dispatch: any = useDispatch()

// inital State to make a default state as cisco
    React.useEffect(() => {
        
        client.query({
            query: gql`
        query{
            manufactor(limit:1, page:1, name: "cisco") {
              data {
                name
                id
              }
            }
          }
          
        `})
    
        .then((res: any) => {
        
            if(res && res.data && res.data.manufactor && res.data.manufactor.data.length > 0) {
                dispatch(changeValueAction('manufactor', res.data.manufactor.data[0].name))
                dispatch(changeValueAction('manufactorId', parseInt(res.data.manufactor.data[0].id)))
            }
            // localStorage.setItem('manufactor', )
        })


    }, [])

    const { loading, error, data, refetch } = useQuery(MANUFACTURE_QUERY, {
        // bỏ varialbe search vào
        variables: { name: '' },
    })


    if (error) {
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
            refetch({ name: name })
            message.success(`Manufacture ${data.createNewManufacture.name} created`)
        }
    })


    // execute khi button create chạy
    const onCreate = (val: string) => {
        addManufacture({ variables: { name: val } })
    }


    const onSelected = (val: string, option: any) => {
        refetch({ name: '' })
        dispatch(changeValueAction('manufactor', val))
        dispatch(changeValueAction('manufactorId', parseInt(option.key)))
    }



    const onSearch = (val: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({ name: val })
        }, 220);
    }


    return (
        <React.Fragment>
            <label>Manufacture:</label>
            <SearchCreation
                placeholder="Manufacture"
                loading={loading}
                content={data ? data.manufactor ? data.manufactor.data : [] : []}
                onClickCreate={onCreate}
                onSelected={onSelected}
                onSearch={onSearch}
                input={name}
      
            />
        </React.Fragment>

    )
}

export default ManufactorSearch