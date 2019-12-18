import { message } from 'antd';
import { AppState } from './../../index';
import { gql } from 'apollo-boost';
import axios from 'axios';
import client from '../../../graphql';
import { Item } from '../../reducer/createItemReducer';

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

export const getModelSNInDB = (sn: string): Promise<ReturnedModelId | null> => {
    return new Promise((resolve: any) => {

        const QUERY = gql`
                      query {
                          findItemBySerial(limit: 1, page: 1, serialNumber: "${sn}") {
                          data{
                              models {
                                  id
                                  name
                              }
                          }
                        }
                      }
                    `;
        client.query({ query: QUERY }).then(result => {
            if (result.data && result.data && result.data.findItemBySerial) {


                try {
                    resolve({
                        model: result.data.findItemBySerial.data[0].models.name,
                        id: result.data.findItemBySerial.data[0].models.id
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

        try {
            const ciscoModel = await fetchSN(sn);
            const dbModel = await getModelSNInDB(sn)


            // neu 2 model bang nhau

            if (ciscoModel && dbModel && ciscoModel == dbModel.model) {
                // oldItemsState
                let newModel = {
                    id: dbModel.id,
                    name: dbModel.model
                }

                item.model = newModel

                oldItemsState[index] = item


                dispatch({
                    type: "ADD_MODEL",
                    payload: oldItemsState
                })


            } else {
                throw new Error("Cisco not found")


            }


        } catch (e) {

            let newModel = {
                id: 0,
                name: ''
            }

            item.model = newModel


            oldItemsState[index] = item


            dispatch({
                type: "ADD_MODEL",
                payload: oldItemsState
            })



            message.warning("Appearantly, the cisco model not found or not in the database, you need to create it")
        }


    }
}


export const addItem = (sn: string) => {
    return {
        type: "ADD_SN",
        payload: sn
    }
}