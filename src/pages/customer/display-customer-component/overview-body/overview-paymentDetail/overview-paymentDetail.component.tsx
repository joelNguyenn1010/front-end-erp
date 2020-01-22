import React, { Fragment } from "react";
import { Table, Result, message } from "antd";
import ButtonAddPayment from "./button-add-payment.component";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_SUPPLIER_PAYMENT } from "../../../../../graphql/query";
import { UPDATE_SUPPLIER_PAYMENT } from "../../../../../graphql/mutation";

import { useParams } from "react-router-dom";
import LoadingSpin from "../../../../../components/loadingSpin";
import editTableCell from "../../../../tableEditable/editTableCell";
import editTableRow from "../../../../tableEditable/editTableRow";
import EditTableCellWithRules from "../../../../tableEditable/editTableCellWithRules";


var reg = new RegExp('^[0-9]+$');

const requiredRules =  [{required: true}]
const requiredNumberRules = [{required: true}, {pattern: reg, message: "Number thoi"}]
const OverviewPaymentDetailComponent = () => {
  const { id } = useParams()
  const columns = [
    {
      title: "Currency",
      key: "Currency",
      dataIndex: "currency"
    },
    {
      title: "Bank Name",
      key: "Bank Name",
      dataIndex: "bankName",
      editable: true,
      rules: requiredRules
    },
    {
      title: "Bank Branch",
      key: "Bank Branch",
      dataIndex: "bankBranch",
      editable: true,
      rules: requiredRules

    },
    {
      title: "Account Name",
      key: "Account Name",
      dataIndex: "accountName",
      editable: true,
      rules: [requiredNumberRules]

    },
    {
      title: "Account Number",
      key: "Account Number",
      dataIndex: "accountNumber",
      editable: true,

      rules: [...requiredNumberRules, {max: 15}]
    },
    {
      title: "Bank BSB",
      key: "BSB",
      dataIndex: "BSB",
      editable: true,
      rules: [...requiredNumberRules, {max: 15}]
    },
    {
      title: "Option Paypal",
      key: "paypal",
      dataIndex: "paypal",
      editable: true,
    

     
    },
    {
      title: "Operation"
    }
  ];

  const limit = 100000000
  const page = 1
  const variables = { limit, page, supplierId: id }
  const { data, refetch, loading } = useQuery(QUERY_SUPPLIER_PAYMENT, { variables })


  const refetchData = () => {
    refetch(variables)
  }


const newColumns = columns.map((col: any) => {
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        rules: col.rules,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave
      })
    };
  });



  const [updatePayment] = useMutation(UPDATE_SUPPLIER_PAYMENT,{
    onCompleted: () => {
      message.success("Updated")

    },
    onError: (error) => {
      message.error("Something went wrong, please try again")
      console.log(error)
    }
  })

  const handleSave = (data: any) => {
    updatePayment({variables: {...data}})
  }
  

  const components = {
    body: {
      row: editTableRow,
      cell: EditTableCellWithRules
    }
  };

  const renderPayment = () => {
    if (loading) {
      return <LoadingSpin />
    } else if (data && data.supplierPayments && data.supplierPayments.data) {
      return <Table 
      bordered 
      rowKey="id"
      components={components}
      columns={newColumns} 
      dataSource={data.supplierPayments.data} />

    } else {
      return <Result
        status="error"
        subTitle={`Please check the url or make sure the id "${id}" is correct`}
        title="Can't get the representatives">
      </Result>
    }
  }


  return (
    <Fragment>
      {renderPayment()}
      <ButtonAddPayment onSuccess={refetchData}/>
    </Fragment>
  );
};

export default OverviewPaymentDetailComponent;
