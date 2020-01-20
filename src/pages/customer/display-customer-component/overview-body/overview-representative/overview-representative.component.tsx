import React, { Fragment } from "react";
import { Table, Popconfirm, message, Button, Icon } from "antd";
import ButtonAddRepresentative from "./button-add-representative";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_REPRESENTATIVE_QUERY } from "../../../../../graphql/query";
import { DELETE_REPRESENTATIVE } from "../../../../../graphql/mutation";
import editTableRow from "../../../../tableEditable/editTableRow";
import editTableCell from "../../../../tableEditable/editTableCell";
import client from "../../../../../graphql";
import { useParams } from "react-router-dom";

const OverviewRepresentativeComponent = () => {
  let { id } = useParams();

  const limit = 1000
  const page = 1
  // const [supplierId, setSupplierId] = React.useState<any>({
  //   limit,
  //   page,
  //   supplierId: id
  // });
  const variables = {
    limit,
    page,
    supplierId: id
  }

  const { data, refetch } = useQuery(GET_REPRESENTATIVE_QUERY, {
    variables,
  });

  const refetchTheData = () => {
    refetch(variables);
  };

  const dataRender = data
    ? data.representative
      ? data.representative.data
      : []
    : [];

  const dataTotal = data
    ? data.representative
      ? data.representative.total
      : []
    : [];

  const columns = [
    {
      title: "Salutation",
      key: "salutation",
      dataIndex: "salutation",
      editable: true,
    },
    {
      title: "Full Name",
      key: "firstName",
      dataIndex: "fullName",
      editable: true,
    },
    {
      title: "Position",
      key: "position",
      dataIndex: "position",
      editable: true,
    },
    {
      title: "Phone Number",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      editable: true,
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "representativeemails",
      render: (text: any, record: any) => {
        console.log(text)
        return text.map((data: any) => <p>{data.email}</p>);
      }
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

  const handleSave = () => { }

  const handleDelete = (key: any) => {
    client
      .mutate({ mutation: DELETE_REPRESENTATIVE, variables: { id: parseInt(key) } })
      .then(res => {
        message.success("Item was deleted");
        refetchTheData();
      })
      .catch(err => {
        message.error("Cant delete item, please try again ");
      });
  };

  return (
    <Fragment>
      <Table
        rowKey="id"
        columns={newColumns}
        bordered
        dataSource={dataRender}
        components={components}
        pagination={false}
        scroll={{ y: window.screen.height - 700 }}
      />
      <ButtonAddRepresentative onClose={refetchTheData} />
    </Fragment>
  );
};

export default OverviewRepresentativeComponent;
