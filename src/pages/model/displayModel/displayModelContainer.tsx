import { useQuery } from "@apollo/react-hooks";
import React, { Fragment } from "react";
import { GET_MODEL_QUERY } from "../../../graphql/query";
import { Table, Input, Button, Icon } from "antd";
import EditableName from "./editableName";
import EditableNote from "./editableNote";
import EditableManufactor from "./editableManufactor";

const DisplayModelContainer: React.FC = () => {
  const [pagi, setPagi] = React.useState<any>({
    page: 1,
    limit: 10,
    name: ""
  });


  const { data, loading, refetch } = useQuery(
    GET_MODEL_QUERY,
    { variables: { limit: pagi.limit, page: pagi.page, name: pagi.name } }
  );

  const dataRender = data ? data.model.data : [];
  const dataTotal = data ? data.model.total : [];


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: '12%',

      render: (text: any, record: any) => <EditableName text={text} record={record}/>
    },
    {
      width: '12%',
      title: "Manufacture",
      dataIndex: "manufactors.name",
      key: "manuName",
      render: (text: any, record: any) => <EditableManufactor text={text} record={record}/>
    },

    {
      
      title: "Note",
      dataIndex: "note",
      key: "note",
      width: '19%',

      // ellipsis: true,
      render:  (text: any, record: any) => <EditableNote text={text} record={record}/>
    },
    {
      title: "AU",
      children: [
        {
          title: "NIB",
          key: "nibAU",
          render: (index: any, record: any) => {
            // mai mốt tìm hiểu thêm về dataIndex, cái này là render từng cái cell, kiểm tra xem có bằng với phần tử NIB, NOB không
            const data = record.au_condition.find((element: any) => element.name === 'NIB')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        },
        {
          title: "NOB",
          key: "nobAU",
          render: (index: any, record: any) => {
            const data = record.au_condition.find((element: any) => element.name === 'NOB')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }

        },
        {
          title: "USEDA",
          key: "usedaAU",
          render: (index: any, record: any) => {
            const data = record.au_condition.find((element: any) => element.name === 'USEDA')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        },
        {
          title: "USEDB",
          // dataIndex: "items[0].quantity",
          key: "usedbAU",
          render: (index: any, record: any) => {
            const data = record.au_condition.find((element: any) => element.name === 'USEDB')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        },
        {
          title: "USEDC",
          key: "usedcAU",
          render: (index: any, record: any) => {
            const data = record.au_condition.find((element: any) => element.name === 'USEDC')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        },
        {
          title: "PART",
          key: "partAU",
          render: (index: any, record: any) => {
            const data = record.au_condition.find((element: any) => element.name === 'PART')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        }
      ]
    },
    {
      title: "US",
      children: [
        {
          title: "NIB",
          key: "nibUS",
          render: (index: any, record: any) => {
            const data = record.us_condition.find((element: any) => element.name === 'NIB')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
          
        },
        {
          title: "NOB",
          key: "nobUS",
          render: (index: any, record: any) => {
            const data = record.us_condition.find((element: any) => element.name === 'NOB')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        },
        {
          title: "USEDA",
          key: "usedaUS",
          render: (index: any, record: any) => {
            const data = record.us_condition.find((element: any) => element.name === 'USEDA')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        },
        {
          title: "USEDB",
          key: "usedbUS",
          render: (index: any, record: any) => {
            const data = record.us_condition.find((element: any) => element.name === 'USEDB')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        },
        {
          title: "USEDC",
          key: "usedcUS",
          render: (index: any, record: any) => {
            const data = record.us_condition.find((element: any) => element.name === 'USEDC')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        },
        {
          title: "PART",
          key: "partUS",
          render: (index: any, record: any) => {
            const data = record.us_condition.find((element: any) => element.name === 'PART')
            const qty = data ? data.QTY : 0
            return (<p>{qty}</p>)
          }
        }
      ]
    }
  ];

  const onShowSizeChange = (current: number, size: number) => {
    setPagi({ limit: size, page: current, name: pagi.name });
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
    <React.Fragment>
    <Table
      title={() => (
        <Input
          placeholder={"Search"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPagi({ limit: 10, page: 1, name: e.target.value })
          }
        />
      )}
      bordered
      pagination={{
        itemRender: itemRender,
        pageSizeOptions: ["10", "20", "100", "500", "1000"],
        onShowSizeChange: (current: number, size: number) => {
          onShowSizeChange(current, size);
        },
        showSizeChanger: true,
        showQuickJumper: true,
        current: pagi.page,
        total: dataTotal,
        onChange: (page: number) => {
          setPagi({ limit: 10, page, name: pagi.name });
        }
      }}
      rowKey='id'
      dataSource={dataRender}
      columns={columns}
      scroll={{ y: window.screen.height - 500 }}
    >
       
    </Table>
    <Button 
          type="primary" 
          shape="circle"
          size="large"
          onClick={() => {
            refetch( { limit: pagi.limit, page: pagi.page, name: pagi.name })
          }}
          style={{position: 'absolute', bottom: 35, left:10}}><Icon type="reload" /></Button>

    </React.Fragment>
  );
};

export default DisplayModelContainer;
