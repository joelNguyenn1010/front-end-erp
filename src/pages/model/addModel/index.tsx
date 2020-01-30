import React from "react";
import { Button, Row, Col, message } from "antd";
import ManufactorCreation from "./manufactorSearch";
import CategorySearch from "./categorySearch";
import AddName from "./addName";
import * as yup from "yup";

import { useForm, FormContext } from "react-hook-form";
import HasSerialModel from "./hasSerialModel";
import { useMutation } from "@apollo/react-hooks";
import { ADD_MODEL } from "../../../graphql/mutation/modelMutation";



const schema = yup.object().shape({
  name: yup.string().required("Model name is required"),
  manufactorId: yup.number().integer().notRequired(),
  categoryId: yup.number().integer().notRequired(),
  note: yup.string().notRequired(),
  hasSerial: yup.boolean().required()
});



export type FormDataModel = {
  name?: string,
  manufactorId?: number,
  categoryId?: number,
  note?: string,
  hasSerial: boolean
};


interface AddModelProps {
  onSuccess?: (value?: any) => void,

  defaultValues?: {}

} 

const AddModel: React.FC<AddModelProps> = props => {


  const methods = useForm<FormData>({
    validationSchema: schema,
    // defaultValues: {hasSerial: true, name:''}
  })

  const [createNewModel] = useMutation(ADD_MODEL,
    {
      onCompleted: () => {
        message.success("New model created")
        methods.reset({})
        if(props.onSuccess) {
          props.onSuccess()
        }

      },
      onError: (error) => {
        console.log(error)
        message.error("Something went wrong, please try again")
      }
    })


  const onSubmit = (values: any) => {
    console.log(values)
    const variables = {
      ...values
    }

    createNewModel({variables})
  }


  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>

        <Row>
          <Col span={24}>
            <AddName />
          </Col>
        </Row>


        <Row>
          <Col span={24}>
            <ManufactorCreation />
          </Col>
        </Row>


        <Row>
          <Col span={24}>
            <CategorySearch />
          </Col>
        </Row>




        <Row style={{ marginTop: '2rem' }}>
          <Col span={24}>
            <HasSerialModel />
          </Col>
        </Row>

        <Row style={{ marginTop: '2rem' }}>
          <Col span={24}>

            <Button htmlType="submit">Submit</Button>
            {/* <SubmitModel /> */}
          </Col>

        </Row>

      </form>
    </FormContext>
  );
};

export default AddModel;
