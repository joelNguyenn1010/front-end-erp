import React, { useContext } from 'react';

import { CreateModelContext } from '../../../context/provider/createModelContext';
import InputSearchValidation from '../../../components/InputSearchValidate';
import { useDispatch, useSelector } from 'react-redux';
import { changeValueAction } from '../../../store/action/createModelAction';
import { AppState } from '../../../store';



declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];

interface Validation {
    mess:  string,
    validate: typeof ValidateStatuses[number]
}

const AddName = () => {


    const dispatch = useDispatch()

    const name = useSelector((state: AppState) => state.createModelReducer.input.name)
    
    const [validation, setValidation] = React.useState<Validation>({
        mess: '',
        validate: ''
    })

    React.useEffect(() => {
        if(name.length < 1) {
            setValidation({
                mess: '',
                validate: ''
            })
        }
    }, [name])


    return (
        <InputSearchValidation 
            onChangeInput={(e) => dispatch(changeValueAction('name', e))}
            label="Model"
            input={name}
            validation={validation}
            setValidation={setValidation}
            mutation="findModelWithName"
            returnResolve={(value: string | null) => {
                if(value) {
                    dispatch(changeValueAction('name', value))
                }
            }}
        />
    )
}
export default AddName