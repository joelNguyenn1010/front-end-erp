import React, { useState } from 'react';
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


    const [dummy, setDummy] = React.useState('')
    let value: CreateModelDAO = {
        name: '',
    }


    const build = () => {
       
    


        console.log(value)
    }

    const clear = () => {
        setDummy('clear')
        // setDummy('')
    }
    



    return (
        <CreateModelContext.Provider value={{ value: {dummy}, action: { build, clear } }}>
            {props.children}
        </CreateModelContext.Provider>
    )
};

export default CreateModelProvider