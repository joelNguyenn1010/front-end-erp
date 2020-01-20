import React from 'react'
import client from '../../../graphql';
import { UPDATE_ITEM_STOCKSTATUS } from '../../../graphql/mutation';
import { message, Select } from 'antd';

interface EditCellStockStatusProps {
    
    record: any
}

const EditCellStockStatus = (props: any) => {
    const {record} = props
    const value = record ? "true" : "false";

        const onChange = (value: any) => {
          console.log(value)
          client.mutate({mutation: UPDATE_ITEM_STOCKSTATUS, variables:{id: record.id, stockStatus: value}})
          .then(res => {
            message.success('Updated stock status')
          })
          .catch(err => {
            message.error('Cant update stock status, please try again')
          })
        }
        return (
          <Select onChange={onChange}  defaultValue={value}>
            <Select.Option value="true">In Stock</Select.Option>
            <Select.Option value="false">Not In Stock</Select.Option>
          </Select>
        );
}

export default EditCellStockStatus
