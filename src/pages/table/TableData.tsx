import React from "react";
import { Table, Form } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { GET_ITEM_QUERY } from "../../graphql/query";
import { TableComponents } from "antd/lib/table";
import { TableRow } from "./TableRow";
import styled from 'styled-components'


// const EditableContext = React.createContext({});

// let columns = [
//   {
//     title: "Condition",
//     dataIndex: "conditionId"
//     // editable: true
//   },
//   {
//     title: "Warehouse",
//     dataIndex: "warehouse",
//     editable: true
//   },

//   {
//     title: "Supplier",
//     dataIndex: "supplierId",
//     editable: true
//   },

//   {
//     title: "Model",
//     dataIndex: "modelId",
//     editable: true
//   },

//   {
//     title: "SN",
//     dataIndex: "serialNumber",
//     editable: true
//   },

//   {
//     title: "Price",
//     dataIndex: "price",
//     editable: true
//   },

//   {
//     title: "Note",
//     dataIndex: "note",
//     editable: true
//   },

//   {
//     title: "Extra",
//     dataIndex: "extra",
//     editable: true
//   }
// ];

// const Row: React.FC<any> = ({ form, index, ...props }) => {
//   console.log(form);
//   return (
//     <EditableContext.Provider value={form}>
//       <tr {...props} />
//     </EditableContext.Provider>
//   );
// };

// const EditableFormRow = Form.create()(Row);

// const Cell: React.FC<any> = props => {
//   const { children, dataIndex, record, title } = props;
//   console.log(props);

//   return <td>{props.children}</td>;
// };
export const TableData = () => {
  //   const [serialInput, setSerialInput] = React.useState<any>({
  //     limit: 10,
  //     page: 1,
  //     serialNumber: " "
  //   });

  //   const { data, loading, error, fetchMore, refetch } = useQuery(
  //     GET_ITEM_QUERY,
  //     {
  //       variables: {
  //         limit: serialInput.limit,
  //         page: serialInput.page,
  //         serialNumber: serialInput.serialNumber
  //       }
  //     }
  //   );

  //   const dataRender = !loading ? data.findItemBySerial.data : [];
  //   const dataTotal = !loading ? data.findItemBySerial.total : [];

  //   //   const dataSource = dataRender.map((value: any) => {
  //   //       console.log()
  //   //   })

  //   const dataRender2 = [
  //     {
  //       key: 5,
  //       conditionId: 4,
  //       warehouse: "Cali",
  //       supplierId: 2,
  //       modelId: 3,
  //       serialNumber: "FOC1qweqd",
  //       price: 123.12,
  //       note: "wh by CuongTM"
  //     }
  //   ];

  //   const newColumns = columns.map(col => {
  //     if (!col.editable) {
  //       return col;
  //     }
  //     return {
  //       ...col,
  //       onCell: (record: any) => ({
  //         record,
  //         dataIndex: col.dataIndex,
  //         title: col.title
  //       })
  //     };
  //   });

  //   const components = {
  //     body: {
  //       row: EditableFormRow,
  //       cell: Cell
  //     }
  //   };

  //   const value: any = [
  //     {
  //       name: "hello"
  //     }
  //   ];
  const onShowSizeChange = (current: number, size: number) => {
    console.log(current, size);
  };

  var tableStyle = {
    width: "100%"
  };
  return (
    // <Table components={components} dataSource={dataRender2} columns={newColumns} />
   
      <table style={tableStyle}>
        <thead className="ant-table-thead">
          <tr>
            <th className="">
              <span className="ant-table-header-column">
                <div>
                  <span className="ant-table-column-title">Name</span>
                  <span className="ant-table-column-sorter"></span>
                </div>
              </span>
            </th>

            <th className="">
              <span className="ant-table-header-column">
                <div>
                  <span className="ant-table-column-title">Condition</span>
                  <span className="ant-table-column-sorter"></span>
                </div>
              </span>
            </th>

            <th className="">
              <span className="ant-table-header-column">
                <div>
                  <span className="ant-table-column-title">WH Location</span>
                  <span className="ant-table-column-sorter"></span>
                </div>
              </span>
            </th>

            <th className="">
              <span className="ant-table-header-column">
                <div>
                  <span className="ant-table-column-title">Supplier</span>
                  <span className="ant-table-column-sorter"></span>
                </div>
              </span>
            </th>

            <th className="">
              <span className="ant-table-header-column">
                <div>
                  <span className="ant-table-column-title">Serial Number</span>
                  <span className="ant-table-column-sorter"></span>
                </div>
              </span>
            </th>

            <th className="">
              <span className="ant-table-header-column">
                <div>
                  <span className="ant-table-column-title">Price</span>
                  <span className="ant-table-column-sorter"></span>
                </div>
              </span>
            </th>

            <th className="">
              <span className="ant-table-header-column">
                <div>
                  <span className="ant-table-column-title">Note</span>
                  <span className="ant-table-column-sorter"></span>
                </div>
              </span>
            </th>
          </tr>
        </thead> 
    <tr>
      <td>
      <div style={{ overflow: "auto", maxHeight: "250px"}}>
      <table>
          <tbody className="ant-table-tbody">
          <TableRow />
          </tbody>
   
        </table>
      </div>
      </td>
    </tr>
     
      </table>
 
  );
};
