import React, { Children } from 'react'
import { Table, Row, Col, Timeline, Badge, Result, Tag } from 'antd'
import AddSupplierNote from './addSupplierNote'
import { useQuery } from '@apollo/react-hooks'
import { GET_NOTE_SUPPLIER } from '../../../../../graphql/query/supplierQuery'
import LoadingSpin from '../../../../../components/loadingSpin'
import { useParams } from 'react-router-dom'
import { GET_SUPPLIER_NOTE } from '../../../../../graphql/mutation/supplierNote'
import { SupplierNote } from '../../../../../store/contract/SupplierNote'
import { channel } from '../../../../../websocket/pusher'

const OverviewNoteComponent = () => {

    const { id } = useParams()
    const { data, loading, refetch } = useQuery(GET_SUPPLIER_NOTE, { variables: { supplierId: id } });

    channel.bind("supplier-note",() => refetch({supplierId: id}))

    if (loading) {
        return <LoadingSpin />
    } else if (data && data.supplierNote) {

        const notes: Array<SupplierNote> = data.supplierNote
        // console.log(notes)
        return (
            <Timeline style={{paddingRight: '10rem', paddingLeft: '10rem'}}>
                <Timeline.Item>

                    <AddSupplierNote />

                </Timeline.Item>

                {notes.map((data: SupplierNote) => (
                    <React.Fragment key={data.id}>
                        <Timeline.Item >{data.internalNote} <Tag color="blue"> {data.created_at}</Tag></Timeline.Item>

                    </React.Fragment>
                ))}

            </Timeline>
        )

    } else {
        return <Result
            status="error"
            subTitle={`Please check the url or make sure the id "${id}" is correct`}
            title="Can't get the note">
        </Result>
    }


}

export default OverviewNoteComponent
