import React, { Fragment } from "react";
import {Table, Popconfirm, Result, message} from "antd";
import editTableRow from "../../../../tableEditable/editTableRow";
import editTableCell from "../../../../tableEditable/editTableCell";
import {useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/react-hooks";
import { GET_ECOMMERCIALID_QUERY} from "../../../../../graphql/query";
import LoadingSpin from "../../../../../components/loadingSpin";
import { EcommercialId} from "../../../../../store/contract/Suppliers";
import ButtonAddEcommercial from "./button-add-ecommercialId.component";
import {DELETE_ECOMMERCIAL_ID, UPDATE_ECOMMERCIAL_ID} from "../../../../../graphql/mutation";
import client from "../../../../../graphql";

const requiredRules =  [{required: true}]

const OverviewEcommercialIdComponent = (props: any) => {
  let { id } = useParams();

  const limit = 100;
  const page = 1;

  const variables = {
    supplierId: id,
    limit,
    page
  };

  const { data, refetch, loading } = useQuery(GET_ECOMMERCIALID_QUERY, {
    variables
  });

  const refetchTheData = () => {
    refetch(variables);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      editable: true,
      rules: requiredRules
    },
    {
      title: "ID",
      dataIndex: "identify",
      editable: true,
      rules: requiredRules
    },
    {
      title: "Operation",
      render: (text: any, record: any) =>
        data.ecommercialId.data.length > 0 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null
    }
  ];

  const components = {
    body: {
      row: editTableRow,
      cell: editTableCell
    }
  };

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

  const handleDelete = (key: any) => {
      client.mutate({mutation: DELETE_ECOMMERCIAL_ID, variables:{id: parseInt(key)}})
          .then(res => {
            message.success("Item was deleted")
            refetchTheData()
          })
          .catch(err => {
            message.error("Cant delete item, please try again")
          })
  };

  const [updateEcommercial ] = useMutation( UPDATE_ECOMMERCIAL_ID, {
    onCompleted: () => message.success("Data saved"),
    onError: () => message.error("Error when try to save data")
  })


  const handleSave = (data: EcommercialId) => {
      updateEcommercial({variables: data})
  };

  if (loading) {
    return <LoadingSpin />
  } else if (!loading && data && data.ecommercialId && data.ecommercialId.data) {
    const dataSource: Array<EcommercialId> = data.ecommercialId.data

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
          <ButtonAddEcommercial refetchData={refetchTheData} />
        </Fragment>
    );
  } else {
    return <Result
        status="error"
        subTitle={`Please check the url or make sure the id "${id}" is correct`}
        title="Can't get the representatives">
    </Result>
  }
};

export default OverviewEcommercialIdComponent;
