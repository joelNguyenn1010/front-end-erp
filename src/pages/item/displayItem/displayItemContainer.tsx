import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { GET_ITEM_QUERY } from "../../../graphql/query";
import { Table, PageHeader, Input, InputNumber, Popconfirm, Form, message } from "antd";

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
    key: "serialNumber",
    editable: true,
  },
  {
    title: "Condition",
    dataIndex: "conditionId",
    key: "condition",
    editable: true,
  },
  {
    title: "Stock Status",
    key: "stockStatus",
    editable: true,
  },
  {
    title: "Supplier",
    dataIndex: "supplierId",
    key: "supplier",
    editable: true,
  },
  {
    title: "Cost",
    dataIndex: "price",
    key: "cost",
    editable: true,
  },
  {
    title: "Note",
    key: "note",
    editable: true,
  },
  {
    title: "Function",
    key: "function",
  }
];

const DisplayItemContainer: React.FC = () => {
  const [serialInput, setSerialInput] = React.useState<any>({
    limit: 10,
    page: 1,
    serialNumber: " "
  });

  const { data, loading, error } = useQuery(
    GET_ITEM_QUERY,
    {
      variables: {
        limit: serialInput.limit,
        page: serialInput.page,
        serialNumber: serialInput.serialNumber
      }
    }
  );

  if(error)
    message.error("We can fetch data, please try again")

  const dataRender = !loading ? data.findItemBySerial.data : [];
  const dataTotal = !loading ? data.findItemBySerial.total : [];
  

  
  const onShowSizeChange = (current: number, size: number) => {
    console.log(current, size);
  };

  const itemRender = (current: any, type: any, originalElement: any) => {
    if (type === "prev") {
      return <a>Prev</a>;
    } else if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <div>
      <div className="table-operations">
        <PageHeader title="Serial Number: "></PageHeader>
      </div>
      
      <Table
      bordered
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
      columns={columns}
      dataSource={dataRender}
    />
    </div>
    
      
    
  );
};

export default DisplayItemContainer;
