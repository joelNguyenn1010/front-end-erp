import React, { Fragment } from 'react'
import { Table , Popconfirm, message, Result} from 'antd'

import {useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/react-hooks";
import LoadingSpin from "../../../../../components/loadingSpin";
import {GET_EMAIL_SUPPLIER} from "../../../../../graphql/query";
import client from "../../../../../graphql";
import {DELETE_EMAIL_SUPPLIER, UPDATE_ECOMMERCIAL_ID, UPDATE_EMAIL_SUPPLIER} from "../../../../../graphql/mutation";
import editTableRow from "../../../../tableEditable/editTableRow";
import editTableCell from "../../../../tableEditable/editTableCell";
import {EcommercialId, EmailSupplier} from "../../../../../store/contract/Suppliers";
import ButtonAddEcommercial from "../overview-ecommercialId/button-add-ecommercialId.component";
import ButtonAddEmailSupplier from "./button-add-email-supplier";


var reg = new RegExp('^[a-zA-z0-9]+@+[a-zA-z]+[.]+[a-zA-z]+$')
const requiredRules =  [{required: true}]
const requireRulesEmail = [{required: true, message: "Required"}, {pattern: reg, message: "This is not a valid email"}]

const OverviewEmailComponent = () => {

    let {id} = useParams()

    const limit= 1000
    const page = 1

    const variables = {
        limit,
        page,
        supplierId: id
    }

    const {data, loading, refetch} = useQuery(GET_EMAIL_SUPPLIER, {
        variables: variables
    })

    const refetchTheData = () => {
        refetch(variables)
    }

    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key:'email',
            editable: true,
            rules: requireRulesEmail,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            editable: true,
        },
        {
            title: 'Operation',
            render: (text: any, record: any) =>
                data.supplierEmail.data.length > 0 ? (
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                ) : null
        }
    ]

    const newColumns = columns.map((col: any) => {
        return {
            ...col,
            onCell: (record: any) => {
                return {
                    record,
                    editable: col.editable,
                    rules: col.rules,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: handleSave
                };
            }
        };
    });

    const components = {
        body:{
            row: editTableRow,
            cell: editTableCell
        }
    }


    const handleDelete = (key: any) => {
        client.mutate({mutation: DELETE_EMAIL_SUPPLIER, variables: {id: parseInt(key)}})
            .then(res => {
                message.success("Item was deleted")
                refetchTheData()
            })
            .catch(err => {
                message.error("Cant delete item, please try again")
            })
    }

    const [updateEmailSupplier ] = useMutation( UPDATE_EMAIL_SUPPLIER, {
        onCompleted: () => message.success("Data saved"),
        onError: () => message.error("Error when try to save data")
    })


    const handleSave = (data: EmailSupplier) => {
        updateEmailSupplier({variables: data})
    };

    if (loading) {
        return <LoadingSpin />
    } else if (!loading && data && data.supplierEmail && data.supplierEmail.data) {
        const dataSource: Array<EmailSupplier> = data.supplierEmail.data

        return (
            <Fragment>
                <Table
                    columns={newColumns}
                    bordered
                    rowKey="id"
                    dataSource={dataSource}
                    components={components}
                    pagination={false}
                    scroll={{ y: window.screen.height - 700 }}
                />
                <ButtonAddEmailSupplier refetchData={refetchTheData} />
            </Fragment>
        );
    } else {
        return <Result
            status="error"
            subTitle={`Please check the url or make sure the id "${id}" is correct`}
            title="Can't get the representatives">
        </Result>
    }
}

export default OverviewEmailComponent
