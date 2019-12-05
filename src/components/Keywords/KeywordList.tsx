import React from 'react'
import { Keywords } from '../../store/contract/googladsSetting/settingContract'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store/ApplicationState'
import { Table, Button, Icon } from 'antd'
import { removeKeyword } from '../../store/action/googleadsSetting/settingAction'

interface KeywordTable {
    key: number,
    name: string,
}

const KeywordList: React.FC = () => {

    const keywords: Keywords = useSelector((state: AppState) => state.settingReducer.keys)

    const dispatch = useDispatch()

    const handleRemove = (position: number) => {

        dispatch(removeKeyword(position))
        console.log('removing', position)
    }

    // https://ant.design/components/table/
    const dataSource: KeywordTable[] = keywords.names.map((name, index) => {
        return {
            key: index,
            name
        }
    })

    const columns = [
        {
            dataIndex: 'name',
            key: 'name',
        },
        {

            key: 'action',
            render: (record: KeywordTable) => {

                return (
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            onClick={() => handleRemove(record.key)}
                            size="small"><Icon type="minus-circle" />Clear</Button>

                    </div>
                )
            }

        },

    ]
    return (<Table scroll={{ y: 460 }} showHeader={false} pagination={false} dataSource={dataSource.reverse()} columns={columns}>

    </Table>)
}


export default KeywordList