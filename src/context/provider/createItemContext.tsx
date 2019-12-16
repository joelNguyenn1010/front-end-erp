import React from 'react';
export const CreateItemContext = React.createContext({});


interface CreateItemDAO {
    serialNumber?: string,
    otherNames?: Array<string>,
    manufactorId?: number,
    hasSerial?: boolean,
    shortDescription?: string,
    longDescription?: string,
    note?: string,
    categoryId?: number
}


const CreateItemProvider: React.FC = props => {

    let newItem: CreateItemDAO = {

    }





    const build = () => {
       
        console.log(newItem)
    }
    

    return (
        <CreateItemContext.Provider value={{ value: newItem , actions: { build } }}>
            {props.children}
        </CreateItemContext.Provider>
    )
};

export default CreateItemProvider