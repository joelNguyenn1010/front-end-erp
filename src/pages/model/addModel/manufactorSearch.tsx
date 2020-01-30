import React, { useState, useContext } from 'react';
import SearchCreation from '../../../components/searchCreation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { MANUFACTURE_QUERY } from '../../../graphql/query/modelQuery';
import { ADD_MANUFACTURE } from '../../../graphql/mutation/modelMutation';
import { message, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeValueAction } from '../../../store/action/model/createModelAction';
import { AppState } from '../../../store';
import client from '../../../graphql';
import { gql } from 'apollo-boost';
import { Controller, useFormContext } from 'react-hook-form';
import { FormDataModel } from '.';

let timeout: any = null;
const ManufactorSearch: React.FC = () => {


    const defaultManufactureQuery = "CISCO"

    const [name, setName] = useState<string>(defaultManufactureQuery)


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


    const {control, setValue } = useFormContext<FormDataModel>()

    const onSelected = (val: string, option: any) => {

        refetch({ name: '' })

        setName(val)

        setValue('manufactorId', parseInt(option.key))


        // dispatch(changeValueAction('manufactor', val))
        // dispatch(changeValueAction('manufactorId', parseInt(option.key)))
    }


    const onSearch = (val: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({ name: val })
        }, 220);
    }




    return (
        <Form.Item
            label="Manufacture"
        >

            <Controller
                as={<SearchCreation
                    placeholder="Manufacture"
                    loading={loading}
                    content={data ? data.manufactor ? data.manufactor.data : [] : []}
                    onClickCreate={onCreate}
                    onSelected={onSelected}
                    onSearch={onSearch}
                    input={name}
                />}

                control={control}
                name="manufactorId"

            />

        </Form.Item>

    )
}

export default ManufactorSearch