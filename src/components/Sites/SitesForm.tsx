import React, { FormEvent, useState, ChangeEvent } from 'react'
import QueryForm from '../Form/QueryForm'
import { useDispatch } from 'react-redux'
import { addSites } from '../../store/action/googleadsSetting/settingAction'



// this component will handle all the sites actions
const SitesForm: React.FC = () => {

    const dispatch = useDispatch()
    const [query, setQuery] = useState<string>('')


    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault()
        if(query.length > 0) {
            
            // dispatch new sites
            dispatch(addSites(query))
            setQuery('')
        }

    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setQuery(event.target.value)
    }

    return (
        <QueryForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            value={query}
            color="green"
        />
    )
}

export default SitesForm