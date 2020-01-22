import React from 'react'
import { Input, message } from 'antd'
import client from '../../../../graphql'
import { UPDATE_ADDRESS_POSTCODE } from '../../../../graphql/mutation';

let timeout: any = null

interface EditCellPostcodeProps {
    text: any,
    record: any
}

const EditCellPostcode:React.FC<EditCellPostcodeProps> = (props: any) => {

    const {text, record} = props 

    const [postcode, setPostcode] = React.useState<string>(text)
 
   const onChange = (val: string) => {
    setPostcode(val)
    client.mutate({mutation: UPDATE_ADDRESS_POSTCODE, variables:{id: record.id, country: val}})
    .then(res => {
        message.success('Updated new country')
    })
    .catch(err => {
        setPostcode(text)
        message.error('Cant update country, please try again')
    })
   }

    return (
        <Input maxLength={6} type='number' value={postcode}  style={{width: '100%'}} onChange={(val: any) => onChange(val)} />
    )
}

export default EditCellPostcode
