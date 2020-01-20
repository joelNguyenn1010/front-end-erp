import React, { Fragment } from "react";
import { Table } from "antd";
import ButtonAddPayment from "./button-add-payment.component";

const OverviewPaymentDetailComponent = () => {
  const columns = [
    {
      title: "Currency",
      key: "currency"
    },
    {
      title: "Ips Payment term",
      key: "ipsPaymentTerm"
    },
    {
      title: "Customer's Payment term",
      key: "cusPaymentTerm"
    },
    {
      title: "Bank Name",
      key: "bankName"
    },
    {
      title: "Bank Branch",
      key: "bankBranch"
    },
    {
      title: "GST/VAT number",
      key: "gst"
    },
    {
      title: "Account Name",
      key: "accountName"
    },
    {
      title: "Account Number",
      key: "accountNumber"
    },
    {
      title: "Bank BSB",
      key: "bsb"
    },
    {
      title: "Option Paypal",
      key: "paypal"
    },
    {
      title: "Operation"
    }
  ];

  return (
    <Fragment>
      <Table bordered columns={columns} />
      <ButtonAddPayment />
    </Fragment>
  );
};

export default OverviewPaymentDetailComponent;
