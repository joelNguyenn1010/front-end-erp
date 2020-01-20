import React, { Fragment } from "react";
import { Table, Popconfirm, message, Button, Icon } from "antd";
import ButtonAddRepresentative from "./button-add-representative";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_REPRESENTATIVE_QUERY } from "../../../../../graphql/query";
import { DELETE_REPRESENTATIVE } from "../../../../../graphql/mutation";
import editTableRow from "../../../../tableEditable/editTableRow";
import editTableCell from "../../../../tableEditable/editTableCell";
import client from "../../../../../graphql";

const OverviewRepresentativeComponent = () => {
  const [supplierId, setSupplierId] = React.useState<any>({
    limit: 10,
    page: 1,
    supplierId: 1
  });

  const { data, refetch } = useQuery(GET_REPRESENTATIVE_QUERY, {
    variables: {
      limit: supplierId.limit,
      page: supplierId.page,
      supplierId: supplierId.supplierId
    },
  });

 const refetchTheData = () => {
   console.log("co khong")
    refetch({
      limit: supplierId.limit,
      page: supplierId.page,
      supplierId: supplierId.supplierId
    });
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
      editable: true,
      render: (text: any, record: any) => {
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

  const itemRender = (current: any, type: any, originalElement: any) => {
    if (type === "prev") {
      return <a>Prev</a>;
    } else if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const onShowSizeChange = (current: number, size: number) => {
    setSupplierId({limit: size, page: current, supplierId: supplierId.supplierId})
  };

  const components = {
    body: {
      row: editTableRow,
      cell: editTableCell
    }
  };

  const handleSave = () => {}

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
        pagination={{
          itemRender: itemRender,
          onShowSizeChange: (current: number, size: number) => {
            onShowSizeChange(current, size);
          },
          showSizeChanger: true,
          showQuickJumper: true,
          current: supplierId.page,
          total: dataTotal,
          onChange: (page: number) => {
            setSupplierId({
              limit: 10,
              page,
              supplierId: supplierId.supplierId
            });
          }
        }}
        scroll={{ y: window.screen.height - 500 }}
      />
      <ButtonAddRepresentative onClose={refetchTheData} />
      <Button 
          type="primary" 
          shape="circle"
          size="large"
          onClick={() => refetchTheData()}
          style={{position: 'absolute', bottom: 35, left:10}}><Icon type="reload" /></Button>
    </Fragment>
  );
};

export default OverviewRepresentativeComponent;
