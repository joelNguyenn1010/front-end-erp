import React, { useState } from 'react'
import SearchCreation from '../../../components/searchCreation'

import { Spin, Button, Switch, message } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSN,
    addModelWithCiscoCheck,
    makeLoadingModel,
    changeItemValue
} from "../../../store/action/itemAction/createItemAction";
import { AppState } from "../../../store";
import { useQuery } from "@apollo/react-hooks";
import { GET_MODEL_QUERY } from "../../../graphql/query";
import AddNewModelModal from './addNewModelModal';
import { Route } from 'react-router-dom';
import { gql } from 'apollo-boost';
import client from '../../../graphql';

interface ItemModelCreationProps {
    index: number
}

const ItemModelCreation: React.FC<ItemModelCreationProps> = props => {


    const [open, setOpen] = useState<boolean>(false)


    const ciscoModel = useSelector((state: AppState) => state.createItemReducer.items[props.index].ciscoModel)
    const name = useSelector((state: AppState) => state.createItemReducer.items[props.index].model)

    const dispatch: any = useDispatch();




    const { data, loading, refetch } = useQuery(GET_MODEL_QUERY, {
        variables: { name: "", limit: 5, page: 1 }
    });


    // changeItemValue
    const onSelected = (val: string, option: any) => {

        dispatch(changeItemValue(props.index, 'model', val))
        dispatch(changeItemValue(props.index, 'modelId', parseInt(option.key)))
    }

    let timeout: any = null;
    const onSearch = (val: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({ name: val, limit: 5, page: 1 });
        }, 220);
    };


    const fetchModel = () => {
        const query = gql`
                query {
                    findModelWithName(name:"${ciscoModel}") {
                      name
                      id
                    }
                  }
                `


        client.query({ query: query })
            .then((res) => {
                if (res) {
                    console.log(res)
                }
            })

            .catch((err) => {
                message.error('Error try to auto attach the model, please manually select the model')
            })
    }



    const loadingModel = useSelector((state: AppState) => state.createItemReducer.items[props.index].isFetchingModel)
    return loadingModel ? <Spin /> :
        (
            <React.Fragment>
                <SearchCreation
                    input={name}
                    loading={loading}
                    onSearch={onSearch}
                    onSelected={onSelected}
                    //if have data will display all data or return null array
                    content={data ? data.model ? data.model.data : [] : []}
                />


                {ciscoModel.length > 0 && (
                    <React.Fragment>
                        <Button onClick={() => setOpen(true)}>Click here to add {ciscoModel}</Button>

                        {open && <AddNewModelModal
                        fetchModel={fetchModel}
                            index={props.index}
                            ciscoModel={ciscoModel}
                            open={open}
                            setOpen={setOpen}
                        />}

                    </React.Fragment>
                )
                }


            </React.Fragment>
        )
}

export default ItemModelCreation
