import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { ApolloQueryResult, gql } from 'apollo-boost';
import client from '../../graphql';
declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
interface Validation {
    mess: string,
    validate: typeof ValidateStatuses[number]
}




interface InputSearchModelProps {
    label: string,
    mutation: string,
    returnResolve?: (value: string | null) => void,
    onChangeInput: (value: string) => void, 

    notFoundModel?: string | 'Not found model'
    input: string,
    validation: Validation,
    setValidation: (state: Validation) => void,

    foundModel?: string | 'Model found, '
}


const InputSearchValidation: React.FC<InputSearchModelProps> = props => {


    let timeout: any = null;

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        props.onChangeInput(input)


        props.setValidation({
            mess: "Validating",
            validate: "validating"
        })

   
        if (input && input.length > 0) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                // console.log("mode del")
                const QUERY = gql`
                 query {
                   ${props.mutation}(name: "${input}") {
                     name
                   }
                 }
               `
                client.query({ query: QUERY })
                    .then((res: ApolloQueryResult<any>) => {
                        if (res && res.data && res.data.findModelWithName && res.data.findModelWithName.name) {
                            props.setValidation({
                                mess: `The ${input} already exist`,
                                validate: "error"
                            })
                            // if (props.returnResolve)
                            //     props.returnResolve(null)

                        } else if (input.length > 1) {

                            props.setValidation({
                                mess: `You can create this model`,
                                validate: "success"
                            })
                            // if (props.returnResolve)
                            //     props.returnResolve(input)
                        } else {
                            props.setValidation({
                                mess: ``,
                                validate: ""
                            })

                            // if (props.returnResolve)
                            //     props.returnResolve(null)
                        }
                    })
                    .catch((reason: any) => {

                        props.setValidation({
                            mess: `We can't validate the ${props.label}, but you can still create new model`,
                            validate: "warning"
                        })
                        // if (props.returnResolve)
                        //     props.returnResolve(null)
                    })
            }, 2000);
        }
    }
    return (
        <Form.Item
            label={props.label}
            validateStatus={props.validation.validate}
            help={props.validation.mess}
            hasFeedback>

            <Input
                value={props.input}
                onChange={onSearch}
                placeholder={props.label} id={props.validation.validate} />

        </Form.Item>
    )
}

export default InputSearchValidation