import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { GET_ITEM_QUERY } from "../../../graphql/query";
import { Table, PageHeader, Input, InputNumber, Popconfirm, Form, message } from "antd";
import EditTableRow from "../../tableEditable/editTableRow";
import EditTableCell from "../../tableEditable/editTableCell";



const DisplayItemContainer: React.FC = () => {
  const [serialInput, setSerialInput] = React.useState<any>({
    limit: 10,
    page: 1,
    serialNumber: ""
  });

  const { data, loading } = useQuery(
    GET_ITEM_QUERY,
    {
      variables: {
        limit: serialInput.limit,
        page: serialInput.page,
        serialNumber: serialInput.serialNumber
      }
    }
  );


 const dataRender = !loading ? data.findItemBySerial.data : [];
 const dataTotal = !loading ? data.findItemBySerial.total : []
  
  const columns = [
    {
      title: "WH Location",
      dataIndex: "warehouse",
      key: "whLocation",
      editable: true,
    },
    {
      title: "Item Location",
      key: "itemLocation",
      editable: true,
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      editable: true,
    },
    {
      title: "Condition",
      dataIndex: "conditions.name",
      editable: true,
    },
    {
      title: "Stock Status",
      editable: true,
    },
    {
      title: "Supplier",
      dataIndex: "suppliers.name",
      editable: true,
    },
    {
      title: "Cost",
      dataIndex: "price",
      editable: true,
    },
    {
      title: "Note",
      dataIndex: "note",
      editable: true,
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

  const handleSave = () => {

  }

  const handleDelete = (key: any) => {
      // const dataSource = [...dataRender]
      // dataSource.filter((item: any) => item.rowKey !== item)
      // console.log(dataSource)
      

  }
  
  const onShowSizeChange = (current: number, size: number) => {
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
  }

  return (
    <div>
      <div className="table-operations">
        <PageHeader title="Serial Number: "></PageHeader>
      </div>
      
      <Table
      title={() => (
        <Input
          placeholder={"Search"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSerialInput({ limit: 10, page: 1, serialNumber: e.target.value })
          }
        />
      )}
      components={components}
      bordered
      rowKey='id'
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
    />
    </div>
    
      
    
  );
};

export default DisplayItemContainer;
