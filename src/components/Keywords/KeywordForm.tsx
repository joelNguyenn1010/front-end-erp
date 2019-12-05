import React, { FormEvent, useState, ChangeEvent } from 'react'

import { useDispatch } from 'react-redux'

import QueryForm from '../Form/QueryForm'
import { addKeyword } from '../../store/action/googleadsSetting/settingAction';
const KeywordForm: React.FC = () => {


    const dispatch = useDispatch();

    const [query, setQuery] = useState<string>('')


    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault()
        if (query.length > 0) {
            dispatch(addKeyword(query))
            // resset the input
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
        />
    )
}

export default KeywordForm