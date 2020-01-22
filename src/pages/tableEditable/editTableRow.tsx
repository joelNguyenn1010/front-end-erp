import React from 'react'

import {Form } from 'antd'

export const EditTableContext = React.createContext({})

const EditTableRow:React.FC = ({ ...props}) => {
    return (
         <tr {...props}  />
    )
    
}

export default Form.create()(EditTableRow)
