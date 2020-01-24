import React, { useState } from 'react'
import SearchCreation from '../../../components/searchCreation'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { MANUFACTURE_QUERY } from '../../../graphql/query/modelQuery'
import { ADD_MANUFACTURE, EDIT_MODEL_MANUFACTOR } from '../../../graphql/mutation/modelMutation'
import { message } from 'antd'
import client from '../../../graphql'

interface EditableManufactorProps {
    text: string,
    record: any
}
const EditableManufactor: React.FC<EditableManufactorProps> = props => {
    const { text, record } = props

    const [value, setValue] = useState<string>(text)


    const { data, refetch } = useQuery(MANUFACTURE_QUERY, {
        // bỏ varialbe search vào
        variables: { name: '' },
    })


    // content?: Array<Content>;
    // onSelected?: any;
    // onClickCreate?: (input: string) => void;
    // resetInput?: () => void;
    // loading?: boolean;
    // onSearch: (input: string) => void;
    // placeholder?: string;
    // onFocus?: () => void;
    // defaultValue?: string;
    // input: any ;

        // Để add manufacture mới
        const [addManufacture] = useMutation(ADD_MANUFACTURE, {
            onError: (error: any) => {
                // xem có lỗi hay không
                message.error("We can't create new manufacture, please try again")
            },
            onCompleted: (data: any) => {
                const name = data.createNewManufacture.name;
                // fetch lại data mới khi tạo
                refetch({ name: name })
                message.success(`Manufacture ${data.createNewManufacture.name} created`)
            }
        })
    
    
        // execute khi button create chạy
        const onCreate = (val: string) => {
            addManufacture({ variables: { name: val } })
        }

        

    const onSelected = (val: string, option: any) => {
        refetch({ name: '' })
        const oldText = props.text

        setValue(val)

        const id = record.id
        const manufactorId = parseInt(option.key)

        client.mutate({mutation: EDIT_MODEL_MANUFACTOR, variables: { id, manufactorId } })
        .catch((err) => {
            // rollback to the old value of there error
            setValue(oldText)
            message.error("Can't update the manufacture of this model")
        })

        // dispatch(changeValueAction('manufactor', val))
        // dispatch(changeValueAction('manufactorId', parseInt(option.key)))
    }



    let timeout: any;
    const onSearch = (val: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            refetch({ name: val })
        }, 220);
    }

    return (
        <SearchCreation
            onSelected={onSelected}
            input={value}
            onSearch={onSearch}
            content={data ? data.manufactor ? data.manufactor.data : [] : []}
            onClickCreate={onCreate}


        />
    )
}

export default EditableManufactor
