import React, { useState } from 'react'
import {  message } from 'antd';
import client from '../../../../graphql';
import { UPDATE_ADDRESS_COUNTRY } from '../../../../graphql/mutation/supplierMutation';
import ListCountry from '../../list country/listCountry';

let timeout: any = null

interface EditCellCountryProps {
    text: any,
    record: any
}

const EditCellCountry:React.FC<EditCellCountryProps> = (props: any) => {

    const {text, record} = props

    const [country, setCountry] = useState<string>(text)

    const onChange = (val: any) => {

        setCountry(val)
        client.mutate({mutation: UPDATE_ADDRESS_COUNTRY, variables:{id: record.id, country: val}})
        .then(res => {
            message.success('Updated new country')
        })
        .catch(err => {
            setCountry(text)
            message.error('Cant update country, please try again')
        })
    }

    return (
        <div>
            <ListCountry style={{width: 150}} value={country} onChange={(val: any) => onChange(val)}  />
        </div>
    )
}

export default EditCellCountry