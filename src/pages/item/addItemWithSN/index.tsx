import React, { useEffect } from "react";
import FindSN from "./findSN";
import { TableBodyItem } from "./tableBodyItem";
import { useDispatch } from "react-redux";
import { Descriptions, Button } from "antd";
import { useForm, FormContext, useFieldArray } from "react-hook-form";
import * as yup from 'yup'
import AddItemForm from "./addItemForm";


export interface Item {
  serialNumber: string
  modelId: string
}


const schema = yup.object().shape({


  items: yup.array().required("Item is requ").of(

    yup.object().shape({
      serialNumber: yup.string().trim().required(),
      modelId: yup.string().required("Model is required"),
      version: yup.string().notRequired(),
      conditionId: yup.number().notRequired().integer(),
      cost: yup.string().notRequired(),
      note: yup.string().notRequired()
    })
  )

})




export type FormAddItem = {
  // serialNumber: string,
  // modelId: string,
  // price

  items: Array<Item>
  // supplierId: number,

}

const AddItem: React.FC = () => {

  const dispatch = useDispatch()


  const methods = useForm<FormAddItem>({
    validationSchema: schema
  })



  const { control, errors } = methods

  const { fields, prepend, remove } = useFieldArray({ control, name: "items" });


  const onSubmit = (data: FormAddItem) => {
    console.log(data)
  }

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Descriptions title="Add Item with Serial Number">
          <Descriptions.Item label="Date">2019</Descriptions.Item>
          <Descriptions.Item label="Supplier">Supplier</Descriptions.Item>
          <Descriptions.Item label="Warehouse">Warehouse</Descriptions.Item>
        </Descriptions>

        <table style={{ width: "100%" }}>
          <thead >
            <tr>
              <th style={{ width: '20%' }}>SN</th>
              <th style={{ width: '20%' }}>Model</th>
              <th style={{ width: '15%' }}>Ver</th>

              <th style={{ width: '15%' }}>Condition</th>
              {/* <th style={{width: '15%'}}>Supplier</th> */}
              <th style={{ width: '15%' }}>Cost</th>
              <th style={{ width: '20%' }}>Note</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
            <FindSN fields={fields} prepend={prepend} />
          </thead>

          {/* <TableBodyItem /> */}
          <tbody>
            {fields.map((value, index) => {
              console.log(index,'index', value)
              return(
              <AddItemForm key={value.id} value={value} index={index} remove={remove}/>
            )})}
          </tbody>
        </table>


            <tr><td><Button htmlType="submit">Submit</Button></td></tr>

      </form>
    </FormContext>
  );
};

export default AddItem;
