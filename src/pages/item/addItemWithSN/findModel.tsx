import React, { useState } from "react";
import SearchCreation from "../../../components/searchCreation";
import { useQuery } from "@apollo/react-hooks";
import { GET_MODEL_QUERY } from "../../../graphql/query";
import { CreateItemContext } from "../../../context/provider/createItemContext";
import { message } from "antd";

const FindModel: React.FC = () => {
  const context: any = React.useContext(CreateItemContext);
  const [input, setInput] = useState<string>('')



  const { data, loading, error, refetch } = useQuery(GET_MODEL_QUERY, {
    variables: { name: "", limit: 5, page: 1 }
  });

  if (error) {
    message.error("We can't fetch data, please try again ")
  }

  const onSelected = (e: string) => {
    context.value.modelId = parseInt(e)
  }

  let timeout: any = null;
  const onSearch = (val: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      refetch({ name: val, limit: 5, page: 1 })
    }, 220);
  }

  return (
    <React.Fragment>
      <SearchCreation
        input={input}
        setInput={setInput}
        loading={loading}
        onSearch={onSearch}
        content={data ? data.model ? data.model.data : [] : []}
        onSelected={onSelected}
      />
    </React.Fragment>
  );
};

export default FindModel;
