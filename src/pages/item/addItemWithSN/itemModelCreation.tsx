import React, { useState } from 'react'
import SearchCreation from '../../../components/searchCreation'

import { Spin, Button, Switch } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSN,
    addModelWithCiscoCheck
} from "../../../store/action/itemAction/createItemAction";
import { AppState } from "../../../store";
import { useQuery } from "@apollo/react-hooks";
import { GET_MODEL_QUERY } from "../../../graphql/query";
import AddNewModelModal from './addNewModelModal';
import { Route } from 'react-router-dom';

interface ItemModelCreationProps {
    index: number
}

const ItemModelCreation: React.FC<ItemModelCreationProps> = props => {
    

    const [open, setOpen] = useState<boolean>(false)


    const noModelInDB = useSelector((state: AppState) => state.createItemReducer.items[props.index].noModelInDB)
    const name = useSelector((state: AppState) => state.createItemReducer.items[props.index].model)




    const { data, loading, refetch } = useQuery(GET_MODEL_QUERY, {
        variables: { name: "", limit: 5, page: 1 }
    });



    const onSelected = (val: string, option: any) => {

    }

    let timeout: any = null;
    const onSearch = (val: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({ name: val, limit: 5, page: 1 });
        }, 220);
    };




    const loadingModel = useSelector((state: AppState) => state.createItemReducer.items[props.index].isFetchingModel)
    return loadingModel ? <Spin /> :
        !noModelInDB ? (
            <SearchCreation
                input={name}
                loading={loading}
                onSearch={onSearch}
                onSelected={onSelected}
                //if have data will display all data or return null array
                content={data ? data.model ? data.model.data : [] : []}
            />
        )

            : <React.Fragment>
                <Button onClick={() => setOpen(true)}>Click here to add {name}</Button>
             

               {open && <AddNewModelModal
                    index={props.index}
                    ciscoModel={name}
                    open={open}
                    setOpen={setOpen}
                /> }
            </React.Fragment>
}

export default ItemModelCreation
