import React from "react";
export const CreateItemContext = React.createContext({});

export interface CreateItemDAO {
  serialNumber?: string;
  otherNames?: Array<string>;
  manufactorId?: number;
  hasSerial?: boolean;
  shortDescription?: string;
  longDescription?: string;
  note?: string;
  categoryId?: number;
  supplierId?: number;
  modelId?: number;
}

const CreateItemProvider: React.FC = props => {
  const [state, setState] = React.useState<Array<CreateItemDAO>>([]);

  let newItem: CreateItemDAO = {};

  const build = () => {
  };

  return (
    <CreateItemContext.Provider
      value={{
        value: newItem,
        actions: { build },
        reducer: { state, setState }
      }}
    >
      {props.children}
    </CreateItemContext.Provider>
  );
};

export default CreateItemProvider;
