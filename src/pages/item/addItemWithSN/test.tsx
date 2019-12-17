import React from 'react'
import axios from "axios";

const Test = () => {

    const [data, setData] = React.useState({ hits: [] })
    const [query, setQuery] = React.useState('');
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `http://apisn.ipsupply.net:2580/api/check-sn/${query}`,
          );
          setData(result.data);
          console.log(result.data)
        };
        fetchData();
      }, [query]);
    

      return (
        <React.Fragment>
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="button" onClick={() => setSearch(query)}>
            Search
          </button>
            
        </React.Fragment>
      );
}

export default Test
