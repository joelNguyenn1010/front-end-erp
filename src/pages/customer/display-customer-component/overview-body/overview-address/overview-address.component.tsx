import React, { Fragment } from "react";
import { Table, Popconfirm } from "antd";
import ButtonAddAddressComponent from "./button-add-address.component";
import { useQuery } from "@apollo/react-hooks";
import { GET_ADDRESS_QUERY } from "../../../../../graphql/query";
import { useParams } from "react-router-dom";
import editTableRow from "../../../../tableEditable/editTableRow";
import editTableCell from "../../../../tableEditable/editTableCell";

const OverviewAddressComponent = () => {
  let { id } = useParams();

  const limit = 10;
  const page = 1;

  const variables = {
    supplierId: id,
    limit,
    page
  };

  const { data, refetch } = useQuery(GET_ADDRESS_QUERY, {
    variables
  });

  const refetchTheData = () => {
    refetch(variables);
  };

  const dataRender = data
    ? data.supplierAddresses
      ? data.supplierAddresses.data
      : []
    : [];

  const columns = [
    {
      title: "Address",
      key: "streetName",
      dataIndex: "street",
      editable: true
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
      editable: true
    },
    {
      title: "City",
      key: "city",
      dataIndex: "city",
      editable: true
    },
    {
      title: "Postcode",
      key: "postcode",
      dataIndex: "postcode"
    },
    {
      title: "Country",
      key: "country",
      dataIndex: "country"
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type"
    },

    {
      title: "Operation",
      render: (text: any, record: any) =>
        dataRender.length > 0 ? (
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
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave
      })
    };
  });

  const components = {
    body: {
      row: editTableRow,
      cell: editTableCell
    }
  };

  const handleSave = (row: any) => {
    console.log('hello', row)
  };

  const handleDelete = (key: any) => {};

  return (
    <Fragment>
      <Table
        columns={newColumns}
        bordered
        rowKey="id"
        dataSource={dataRender}
        components={components}
      />
      <ButtonAddAddressComponent onClose={refetchTheData} />
    </Fragment>
  );
};

export default OverviewAddressComponent;
