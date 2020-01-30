import React from "react";
import { Form, message } from "antd";
import Search from "antd/lib/input/Search";
import {
  checkSNInDB,
  addItem
} from "../../../store/action/itemAction/createItemAction";
import { useDispatch } from "react-redux";
import { useFieldArray, useFormContext } from "react-hook-form";
import {FormAddItem, Item} from '.'
import * as _ from 'lodash'
interface FindSNProps {
  prepend: any,
  fields: any
}

let snss = 1
const FindSN: React.FC<FindSNProps>= props => {
  
  const dispatch = useDispatch();

  const [input, setInput] = React.useState<string>("");

  const {watch} = useFormContext<FormAddItem>()
  


  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const newItems: Item  = {
    //   serialNumber: input
    // }

    
   



    const replaced_comma_sn = input.replace(/,/g, " ")

    const arr_sn = replaced_comma_sn.split(' ');
    // const arr_sn_comma =  sn.split(',');

    const removed_duplicated_sn = _.uniq(arr_sn)
    
    const oldSns = watch('items') || []
    // console.log('oldsn', oldSns)



    let result: Array<any> = []
    // console.log(removed_duplicated_sn,'reve')
    removed_duplicated_sn.map((item: string) => {

        if (item.length > 0) {
            const serialNumber = item.trim();

            const found = _.find(oldSns, { 'serialNumber': serialNumber })
         

            if (!found) {
              result.unshift({serialNumber: item})
            }
        }
    })

    if(result.length > 0) {
      props.prepend([...result])

      result = []

    }
    // props.prepend({serialNumber: input})





    setInput("");
  };

  return (
    <tr >
      <td colSpan={8}>
        <Form onSubmit={onSearch}>
          <Search
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
          />
        </Form>
      </td>
    </tr>
  );
};

export default FindSN;
