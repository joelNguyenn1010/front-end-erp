import React from 'react'
import { Select } from 'antd';

import { FormDataModel } from '.';
import { useFormContext, Controller } from 'react-hook-form';
import { watch } from 'fs';

const HasSerialModel: React.FC = () => {

    const { control, setValue } = useFormContext<FormDataModel>()

    return (
        <Controller
            as={<Select onChange={(value: any) => {
                console.log(value.target.value, "redio")
                var isTrueSet = (value.target.value == 'true');

                setValue('hasSerial', isTrueSet)
            }}>
                <Select.Option value={"true"}>Manage By Serial Number</Select.Option>
                <Select.Option value={"false"}>Manage By Quantity</Select.Option>
            </Select>}

            defaultValue={"true"}
            // defaultValue={}
            control={control}
            name="hasSerial"
        />
    )
}

export default HasSerialModel