import React, { Fragment } from "react";
import { Table, Popconfirm, message, Result } from "antd";
import ButtonAddAddressComponent from "./button-add-address.component";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ADDRESS_QUERY } from "../../../../../graphql/query";
import { useParams } from "react-router-dom";
import editTableRow from "../../../../tableEditable/editTableRow";
import editTableCell from "../../../../tableEditable/editTableCell";
import EditCellPostcode from "../../../editCustomer/editCustomerAddress/editCellPostcode";
import EditCellCountry from "../../../editCustomer/editCustomerAddress/editCellCountry";
import client from "../../../../../graphql";
import { UPDATE_CUSTOMER_ADDRESS, DELETE_ADDRESS } from "../../../../../graphql/mutation";
import { Address } from "../../../../../store/contract/Suppliers";
import EditTypeCustomer from "../../../editCustomer/editCustomerAddress/edit-type-customer";
import LoadingSpin from "../../../../../components/loadingSpin";

const OverviewAddressComponent = () => {
  let { id } = useParams();

  const limit = 100;
  const page = 1;

  const variables = {
    supplierId: id,
    limit,
    page
  };

  const { data, refetch, loading } = useQuery(GET_ADDRESS_QUERY, {
    variables
  });

  const refetchTheData = () => {
    refetch(variables);
  };


  const columns = [
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      render: (text: any, record: any) => {
        return <EditTypeCustomer handleSave={handleSave} record={record} text={text}  />
      }
    },
    
    {
      title: "Address",
      key: "streetName",
      dataIndex: "street",
      editable: true
    },
    {
      title: "City",
      key: "city",
      dataIndex: "city",
      editable: true
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
      editable: true
    },
    
    {
      title: "Postcode",
      key: "postcode",
      dataIndex: "postcode",
      render: (text: any, record: any) => {
        return <EditCellPostcode text={text} record={record} />
      }
    },
    {
      title: "Country",
      key: "country",
      dataIndex: "country",
      render: (text: any, record: any ) => {
        return <EditCellCountry text={text} record={record} />
      }
    },
    {
      title: "Operation",
      render: (text: any, record: any) =>
      data.supplierAddresses.data.length > 0 ? (
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

  const components = {
    body: {
      row: editTableRow,
      cell: editTableCell
    }
  };

  const [updateAddress ] = useMutation( UPDATE_CUSTOMER_ADDRESS, {
    onCompleted: () => message.success("Data saved"),
    onError: () => message.error("Error when try to save data")
  })

  const handleSave = (data: Address) => {  
    
    updateAddress({variables: data})
  };

  const handleDelete = (key: any) => {
    client
    .mutate({ mutation: DELETE_ADDRESS, variables: { id: parseInt(key) } })
    .then(res => {
      message.success("Item was deleted");
      refetchTheData();
    })
    .catch(err => {
      message.error("Cant delete item, please try again ");
    });
  };

  if (loading) {
    return <LoadingSpin />
  } else if (!loading && data && data.supplierAddresses && data.supplierAddresses.data) {
    const dataSource: Array<Address> = data.supplierAddresses.data

  return (
    <Fragment>
      <Table
        columns={newColumns}
        bordered
        rowKey="id"
        dataSource={dataSource}
        components={components}
        pagination={false}
        scroll={{ y: window.screen.height - 700 }}
      />
      <ButtonAddAddressComponent refetchData={refetchTheData} />
    </Fragment>
  );
} else {
  return <Result
    status="error"
    subTitle={`Please check the url or make sure the id "${id}" is correct`}
    title="Can't get the representatives">
  </Result>
}
};

export default OverviewAddressComponent;
