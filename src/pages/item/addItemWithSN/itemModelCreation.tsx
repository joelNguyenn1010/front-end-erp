import React, { useState, useEffect } from 'react'
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
import Axios from 'axios';
import { Item } from '../../../store/contract/Item';

interface ItemModelCreationProps {
    value: Item,
    index: number
}

const ItemModelCreation: React.FC<ItemModelCreationProps> = props => {


    const [open, setOpen] = useState<boolean>(false)


    // const ciscoModel = useSelector((state: AppState) => state.createItemReducer.items[props.index].ciscoModel)
    const name = useSelector((state: AppState) => state.createItemReducer.items[props.index].model)

    const dispatch: any = useDispatch();




    const { data, refetch } = useQuery(GET_MODEL_QUERY, {
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



    // new version

    const [ciscoModel, setCiscoModel] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {


        const url: string = `http://apisn.ipsupply.net:2580/api/check-sn/${props.value.serialNumber}`

        Axios.get(url)
            .then((res) => {

                if (res && res.data && res.data[0]) {
                    const { ITEM_NAME } = res.data[0];


                    const QUERY = gql`
                    query {
                        findModelWithName(name: "${ITEM_NAME}") {
                            id
                            name
                      }
                    }
                  `;
                    client.query({ query: QUERY }).then(result => {
                        if (result.data && result.data && result.data.findModelWithName) {
                            // resolve({
                            const model = result.data.findModelWithName.name
                            const id = result.data.findModelWithName.id

                            dispatch(changeItemValue(props.index, 'model', model))
                            dispatch(changeItemValue(props.index, 'modelId', id))

                        } else {
                            setCiscoModel(ITEM_NAME)
                        }
                    });
                }

            })
            .finally(() => setLoading(false))

    }, [])


    return loading ? <Spin /> : (
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
                        setCiscoModel={setCiscoModel}
                        index={props.index}
                        ciscoModel={ciscoModel}
                        open={open}
                        setOpen={setOpen}
                    />}

                </React.Fragment>
            )}
        </React.Fragment>
    )



    // const loadingModel = useSelector((state: AppState) => state.createItemReducer.items[props.index].isFetchingModel)
    // return loadingModel ? <Spin /> :
    //     (
    //         <React.Fragment>



    //             {ciscoModel.length > 0 && (
    //                 <React.Fragment>
    //                     

    //                 </React.Fragment>
    //             )
    //             }


    //         </React.Fragment>
    //     )
}

export default ItemModelCreation
