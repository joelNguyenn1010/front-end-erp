import React from 'react';
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


    let value: CreateModelDAO = {
        name: '',
    }


    const build = () => {
       
        console.log(value)
    }
    



    return (
        <CreateModelContext.Provider value={{ value: value, action: { build } }}>
            {props.children}
        </CreateModelContext.Provider>
    )
};

export default CreateModelProvider