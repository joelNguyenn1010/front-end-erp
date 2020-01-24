import React, { useEffect, useCallback } from 'react'
import { Table, Result } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GET_SUPPLIER_QUERY } from '../../graphql/query/supplierQuery'
import { Link, withRouter } from 'react-router-dom'
import AddSupplier from './addSupplier'
import LoadingSpin from '../../components/loadingSpin'
import { channel } from '../../websocket/pusher'
import TableCellRightClick from '../../graphql/tableCellRightClick'
import DeleteSupplier from './deleteSupplier'

import Pusher from 'pusher-js'
// Enable pusher logging - don't include this in production




interface SupplierProps {
  history: any
}
const Supplier: React.FC<SupplierProps> = props => {





  const [pagi, setPagi] = React.useState<any>({
    page: 1,
    limit: 10,
    name: ""
  });



  const columns = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: "name",
      render: (text: any, record: any) => {
        const id = record.id


        return <a href="#" onClick={() => id ? props.history.push(`/supplier/${id}`) : ''}>{text}</a>
      }
    },
    {
      title: 'Contact Type',
      key: 'contactType',
      dataIndex: "contactType"
    },
    {
      title: 'Pricing Level',
      key: 'pricingLevel',
      dataIndex: 'pricingLevel'
    },
    {
      title: "Operation",
      key: 'operation',
      render: (text: any, record: any) => <DeleteSupplier record={record} />
    }

  ]


  const { data, refetch, loading } = useQuery(GET_SUPPLIER_QUERY, { variables: pagi })



  // channel.bind('supplier', (data) => {
  //   console.log("binding", refetch, pagi)
  //   // try {
  //     refetch(pagi)
  //   // } catch(e) {
  //   //   console.log("New product")
  //   // }

  // })

  const itemRender = (current: any, type: any, originalElement: any) => {
    if (type === "prev") {
      return <a>Prev</a>;
    } else if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const onSuccesCreate = () => {
    refetch(pagi)
  }

  const onShowSizeChange = (current: number, size: number) => {
    setPagi({ limit: size, page: current, name: pagi.name });
  };



  const renderDisplay = () => {
    if (loading) {
      return <LoadingSpin />
    } else if (data && data.supplier && data.supplier.data) {
      const dataTotal = data.supplier.total

      const supplier = data.supplier.data
 

      return <Table

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



        rowKey="id"
        columns={columns}
        bordered
        // onRowClick={(record: any, index: number, event: Event) => {
        //     if (record && record.id) {
        //         const id = record.id
        //         props.history.push(`/supplier/${id}`)
        //     }
        // }}
        dataSource={supplier}
      />
    } else {
      return <Result
        status="error"
        subTitle={`Something went wrong when we try to get the suppliers, please try again`}
        title="Can't get the suppliers">
      </Result>
    }
  }
  return (
    <React.Fragment>
      <AddSupplier onSuccess={onSuccesCreate} />

      {renderDisplay()}

    </React.Fragment>

  )
}

export default withRouter(Supplier)
