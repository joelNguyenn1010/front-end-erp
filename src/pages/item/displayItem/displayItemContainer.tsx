import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { GET_ITEM_QUERY } from "../../../graphql/query";
import { Table, PageHeader, Input, Popconfirm, message, Button, Icon } from "antd";
import EditTableRow from "../../tableEditable/editTableRow";
import EditTableCell from "../../tableEditable/editTableCell";
import client from "../../../graphql";
import { DELETE_ITEM } from "../../../graphql/mutation";
import EditCellCondition from "../../tableEditable/item/editCellCondition";
import EditCellStockStatus from "../../tableEditable/item/editCellStockStatus";
import EditCellSupplier from "../../tableEditable/item/editCellSupplier";
import EditCellNote from "../../tableEditable/item/editCellNote";
import EditCellWhlocation from "../../tableEditable/item/editCellWhlocation";

const DisplayItemContainer: React.FC = () => {
  const [serialInput, setSerialInput] = React.useState<any>({
    limit: 10,
    page: 1,
    serialNumber: ""
  });

  const { data, loading, refetch } = useQuery(GET_ITEM_QUERY, {
    variables: {
      limit: serialInput.limit,
      page: serialInput.page,
      serialNumber: serialInput.serialNumber
    }
  });

  const refetchTheData = () => {
    refetch({
      limit: serialInput.limit,
      page: serialInput.page,
      serialNumber: serialInput.serialNumber
    });
  };

  const dataRender = data ? data.findItemBySerial ? data.findItemBySerial.data : [] : [];
  const dataTotal = data ? data.findItemBySerial? data.findItemBySerial.total: [] : [];
  // console.log(name)

  const columns = [
    
    {
      title: "Model",
      key: "model",
      dataIndex: "models.name"
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber"
    },
    {
      title: "Item Location",
      key: "itemLocation",
      dataIndex: "location",
      render: (text: string, record: any) => <p>text</p>
    },

    
    {
      title: "WH Location",
      dataIndex: "whlocations.name",
      key: "whLocation",
      render: (text: any, record: any) => {
        return <EditCellWhlocation record={record} text={text} />
      }
    },



    {
      title: "Condition",
      dataIndex: "conditions.name",
      render: (text: any, record: any) => {
        return <EditCellCondition text={text} record={record} />;
      }
    },
    {
      title: "Stock Status",
      dataIndex: "stockStatus",
      render: (text: any, record: any) => {
        return <EditCellStockStatus record={record} />;
      }
    },
    {
      title: "Supplier",
      dataIndex: "suppliers.name",
      render: (text: any, record: any) => {
        return <EditCellSupplier record={record} text={text} />
      }
    },
    {
      title: "Cost",
      dataIndex: "price",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
      render: (text: any, record: any) => {
        return <EditCellNote record={record} text={text} />
      }
    },
    {
      title: "Function",
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

  const handleSave = () => {};

  const handleDelete = (key: any) => {
    client
      .mutate({ mutation: DELETE_ITEM, variables: { id: parseInt(key) } })
      .then(res => {
        message.success("Item was deleted");
        refetchTheData();
      })
      .catch(err => {
        message.error("Cant delete item, please try again ");
      });
  };

  const onShowSizeChange = (current: number, size: number) => {
    setSerialInput({limit: size, page: current, serialNumber: serialInput.serialNumber})
  };

  const itemRender = (current: any, type: any, originalElement: any) => {
    if (type === "prev") {
      return <a>Prev</a>;
    } else if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const components = {
    body: {
      row: EditTableRow,
      cell: EditTableCell
    }
  };

  return (
    <div>
      <div className="table-operations">
        <PageHeader title="Serial Number: "></PageHeader>
      </div>

      <Table
      size="small"
        loading={loading}
        title={() => (
          <Input
            placeholder={"Search"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSerialInput({
                limit: 10,
                page: 1,
                serialNumber: e.target.value
              })
            }
          />
        )}
        components={components}
        bordered
        rowKey="id"
        pagination={{
          itemRender: itemRender,
          pageSizeOptions: ["10", "20", "100", "500", "1000"],
          onShowSizeChange: (current: number, size: number) => {
            onShowSizeChange(current, size);
          },
          showSizeChanger: true,
          showQuickJumper: true,
          current: serialInput.page,
          total: dataTotal,
          onChange: (page: number) => {
            setSerialInput({
              limit: 10,
              page,
              serialNumber: serialInput.serialNumber
            });
          }
        }}
        columns={newColumns}
        dataSource={dataRender}
        scroll={{ y: window.screen.height - 500 }}
      />
      <Button 
          type="primary" 
          shape="circle"
          size="large"
          onClick={() => refetchTheData()}
          style={{position: 'absolute', bottom: 35, left:10}}><Icon type="reload" /></Button>
    </div>
  );
};

export default DisplayItemContainer;
