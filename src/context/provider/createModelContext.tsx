import React from 'react';
import client from '../../graphql';
import { useMutation } from '@apollo/react-hooks';
export const CreateModelContext = React.createContext({});


interface CreateModelDAO {
    name: string,
    otherNames?: Array<string>,
    manufactorId?: number,
    hasSerial?: boolean,
    shortDescription?: string,
    longDescription?: string,
    note?: string,
    categoryId?: number
}


const CreateModelProvider: React.FC = props => {

    const [checkModel, setCheckModel] = React.useState<string | undefined>(undefined)

    // const {} = useMutation()
    

    let value: CreateModelDAO = {
        name: '',
    }


    const build = () => {
       
    


        console.log(value)
    }
    



    return (
        <CreateModelContext.Provider value={{ value: value, action: { build }, model: {checkModel, setCheckModel} }}>
            {props.children}
        </CreateModelContext.Provider>
    )
};

export default CreateModelProvider