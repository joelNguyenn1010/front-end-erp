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