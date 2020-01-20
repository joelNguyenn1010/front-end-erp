import React from 'react'

import { Form } from 'antd'
import RightClickMenu from '../../components/rightClickMenu'

export const EditTableContext = React.createContext({})

const EditTableRow: React.FC = ({ ...props }) => {
    return (
        <RightClickMenu data={{...props}} menus={[<p>hello</p>]}>
      

        </RightClickMenu>
    )

}

export default Form.create()(EditTableRow)
