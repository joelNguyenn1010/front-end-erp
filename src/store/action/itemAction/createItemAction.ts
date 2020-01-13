
import { ADD_ITEM } from './../../../graphql/mutation/index';
import { createItemReducer } from './../../reducer/createItemReducer';
import { Item } from './../../contract/Item';
import { message, Result } from 'antd';
import { gql } from 'apollo-boost';
import axios from 'axios';
import client from '../../../graphql';
import { AppState } from '../..';


export const changeItemValue = (index: number, key: string, value: any) => {
    return {
        type: "ITEM:CHANGE:VALUE",
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
        type: "ITEM:LOADING",
        payload: {
            index,
            loading
        }
    }
}


//cai nay dung de add item
export const submitItemAction = (props: any) => {
    return(dispatch: any, getState : () => AppState ) => {
        
        const input = getState().createItemReducer.items[props]

        const name = getState().createItemReducer.items

        const newItemAdd = {
            
            warehouse: input.warehouse,
            supplierId: input.supplierId,
            modelId: input.modelId,
            serialNumber: input.serialNumber,
            note: input.note,
            quantity: input.quantity,
            conditionId: input.conditionId,
        }
        
        client.mutate({mutation: ADD_ITEM, variables: {...newItemAdd}})
        
        .then(res => {
            
            message.success("New item created")
            if(props > -1){
                name.splice(props, 1)
            }
            dispatch(deleteItems(props))
        })
        .catch(err => {
            message.error("Can't create new item, please try again ")
        })
    }
}



// cái này dùng để tạo model
export const makeCiscoModelCreation = (index: number, ciscoModel: string) => {

    return {
        type: "ITEM:CREATESN:DB",
        payload: {
            ciscoModel,
            index
        }
    }
}

export const addModelNotinCiscoCheckandDB = ( model: string) => {
    return {
        type: "ADD_MODEL",
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
                            findItemBySerial(serialNumber: "${sn}", limit: 10, page: 1) {
                                data {
                                    serialNumber
                                }
                            }
                        }
        `;
        client.query({query: QUERY}).then(result => {
            console.log(result)
            if(result.data.findItemBySerial.data.length > 0){
                resolve(true)
            } else{
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
            console.log(result)
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

                                console.log(ciscoModel, dbModel)
                                if (dbModel) {

            
                                    item.model = dbModel.model
                                    item.modelId = dbModel.id
                                     oldItemsState[index] = item


                                    dispatch({
                                        type: "ADD_MODEL",
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
        return {
            type: "ADD_SN",
            payload: sn
        }
    
    
}


export const clearItems = () => {
    return {
        type: "CLEAR:ITEMS:SN",
    }
}

export const deleteItems = (index: number) => {
    return {
        type: "ITEM:RELOAD:AFTER:DELETE",
        payload: index
    }
}