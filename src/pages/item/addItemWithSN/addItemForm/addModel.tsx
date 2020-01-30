import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { gql } from 'apollo-boost';
import client from '../../../../graphql';
import LoadingSpin from '../../../../components/loadingSpin';
import AddModelInDB from './addModelInDB';
interface AddModelFormProps {
    serialNumber: string,
    index: number

}

const AddModelForm: React.FC<AddModelFormProps> = props => {

    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();

    const { serialNumber } = props

    const [loading, setLoading] = useState<boolean>(true)

    const [ciscoModel, setCiscoModel] = useState<string>('')


    useEffect(() => {

        const url: string = `http://apisn.ipsupply.net:2580/api/check-sn/${serialNumber}`

        Axios.get(url, { cancelToken: source.token })
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

                            // dispatch(changeItemValue(props.index, 'model', model))
                            // dispatch(changeItemValue(props.index, 'modelId', id))

                        } else {

                            setCiscoModel(ITEM_NAME)
                        }
                    });
                }

            })
            .finally(() => setLoading(false))


        return () => {
            source.cancel("Operation cancel");
            // setCiscoModel('')

        }
    }, [])



    if(loading) {
        return <LoadingSpin />
    } else {
        return <AddModelInDB index={props.index} />
    }
    
}

export default AddModelForm
