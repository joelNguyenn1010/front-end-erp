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
    returnResolve?: (value: string | null) => void
}


const InputSearchValidation: React.FC<InputSearchModelProps> = props => {

    const [validation, setValidation] = useState<Validation>({
        mess: "",
        validate: ""
    })

    let timeout: any = null;

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValidation({
            mess: "Validating",
            validate: "validating"
        })

        const input = e.target.value
        if (input && input.length > 0) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
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
                            setValidation({
                                mess: `The ${input} already exist`,
                                validate: "error"
                            })
                            if (props.returnResolve)
                                props.returnResolve(null)

                        } else if (input.length > 1) {

                            setValidation({
                                mess: `You can create ${input}`,
                                validate: "success"
                            })
                            if (props.returnResolve)
                                props.returnResolve(input)
                        } else {
                            setValidation({
                                mess: ``,
                                validate: ""
                            })

                            if (props.returnResolve)
                                props.returnResolve(null)
                        }
                    })
                    .catch((reason: any) => {

                        setValidation({
                            mess: `We can't validate the ${props.label}, but you can still create new model`,
                            validate: "warning"
                        })
                        if (props.returnResolve)
                            props.returnResolve(null)
                    })
            }, 220);
        }
    }
    return (
        <Form.Item
            label={props.label}
            validateStatus={validation.validate}
            help={validation.mess}
            hasFeedback>

            <Input
                onChange={onSearch}
                placeholder={props.label} id={validation.validate} />

        </Form.Item>
    )
}

export default InputSearchValidation