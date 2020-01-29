import React, { useState } from 'react'
import SearchCreation from '../../../components/searchCreation'
import { useQuery } from '@apollo/react-hooks'
import { GET_MODEL_QUERY } from '../../../graphql/query/modelQuery'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { message } from 'antd'
import { ChangeDataAction } from '../../../store/action/itemAction/createItemWithoutSNAction'
import AddNewModelModal from '../addItemWithSN/addNewModelModal'
import { ModelCreate } from '../../../store/contract/Model'
import { ModelActionTypes } from '../../../store/types/model/model.types'

let timeout: any = null

const ModelSearch: React.FC = () => {

    const name = useSelector((state: AppState) => state.CreateItemWithoutSNReducer.input.model)

    const dispatch: any = useDispatch();

    const variables =  { name: '', limit: 5, page: 1, hasSerial: false }

    const { loading, data, refetch, error } = useQuery(GET_MODEL_QUERY, {
        variables
    })



    if (error) {
        console.log(error)
        message.error("We can't fetch the model, please try again")
    }

    const onSelected = (val: string, option: any) => {

        dispatch(ChangeDataAction('model', val))
        dispatch(ChangeDataAction('modelId', parseInt(option.key)))
    }


    const onSearch = (val: string) => {
        setCiscoModel(val)
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            refetch({...variables, name: val})
        }, 250)
    }



    const [open, setOpen] = useState<boolean>(false)
    const onCreate = () => {
        // dispatch
        setOpen(true)
        
    }

    const [ciscoModel, setCiscoModel] = useState<string>(name)


    //  for model creation
    const model: ModelCreate = {
        input: {
            name: ciscoModel,
            hasSerial: false,
            category: '',
            manufactor: '',
            manufactorId: 0,
            categoryId: 0,
        },
        res: {
            id: 0,
            name: ''
        }
    }

    return (
        <React.Fragment>
            <label>Model: </label>
            <SearchCreation
                placeholder={"Model"}
                loading={loading}
                onSearch={onSearch}
                input={name}
                content={data ? data.model ? data.model.data : [] : []}
                onSelected={onSelected}
                onClickCreate={onCreate}
            />


            {open &&  <AddNewModelModal
            model={model}
                setCiscoModel={''}
                ciscoModel={ciscoModel}
                open={open}
                setOpen={setOpen}
                onSuccessCreateOrClose={(response) => {
              



                    dispatch(ChangeDataAction('model', response.name))
                    dispatch(ChangeDataAction('modelId', parseInt(response.id)))
                    // clear the response after model been created
                    dispatch({type: ModelActionTypes.CLEAR_RESPONSE})


                    // dispatch(changeItemValue(props.index, 'model', response.name))
                    // dispatch(changeItemValue(props.index, 'modelId', response.id))
                    // setCiscoModel('')
                    setOpen(false)
                }}
            />}
        </React.Fragment>
    )
}

export default ModelSearch
