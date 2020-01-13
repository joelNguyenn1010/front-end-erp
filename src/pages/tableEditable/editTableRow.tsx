import React from 'react'

import {Form } from 'antd'

export const EditTableContext = React.createContext({})

const EditTableRow:React.FC = ({ ...props}) => {
    const [data, setData] = React.useState<Array<string>>([])

    console.log(data)
    console.log({...props})
    return (
        <EditTableContext.Provider value={data}>
         <tr {...props}  />
        </EditTableContext.Provider>
    )
    
}

export default Form.create()(EditTableRow)
