import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { Cascader, message } from 'antd'
import { ChangeDataAction } from '../../../store/action/createItemWithoutSNAction'
import SearchCreation from '../../../components/searchCreation'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { QUERY_WHLOCATION } from '../../../graphql/query'
import { CREATE_NEW_WHLOCATION } from '../../../graphql/mutation'

const options = [
  {
    value: "sydney",
    label: "Sydney",

  },
  {
    value: "us",
    label: "US",
  }
];

const InputWhLocation = () => {

  const name = useSelector((state: AppState) => state.CreateItemWithoutSNReducer.input.whlocation)

  const dispatch: any = useDispatch()

  const { loading, error, data, refetch } = useQuery(QUERY_WHLOCATION, {
    // bỏ varialbe search vào
    variables: { name: '' },
  })

  const onChange = (e: string[], option: any) => {

    dispatch(ChangeDataAction('whlocation', e[0]))
  }



  //add data that user selected and return id
  const onSelect = (e: string, option: any) => {
      dispatch(ChangeDataAction('whlocation', e))
      dispatch(ChangeDataAction('whlocationId', parseInt(option.key)))
  }


  // create new warehouse
  const [addData] = useMutation(CREATE_NEW_WHLOCATION, {
    onError: (ee) => {
      console.log(ee)
      message.error("We can't create new warehouse, please try again")
    },
    onCompleted: (data: any) => {
      //create new name in mutation ADD_SUPPLIER
      const name = data.createNewWHLocation.name
      //refetch API 

      refetch({ name })
      //Print message
      message.success(`Warehouse created`)

    }
  })

  const onCreate = (e: string) => {
    addData({ variables: { name: e } })
  }



  let timeout: any;
  const onSearch = (val: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      refetch({ name: val })
    }, 220);
  }


  return (
    <div>
      <label>
        Wh Location:
        </label>
      <SearchCreation
        content={data ? data.whlocation ? data.whlocation.data : [] : []}
        input={name}
        placeholder='WH Location'
        onSearch={onSearch}
        // onClickCreate={onCreate}
        onSelected={onSelect}
      />

    </div>
  )
}

export default InputWhLocation
