import React, { useState } from "react";
import EditTableRow from "../../../../tableEditable/editTableRow";
import EditTableCell from "../../../../tableEditable/editTableCell";

import { Table, Button, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../../store";
import { addEcommercial,  changeValueEcommercial, deleteData } from "../../../../../store/action/customerAction/createCustomerAction";
import { Ecommercial } from "../../../../../store/contract/Ecommercial";

interface DataSource {
  dataSource: Array<any>
}

const AddEcommercialId = (props: any) => {
  const [data, setData] = React.useState<DataSource>({
    dataSource: []
  });
  const name = useSelector((state:AppState) => state.CustomerReducer.input.ecommercial ? state.CustomerReducer.input.ecommercial : [])
  const dispatch = useDispatch();

  const [count, setCount] = React.useState(0);

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "30%",
      editable: true
    },
    {
      title: "id",
      dataIndex: "id",
      editable: true
    },
    {
      title: "operation",
      render: (text: any, record: any) =>
        data.dataSource.length > 0 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null
    }
  ];

  const components = {
    body: {
      row: EditTableRow,
      cell: EditTableCell
    }
  };

  const newColumns = columns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => {
        return {
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave
        }
    }
    };
  });

  const handleDelete = (key: any) => {
    const dataSource = [...data.dataSource];
    setData({ dataSource: dataSource.filter((item: any) => item.key !== key) });
    name.splice(key,1)
    dispatch(deleteData(key))
  };

  const handleAdd = () => {
    const newData = {
      key: count,
      name: "name",
      id: "id"
    };

    const oldData = data.dataSource.concat()
    oldData.push(newData)
    setData({
      dataSource: [...data.dataSource, newData]
    });

    setCount(count + 1);
    dispatch(addEcommercial( newData.id, newData.name))
    
  };

  const handleSave = (row: any) => {
    const newData = [...data.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
      
    });
    setData({ dataSource: newData });
    dispatch(changeValueEcommercial(index, 'id' , row.id))
    dispatch(changeValueEcommercial(index, 'name' , row.name))
    
  };

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>

      <Table
        pagination={{ pageSize: 3 }}
        components={components}
        bordered
        columns={newColumns}
        dataSource={data.dataSource}
      />
    </div>
  );
};

export default AddEcommercialId;
