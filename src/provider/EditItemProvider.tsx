import React, { createContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ITEM_QUERY } from "../graphql/query/productQuery";

export const EditItemContext = createContext({});

const EditItemProvider: React.FC = props => {
  const [data, setData] = React.useState<Array<any>>([]);

  const [serialInput, setSerialInput] = React.useState<any>({
    limit: 10,
    page: 1,
    serialNumber: " "
  });

  const { refetch } = useQuery(GET_ITEM_QUERY, {
    variables: {
      limit: serialInput.limit,
      page: serialInput.page,
      serialNumber: serialInput.serialNumber
    },

    onCompleted: (data: any) => {
      // setData(data.findItemBySerial.data);
    }
  });

  return (
    <EditItemContext.Provider value={data}>
      {props.children}
    </EditItemContext.Provider>
  );
};

export default EditItemProvider;
