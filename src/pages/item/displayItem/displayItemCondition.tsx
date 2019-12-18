import React from "react";
import { Select} from "antd";
const {Option} = Select;


const DisplayItemCondition = (props: any) => {
    const  onChange = (value: any) => {
        console.log(`selected ${value}`);
      }
      
      
      const onSearch = (val: any) => {
        console.log('search:', val);
      }

  return (
    <Select
      showSearch
      style={{ width: 200}}
      placeholder="Select a condition"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      
    >
      <Option value="NIB">NIB</Option>
      <Option value="NOB">NOB</Option>
      <Option value="USEDA">USEDA</Option>
      <Option value="USEDB">USEDB</Option>
      <Option value="USEDC">USEDC</Option>
      <Option value="PART">PART</Option>
    </Select>
  );
};
export default DisplayItemCondition;
