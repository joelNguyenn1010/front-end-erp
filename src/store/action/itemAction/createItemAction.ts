import { ItemActionTypes } from './../../types/item/item.types';
import { ADD_ITEM } from './../../../graphql/mutation/index';
import { Item } from './../../contract/Item';
import { message } from 'antd';
import { gql } from 'apollo-boost';
import axios from 'axios';
import client from '../../../graphql';
import { AppState } from '../..';

import * as _ from 'lodash'

export const changeItemValue = (index: number, key: string, value: any) => {
    return {
        type: ItemActionTypes.CHANGE_VALUE,
        payload: {
            index,
            key,
            value
        }
    }
}

export const makeLoadingModel = (index: number, loading: boolean) => {
    // oldState[action.payload.index].loading = action.payload.loading
    return {
        type: ItemActionTypes.LOADING,
        payload: {
            index,
            loading
        }
    }
}


//cai nay dung de add item
export const submitItemAction = (props: any) => {
    return (dispatch: any, getState: () => AppState) => {

        const input = getState().createItemReducer.items[props]

        const name = getState().createItemReducer.items

        const newItemAdd = {

            whlocationId: input.whlocationId,
            supplierId: input.supplierId,
            modelId: input.modelId,
            serialNumber: input.serialNumber,
            note: input.note,
            quantity: input.quantity,
            conditionId: input.conditionId,
        }

        client.mutate({ mutation: ADD_ITEM, variables: { ...newItemAdd } })

            .then(res => {

                message.success("New item created")
                // if(props.index > -1){
                //     name.splice(props.index, 1)
                // }
                dispatch(deleteItems(props.index))
            })
            .catch(err => {
                message.error("Can't create new item, please try again ")
            })
    }
}



// cái này dùng để tạo model
export const makeCiscoModelCreation = (index: number, ciscoModel: string) => {

    return {
        type: ItemActionTypes.CREATESN_DB,
        payload: {
            ciscoModel,
            index
        }
    }
}

export const addModelNotinCiscoCheckandDB = (model: string) => {
    return {
        type: ItemActionTypes.ADD_MODEL,
        payload: {
            model
        }

    }
}

export const fetchSN = (sn: string): Promise<string | null> => {
    const url: string = `http://apisn.ipsupply.net:2580/api/check-sn/${sn}`
    return new Promise((resolve: any) => {
        axios.get(url)
            .then((res: any) => {

                try {
                    const { ITEM_NAME } = res.data[0];
                    resolve(ITEM_NAME)

                } catch (e) {
                    // checkSNInDB(sn)
                    resolve(null)
                }

            })
            .catch((err) => {
                resolve(null)
            })
    })
}


export const checkModelInDB = (model: string): Promise<boolean> => {
    return new Promise((resolve: any, reject: any) => {

        const QUERY = gql`
                      query {
                          findModelWithName(name: "${model}") {
                          name
                        }
                      }
                    `;
        client.query({ query: QUERY }).then(result => {
            if (result.data && result.data && result.data.findModelWithName) {
                resolve(true)
            } else {
                reject("This model not in the database")
            }
        });
    })
}



export const checkSNInDB = (sn: string): Promise<boolean> => {
    return new Promise((resolve: any, reject: any) => {

        const QUERY = gql`
        query{
            isSNInDBQuery(serialNumber: "${sn}") 
        }
`;
        client.query({ query: QUERY }).then(result => {
            // console.log(result.data.isSNInDBQuery)
            if (result.data.isSNInDBQuery) {
                resolve(true)
            } else {
                reject('This model not in db')
            }

        })


    })




}


interface ReturnedModelId {
    model: string,
    id: number
}

export const getModelSNInDB = (name: string): Promise<ReturnedModelId | null> => {
    return new Promise((resolve: any) => {

        const QUERY = gql`
                      query {
                          findModelWithName(name: "${name}") {
                                  id
                                  name
                        }
                      }
                    `;
        client.query({ query: QUERY }).then(result => {
            if (result.data && result.data.findModelWithName) {


                try {
                    resolve({
                        model: result.data.findModelWithName.name,
                        id: result.data.findModelWithName.id
                    })
                } catch (e) {
                    resolve(null)

                }


            } else {
                resolve(null)
            }
        });
    })
}

// 




// get model by sn
export const addModelWithCiscoCheck = (sn: string, index: number) => {
    return async (dispatch: any, getState: () => AppState) => {
        const oldItemsState: Array<Item> = getState().createItemReducer.items.concat()
        const item: Item = oldItemsState[index]

        fetchSN(sn)
            .then((ciscoModel) => {
                if (ciscoModel) {
                    getModelSNInDB(ciscoModel)
                        .then((dbModel) => {

                            if (dbModel) {


                                item.model = dbModel.model
                                item.modelId = dbModel.id
                                oldItemsState[index] = item


                                dispatch({
                                    type: ItemActionTypes.ADD_MODEL,
                                    payload: item
                                })

                            } else {
                                message.info(`We found the cisco model ${ciscoModel}, considering create it`)
                                dispatch(makeCiscoModelCreation(index, ciscoModel))

                            }


                        })
                } else {

                    message.info(`We can't find the cisco model with sn: ${sn}`)
                    dispatch(makeCiscoModelCreation(index, ''))
                }
            })
            .finally(() => dispatch(makeLoadingModel(index, false)))

    }
}





export const addItem = (sn: string) => {

    return (dispatch: any, getState: any) => {

        const oldSns = getState().createItemReducer.items.concat()


        const replaced_comma_sn = sn.replace(/,/g, " ")

        const arr_sn = replaced_comma_sn.split(' ');
        // const arr_sn_comma =  sn.split(',');

        const removed_duplicated_sn = _.uniq(arr_sn)
        removed_duplicated_sn.map((item: string) => {
            if (item.length > 0) {
                const serialNumber = item.trim();

                const found = _.find(oldSns, { 'serialNumber': serialNumber })

                if (!found) {
                    dispatch({
                        type: ItemActionTypes.ADD_SN,
                        payload: serialNumber
                    })
                }
            }
        })



    }

}


export const clearItems = () => {
    return {
        type: ItemActionTypes.CLEAR_ITEMS_SN,
    }
}

export const deleteItems = (index: number) => {
    return {
        type: ItemActionTypes.DELETE_ITEM,
        payload: {
            index
        }
    }
}




