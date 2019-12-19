import { message } from 'antd';
import { AppState } from './../../index';
import { gql } from 'apollo-boost';
import axios from 'axios';
import client from '../../../graphql';
import { Item } from '../../reducer/createItemReducer';


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


// cái này dùng để tạo model
export const makeCiscoModelCreation = (index: number, noModelInDB: boolean, model: string) => {

    return {
        type: "ITEM:CREATESN:DB",
        payload: {
            model,
            noModelInDB,
            index
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
                                console.log('dang',dbModel)
                                if (dbModel) {

                                    

                                    item.model = dbModel.model
                                    item.modelId = dbModel.id
                                    oldItemsState[index] = item


                                    dispatch({
                                        type: "ADD_MODEL",
                                        payload: oldItemsState
                                    })

                                } else {
                                    message.info(`We found the cisco model ${ciscoModel}, considering create it`)
                                    dispatch(makeCiscoModelCreation(index, true, ciscoModel))

                                }


                            })
                    } else {

                        console.log("Should not be here", ciscoModel)
                        message.info(`We found the cisco model with sn:${sn} select from db or crete new`)
                        dispatch(makeCiscoModelCreation(index, true, ''))
                    }
                })
                .finally(() => dispatch(makeLoadingModel(index, false)))
            // const ciscoModel = await fetchSN(sn);
            // const dbModel = await getModelSNInDB(ciscoModel!)



            // // neu 2 model bang nhau

            // if (ciscoModel && dbModel && ciscoModel === dbModel.model) {


            //     item.model = dbModel.model
            //     item.modelId = dbModel.id
            //     oldItemsState[index] = item


            //     dispatch({
            //         type: "ADD_MODEL",
            //         payload: oldItemsState
            //     })

            // } else if (dbModel) {
            //     item.model = dbModel.model
            //     item.modelId = dbModel.id
            //     oldItemsState[index] = item


            //     dispatch({
            //         type: "ADD_MODEL",
            //         payload: oldItemsState
            //     })
            // }

            // else if (ciscoModel) {
            //     message.info(`We found the cisco model ${ciscoModel}, considering create it`)
            //     dispatch(makeCiscoModelCreation(index, true, ciscoModel))
            // }

            // else {
            //     throw new Error("Cisco not found")
            // }
  

        
    }
}


export const addItem = (sn: string) => {
    return {
        type: "ADD_SN",
        payload: sn
    }
}