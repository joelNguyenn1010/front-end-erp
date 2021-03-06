import React, { useState, useEffect } from 'react'
import SearchCreation from '../../../components/searchCreation'

import { Spin, Button } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import {
    changeItemValue,
} from "../../../store/action/itemAction/createItemAction";
import { AppState } from "../../../store";
import { useQuery } from "@apollo/react-hooks";
import { GET_MODEL_QUERY } from "../../../graphql/query/modelQuery";
import AddNewModelModal from './addNewModelModal';
import { gql } from 'apollo-boost';
import client from '../../../graphql';
import Axios from 'axios';
import { Item } from '../../../store/contract/Item';
import { ModelCreate } from '../../../store/contract/Model';

interface ItemModelCreationProps {
    value: Item,
    index: number,
}



const ItemModelCreation: React.FC<ItemModelCreationProps> = props => {

    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();

    const [open, setOpen] = useState<boolean>(false)

    const variables = {
        name: '',
        limit: 10,
        page: 1,
        hasSerial: true
    }
    // new version
    const [ciscoModel, setCiscoModel] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    // input 
    const [input, setInput] = useState<string>('')



    // const ciscoModel = useSelector((state: AppState) => state.createItemReducer.items[props.index].ciscoModel)
    const name = useSelector((state: AppState) => state.createItemReducer.items[props.index].model)

    const dispatch: any = useDispatch();



    

    const { data, refetch } = useQuery(GET_MODEL_QUERY, {
        variables
    });


    // changeItemValue
    const onSelected = (val: string, option: any) => {
        
            dispatch(changeItemValue(props.index, 'model', val))
            dispatch(changeItemValue(props.index, 'modelId', parseInt(option.key)))

    }

    let timeout: any = null;
    const onSearch = (val: string) => {
        setInput(val)
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({...variables, name: val})
        }, 220);
    };




    useEffect(() => {

        const url: string = `http://apisn.ipsupply.net:2580/api/check-sn/${props.value.serialNumber}`

        Axios.get(url, { cancelToken: source.token })
            .then((res) => {
                console.log(res)
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


        return () => {
            source.cancel("Operation cancel");
            setCiscoModel('')

        }
    }, [])

    //  for model creation
    const model: ModelCreate = {
        input: {
            name: ciscoModel,
            hasSerial: true,
            category: '',
            manufactor: '',
            manufactorId: 0,
            categoryId: 0,
        },
        res: {
            id: 0,
            name: ''
        }
    }

    const onCreate = () => {
        setCiscoModel(input)
        setOpen(true)
    }




    return loading ? <Spin /> : (
        <Button.Group style={{width: "100%"}}>
            <SearchCreation
                onDropdownVisibleChange={() => refetch({...variables, name: ''})}
                input={name}
                loading={loading}
                onSearch={onSearch}
                onSelected={onSelected}
                //if have data will display all data or return null array
                content={data ? data.model ? data.model.data : [] : []}
                onClickCreate={onCreate}
            />

            {ciscoModel.length > 0 && (

                <React.Fragment>
                    <Button onClick={() => setOpen(true)}>Click here to add {ciscoModel}</Button>

                    {open && <AddNewModelModal
                        model={model}
                        setCiscoModel={setCiscoModel}
                        ciscoModel={ciscoModel}
                        open={open}
                        setOpen={setOpen}
                        onSuccessCreateOrClose={(response: any) => {
                            if (response.name && response.name.length > 0) {
                                // console.log('co vao day nua ko')
                                // props.forceUpdate()
                                dispatch(changeItemValue(props.index, 'model', response.name))
                                dispatch(changeItemValue(props.index, 'modelId', response.id))
                                // refetch({ name: reload.name, limit: reload.limit, page: reload.page})
                                setCiscoModel('')
                            }
                            // refetch({ name: reload.name, limit: reload.limit, page: reload.page})   

                            setOpen(false)
                        }}
                    />}

                </React.Fragment>
            )}
        </Button.Group>
    )


}

export default ItemModelCreation
