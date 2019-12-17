import React from "react";
import axios from "axios";
import { Form, Input, message } from "antd";
import Search from "antd/lib/input/Search";
import client from "../../../graphql";
import { gql } from "apollo-boost";
import { CreateItemDAO } from "../../../context/provider/createItemContext";
import { CreateItemContext } from "../../../context/provider/createItemContext";

let timeout: any = null;

const FindSN: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const [input, setInput] = React.useState<string>("");

  const { reducer } = React.useContext<any>(CreateItemContext);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    clearTimeout(timeout);
    // const input = e.target.value.trim();
    timeout = setTimeout(function() {


      const oldState: Array<CreateItemDAO> = reducer.state.concat();
      
      let newItem: CreateItemDAO = {
        serialNumber: input.trim(),
        modelId: 1
      };

      axios
        .get(`http://apisn.ipsupply.net:2580/api/check-sn/${input}`)
        .then(res => {
          if (res && res.data) {
            const { ITEM_NAME } = res.data[0];

            const QUERY = gql`
                    query {
                        findModelWithName(name: "${ITEM_NAME}") {
                        name
                      }
                    }
                  `;

            client.query({ query: QUERY }).then(result => {
              if (result.data && result.data && result.data.findModelWithName) {
                console.log(result.data )
                oldState.push(newItem);
                reducer.setState(oldState);

                setInput("");
              } else {
                console.log(input, "Ko co trong db");
              }
            });
          }
        })
        .catch(err => {
          message.warning(
            "This serial number's model cannot be found on SN check"
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }, 550);
  };

  return (
    <tr>
      <td colSpan={6}>
        <Form onSubmit={onSearch}>
          <Search
            loading={loading}
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
          />
        </Form>
      </td>
    </tr>
  );
};

export default FindSN;
