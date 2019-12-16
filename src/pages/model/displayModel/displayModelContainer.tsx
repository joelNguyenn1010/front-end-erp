import { useQuery } from "@apollo/react-hooks";
import React, { Fragment } from "react";
import { GET_MODEL_QUERY } from "../../../graphql/query";
import { Table } from "antd";

const DisplayModelContainer: React.FC = () => {
  const [pagi, setPagi] = React.useState<any>({
    page: 1,
    limit: 10,
    name: ""
  });

  const { data, loading, error, fetchMore, refetch } = useQuery(
    GET_MODEL_QUERY,
    { variables: { limit: pagi.limit, page: pagi.page, name: pagi.name } }
  );


  const dataRender = !loading ? data.model.data : [];
  const dataTotal = !loading ? data.model.total : [];

  const columns = [
    {
      title: "Manufacture",
      dataIndex: "manufactors.name",
      key: "manuName"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Short Description",
      dataIndex: "shortDescription",
      key: "shortDescription"
    },
    {
      title: "AU",
      children: [
        {
          title: "NIB",
          key: "nibAU"
        },
        {
          title: "NOB",
          key: "nobAU"
        },
        {
          title: "USEDA",
          key: "usedaAU"
        },
        {
          title: "USEDB",
          key: "usedbAU"
        },
        {
          title: "USEDC",
          key: "usedcAU"
        },
        {
          title: "PART",
          key: "partAU"
        }
      ]
    },
    {
      title: "US",
      children: [
        {
          title: "NIB",
          key: "nibUS"
        },
        {
          title: "NOB",
          key: "nobUS"
        },
        {
          title: "USEDA",
          key: "usedaUS"
        },
        {
          title: "USEDB",
          key: "usedbUS"
        },
        {
          title: "USEDC",
          key: "usedcUS"
        },
        {
          title: "PART",
          key: "partUS"
        }
      ]
    }
  ];

  const onShowSizeChange = (current: number, size: number) => {
    console.log(current, size);
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
    <Table
      title={() => (
        <input
          placeholder={"search"}
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
      dataSource={dataRender}
      columns={columns}
    />
  );
};

export default DisplayModelContainer;
