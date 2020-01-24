import React, { Fragment } from 'react'
import { Table, Popconfirm, Result, message } from 'antd'
import editTableRow from "../../../../../tableEditable/editTableRow";
import editTableCell from "../../../../../tableEditable/editTableCell";
import {useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {GET_COURIER} from "../../../../../../graphql/query/supplierQuery";
import LoadingSpin from "../../../../../../components/loadingSpin";
import { Couriers} from "../../../../../../store/contract/Suppliers";
import ButtonAddCourier from "./button-add-courier";
import client from "../../../../../../graphql";
import {DELETE_COURIER, UPDATE_COURIER} from "../../../../../../graphql/mutation/supplierMutation";

const requireRule = [{required: true}]

const OverviewCourierComponent = () => {

    const {id} = useParams()

    const limit = 100;
    const page = 1;

    const variables = {
        supplierId: id,
        limit,
        page
    };

    const {data, loading, refetch} = useQuery(GET_COURIER, {
        variables: variables
    })

    const refetchTheData = () => {
        refetch(variables)
    }


    const columns = [
        {
            title: "Courier Name",
            dataIndex: "courier",
            editable: true,
            rules: requireRule,
        },
        {
            title: "Shipping Account",
            dataIndex: "shippingAccount",
            editable: true,
            rules: requireRule
        },
        {
            title: "Operation",
            render: (record: any) =>
                data.couriers.data.length > 0 ? (
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                ) : null
        }
    ];

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
        body: {
            row: editTableRow,
            cell: editTableCell
        }
    };

    const handleDelete = (key: any) => {
        client.mutate({mutation: DELETE_COURIER, variables:{id: parseInt(key)}})
            .then(res => {
                message.success("Add shipping account success")
                refetchTheData()
            })
            .catch(err => {
                message.error("Cant add account, please try again")
            })
    }

    const [updateShippingAccount ] = useMutation(UPDATE_COURIER, {
        onCompleted: () => message.success("Data saved"),
        onError: () => message.error("Error when try to save data")
    })

    const handleSave = (data: Couriers) => {
        updateShippingAccount({variables: data})
    }


    if (loading) {
        return <LoadingSpin />
    } else if (!loading && data && data.couriers && data.couriers.data) {
        const dataSource: Array<Couriers> = data.couriers.data

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
                <ButtonAddCourier refetchData={refetchTheData} />
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

export default OverviewCourierComponent
