import React from "react";
import { Input, Button, Table, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store";
import {
  addShippingAccount,
  deleteData,
  changeValueShipping
} from "../../../store/action/customerAction/createCustomerAction";
import editTableRow from "../../../pages/tableEditable/editTableRow";
import editTableCell from "../../../pages/tableEditable/editTableCell";

interface DataSource {
    dataSource: Array<any>
}

const InputCourrierNameComponent = (props: any) => {
  const name = useSelector(
    (state: AppState) => state.CreateCustomerReducer.input.shipping ? state.CreateCustomerReducer.input.shipping : []
  );

  const [data, setData] = React.useState<DataSource>({
    dataSource: []
  });
  const [count, setCount] = React.useState(0);

  const dispatch = useDispatch();

  const columns = [
    {
      title: "Courier Name",
      dataIndex: "courierName",
      editable: true
    },
    {
      title: "Shipping Account",
      dataIndex: "accountShipping",
      editable: true
    },
    {
      title: "Operation",
      render: (record: any) =>
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
    const dataSource = [...data.dataSource];
    setData({ dataSource: dataSource.filter((item: any) => item.key !== key) });
    name.splice(key, 1);
    dispatch(deleteData(key));
  };

  const handleAdd = () => {
    const newData = {
      key: count,
      courierName: "name",
      accountShipping: "account"
    };
    setData({
      dataSource: [...data.dataSource, newData]
    });

    setCount(count + 1);
    dispatch(addShippingAccount(newData.courierName, newData.accountShipping));
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
    dispatch(changeValueShipping(index, 'courierName' , row.courierName))
    dispatch(changeValueShipping(index, 'accountShipping' , row.accountShipping))
  };

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a Row
      </Button>
      <Table
        columns={newColumns}
        bordered
        dataSource={data.dataSource}
        pagination={{ pageSize: 3 }}
        components={components}
      />
    </div>
  );
};
export default InputCourrierNameComponent;
