import { useQuery } from "@apollo/react-hooks";
import React, { useEffect } from "react";
import { GET_MODEL_QUERY } from "../../../graphql/query/modelQuery";
import { Table, Input, Button, Icon } from "antd";
import EditableName from "./editableName";
import EditableManufactor from "./editableManufactor";
import DisplaySortedItem from "./displaySortedItem";
import { pusher } from "../../../websocket/pusher";


const DisplayModelContainer: React.FC = () => {

  const [pagi, setPagi] = React.useState<any>({
    page: 1,
    limit: 10,
    name: ""
  });

  const HALF_SECOND = 1500

  const { data, loading, refetch } = useQuery(
    GET_MODEL_QUERY,
    {
      variables: { limit: pagi.limit, page: pagi.page, name: pagi.name },
    }
  );

  const refetchData = () => {
    refetch({ limit: pagi.limit, page: pagi.page, name: "" })
  }


  useEffect(() => {
    // const MODEL_CHANNEL = 
    // refetch this again when 
    refetchData()

    const SUBSCRIBER = 'model'
    const CHANNEL = 'new-model'

    const channel = pusher.subscribe(SUBSCRIBER);
    channel.bind(CHANNEL, () => {
      console.log("New item")
      refetchData()
    })

    console.log("in")


    return () => {
      channel.unbind(CHANNEL)
      // cleanup
      
      pusher.unsubscribe(SUBSCRIBER)
    };
  }, [])





  const dataRender = data ? data.model.data : [];
  const dataTotal = data ? data.model.total : [];


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: '15%',

      render: (text: any, record: any) => <EditableName text={text} record={record} />
    },
    {
      width: '12%',
      title: "Manufacture",
      dataIndex: "manufactors.name",
      key: "manuName",
      render: (text: any, record: any) => <EditableManufactor text={text} record={record} />
    },


    {
      title: "AU",
      children: [
        {
          title: "NIB",
          key: "nibAU",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.au_condition} cond="NIB" />
        },
        {
          title: "NOB",
          key: "nobAU",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.au_condition} cond="NOB" />
        },
        {
          title: "USEDA",
          key: "usedaAU",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.au_condition} cond="USEDA" />

        },
        {
          title: "USEDB",
          // dataIndex: "items[0].quantity",
          key: "usedbAU",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.au_condition} cond="USEDB" />

        },
        {
          title: "USEDC",
          key: "usedcAU",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.au_condition} cond="USEDC" />

        },
        {
          title: "PART",
          key: "partAU",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.au_condition} cond="PART" />

        }
      ]
    },
    {
      title: 'In transfer',
      key: 'transfer',
      width: "20%",
      render: (text: string, record: any) => <p>AU to US: 0       US to AU: 20</p>
    },
    {
      title: "US",
      children: [
        {
          title: "NIB",
          key: "nibUS",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.us_condition} cond="NIB" />

        },
        {
          title: "NOB",
          key: "nobUS",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.us_condition} cond="NOB" />

        },
        {
          title: "USEDA",
          key: "usedaUS",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.us_condition} cond="USEDA" />

        },
        {
          title: "USEDB",
          key: "usedbUS",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.us_condition} cond="USEDB" />

        },
        {
          title: "USEDC",
          key: "usedcUS",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.us_condition} cond="USEDC" />

        },
        {
          title: "PART",
          key: "partUS",
          render: (text: string, record: any) => <DisplaySortedItem text={text} record={record.us_condition} cond="PART" />
        }
      ]
    }
  ];

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
        size="small"
        loading={loading}
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
          refetch({ limit: pagi.limit, page: pagi.page, name: pagi.name })
        }}
        style={{ position: 'absolute', bottom: 35, left: 10 }}><Icon type="reload" /></Button>

    </React.Fragment>
  );
};

export default DisplayModelContainer;
