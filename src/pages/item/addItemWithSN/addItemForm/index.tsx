import React from 'react'
import { Item, FormAddItem } from '..'
import { Button } from 'antd'
import { useFormContext, Controller } from 'react-hook-form'
import AddModelForm from './addModel'

interface AddItemFormProps {
    remove: any
    value: any
    index: number
}


const AddItemForm: React.FC<AddItemFormProps> = props => {
    const { control, register } = useFormContext<FormAddItem>()
    const {serialNumber} = props.value
    return (
        <tr>
            <Controller
                as={<td>{serialNumber}</td>}
                control={control}
                defaultValue={props.value.serialNumber}
                name={`items[${props.index}].serialNumber`}
            />

            <AddModelForm serialNumber={serialNumber} index={props.index} />


            <td><input name={`items[${props.index}].version`}ref={register} className="ant-input"/></td>

            <td>condition</td>

            <td><input name={`items[${props.index}].cost`} ref={register} className="ant-input"/></td>

            <td><input name={`items[${props.index}].note`} ref={register} className="ant-input"/></td>




            <td><Button onClick={() => props.remove(props.index)}>Delete</Button></td>
        </tr>
    )
}

export default AddItemForm
