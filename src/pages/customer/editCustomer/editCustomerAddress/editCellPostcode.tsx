import React from 'react'
import SearchCreation from '../../../../components/searchCreation'

let timeout: any = null

interface EditCellPostcodeProps {
    text: any,
    record: any
}

const EditCellPostcode:React.FC<EditCellPostcodeProps> = (props: any) => {

    const name : any = null
 
    const onSearch = () => {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            // refetch()
        },250)
    }

    return (
        <SearchCreation 
            input={name}
            onSearch={onSearch}
        />
    )
}

export default EditCellPostcode
