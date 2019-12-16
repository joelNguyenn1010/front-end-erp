import React, { useState, useContext } from 'react';
import { Input, Form } from 'antd';
import client from '../../../graphql';
import { ApolloQueryResult, gql } from 'apollo-boost';
import { CreateModelContext } from '../../../context/provider/createModelContext';
import InputSearchValidation from '../../../components/InputSearchValidate';

declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];

interface Validation {
    mess:  string,
    validate: typeof ValidateStatuses[number]
}

const AddName = () => {

    
    const context: any = useContext(CreateModelContext)


    // "success", "warning", "error", "validating", ""
    // const [validation, setValidation] = useState<Validation>({
    //     mess: "",
    //     validate: ""
    // })

    // let timeout: any = null;

    // const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

    //     setValidation({
    //         mess: "Validating",
    //         validate: "validating"
    //     })

    //     const input = e.target.value
    //     if (input && input.length > 0) {
    //         clearTimeout(timeout);
    //         timeout = setTimeout(function () {
    //             const FIND_MODEL_WITH_NAME = gql`
    //              query {
    //                findModelWithName(name: "${input}") {
    //                  name
    //                }
    //              }
    //            `
    //             client.query({ query: FIND_MODEL_WITH_NAME })
    //                 .then((res: ApolloQueryResult<any>) => {
    //                     if (res && res.data && res.data.findModelWithName && res.data.findModelWithName.name) {
    //                         setValidation({
    //                             mess: `The model ${input} already exist`,
    //                             validate: "error"
    //                         })

    //                     } else {

    //                         context.value.name = input

    //                         setValidation({
    //                             mess: `You can create ${input}`,
    //                             validate: "success"
    //                         })
    //                     }
    //                 })
    //                 .catch((reason: any) => {
    //                     setValidation({
    //                         mess: `We can't validate this model, but you can still create new model`,
    //                         validate: "warning"
    //                     })
    //                 })
    //         }, 220);
    //     }
    // }

    return (
        <InputSearchValidation 
            label="Model"
            mutation="findModelWithName"
            returnResolve={(value: string | null) => {
                if(value) {
                    context.value.name = value
                }
            }}
        />
    )
}
export default AddName