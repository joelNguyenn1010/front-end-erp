import React, { Fragment } from "react";
import { Table, Popconfirm, message, Button, Icon, Result } from "antd";
import ButtonAddRepresentative from "./button-add-representative";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_REPRESENTATIVE_QUERY } from "../../../../../graphql/query/supplierQuery";
import { DELETE_REPRESENTATIVE, UPDATE_REPRESENTATIVE } from "../../../../../graphql/mutation/supplierMutation";
import editTableRow from "../../../../tableEditable/editTableRow";
import editTableCell from "../../../../tableEditable/editTableCell";
import client from "../../../../../graphql";
import { useParams } from "react-router-dom";
import LoadingSpin from "../../../../../components/loadingSpin";
import { Representative } from "../../../../../store/contract/Suppliers";
import SalutationEditable from "../../../editCustomer/editCustomerRepresentative/salutation-editable";
import EmailEditable from "../../../editCustomer/editCustomerRepresentative/email-editable";

var reg = new RegExp('^[0-9]+$');

const requiredRules =  [{required: true}]
const requiredNumberRules = [{required: true}, {pattern: reg, message: "Number only"}]

const OverviewRepresentativeComponent = () => {
  let { id } = useParams();

  const limit = 1000
  const page = 1

  const variables = {
    limit,
    page,
    supplierId: id
  }

  const { data, refetch, loading } = useQuery(GET_REPRESENTATIVE_QUERY, {
    variables,
  });


  const refetchTheData = () => {
    refetch(variables);
  };



  const columns = [
    {
      title: "Salutation",
      key: "salutation",
      dataIndex: "salutation",
      render: (text: any, record: any) => <SalutationEditable handleSave={handleSave} text={text} record={record} />
    },
    {
      title: "Full Name",
      key: "firstName",
      dataIndex: "fullName",
      editable: true,
      rules: requiredRules
    },
    {
      title: "Position",
      key: "position",
      dataIndex: "position",
      editable: true,
    },
    {
      title: "Phone Number",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      editable: true,
      rules: [...requiredNumberRules, {max: 12}]

    },

    {
      title: "Email",
      key: "email",
      dataIndex: "representativeemails",
      render: (text: any, record: any) => {
        return <EmailEditable text={text} record={record}  />
      }
    },
    {
      title: "Operation",
      render: (text: any, record: any) =>
        data.representative.data.length > 0 ? (
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
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        rules: col.rules,
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



  const [updateRepresentative] = useMutation(UPDATE_REPRESENTATIVE, {
    onCompleted: () => message.success("Data saved"),
    onError: () => message.error("Error when try to save data")
  });

  const handleSave = (data: Representative) => {

    updateRepresentative({ variables: data })
  }

  const handleDelete = (key: any) => {
    client
      .mutate({ mutation: DELETE_REPRESENTATIVE, variables: { id: parseInt(key) } })
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
  } else if (!loading && data && data.representative && data.representative.data) {
    const dataSource: Array<Representative> = data.representative.data




    return (
      <Fragment>
        <Table
          rowKey="id"
          columns={newColumns}
          bordered
          dataSource={dataSource}
          components={components}
          pagination={false}
          scroll={{ y: window.screen.height - 490 }}
        />
        <ButtonAddRepresentative refetchData={refetchTheData} />
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

export default OverviewRepresentativeComponent;
