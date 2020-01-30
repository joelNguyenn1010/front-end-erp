import React from 'react';

import InputSearchValidation from '../../../components/InputSearchValidate';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';

import { Field } from 'formik';
import { Form } from 'antd';
import { useFormContext } from 'react-hook-form';
import {FormDataModel} from '.'

declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];

interface Validation {
    mess: string,
    validate: typeof ValidateStatuses[number]
}

const AddName = () => {


    const {register, errors} = useFormContext<FormDataModel>()



    return (


        <Form.Item
            label="Model"
            
            help={errors.name?.message}
            validateStatus={errors.name ?"error" : ""}
        >
            <input name="name" ref={register} type="text" className="ant-input"/>
        </Form.Item>


        // <InputSearchValidation 
        //     onChangeInput={(e) => dispatch(changeValueAction('name', e))}
        //     label="Model"
        //     input={name}
        //     validation={validation}
        //     setValidation={setValidation}
        //     mutation="findModelWithName"
        //     returnResolve={(value: string | null) => {
        //         if(value) {
        //             dispatch(changeValueAction('name', value))
        //         }
        //     }}
        // />
    )
}
export default AddName