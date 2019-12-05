import React from 'react'
import { Keywords, Sites } from '../../store/contract/googladsSetting/settingContract'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store/ApplicationState'
import { Table, Button, Icon } from 'antd'
import { removeSite } from '../../store/action/googleadsSetting/settingAction'

interface SiteTable {
    key: number,
    name: string,
}

const SitesList: React.FC = () => {

    const keywords: Sites = useSelector((state: AppState) => state.settingReducer.sites)

    const dispatch = useDispatch()

    const handleRemove = (position: number) => {

        dispatch(removeSite(position))

    }

    // https://ant.design/components/table/
    const dataSource: SiteTable[] = keywords.names.map((name, index) => {
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
            render: (record: SiteTable) => {

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


export default SitesList