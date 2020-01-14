import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../store';
import { Cascader } from 'antd';
import { changeItemValue } from '../../../store/action/itemAction/createItemAction';

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

interface AddWarehouseProps {
    index: number
}


const AddItemWarehouse:React.FC<AddWarehouseProps> = props => {

    const name = useSelector((state:AppState) => state.createItemReducer.items[props.index].warehouse)

    const dispatch = useDispatch()

    const onChange = (val: string[]) => {
        dispatch(changeItemValue(props.index, 'warehouse', val[0]))
    }

    return (
        <div>
            <Cascader defaultValue={[name]} options={options} onChange={onChange} />
        </div>
    )
}

export default AddItemWarehouse
