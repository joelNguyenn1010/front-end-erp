import React, { useState } from 'react'
import SearchCreation from '../../../../components/searchCreation'
import { useQuery } from '@apollo/react-hooks';
import { GET_MODEL_QUERY } from '../../../../graphql/query/modelQuery';
import { useFormContext, Controller } from 'react-hook-form';
import { FormAddItem } from '..';


interface AddModelInDBProps {
    index: number
}
const AddModelInDB: React.FC<AddModelInDBProps> = props => {

    const [name, setName] = useState<string>();
    const {control, setValue} = useFormContext<FormAddItem>()


    const variables = {
        name: '',
        limit: 10,
        page: 1,
        hasSerial: true
    }
        

    const { data, refetch, loading } = useQuery(GET_MODEL_QUERY, {
        variables
    });


    const onCreate = () => {
        // setCiscoModel(input)
        // setOpen(true)
    }



      // changeItemValue
      const onSelected = (val: string, option: any) => {
        
        setName(val)
        setValue(`items[${props.index}].modelId`,parseInt(option.key))
        
        // dispatch(changeItemValue(props.index, 'model', val))
        // dispatch(changeItemValue(props.index, 'modelId', parseInt(option.key)))
    }

    let timeout: any = null;
    const onSearch = (val: string) => {
    
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({...variables, name: val})
        }, 220);
    };


    return (
        <td>
            <Controller 
                as={<SearchCreation
                    onDropdownVisibleChange={() => refetch({...variables, name: ''})}
                    input={name}
                    loading={loading}
                    onSearch={onSearch}
                    onSelected={onSelected}
                    //if have data will display all data or return null array
                    content={data ? data.model ? data.model.data : [] : []}
                    onClickCreate={onCreate}
                />}
                name={`items[${props.index}].modelId`}
                control={control}
            />
             
        </td>
    )
}

export default AddModelInDB
