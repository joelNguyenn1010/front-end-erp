import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../../store'
import { Cascader } from 'antd'
import { ChangeDataAction } from '../../../store/action/createItemWithoutSNAction'

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

    

    const onChange = (e: string[], option: any) => {

        dispatch(ChangeDataAction('whlocation', e[0]))
    }

    return (
        <div>
        <label>
            Wh Location:
        </label>
        <Cascader defaultValue={[name]} options={options} onChange={onChange}/>,
      
        </div>
    )
}

export default InputWhLocation
