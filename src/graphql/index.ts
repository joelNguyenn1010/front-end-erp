import ApolloClient from 'apollo-boost';

import { InMemoryCache } from 'apollo-cache-inmemory';

const production = 'http://api.product.ipsupply.net/graphql'
const local = 'http://localhost:5000/graphql'
const client = new ApolloClient({
  uri: production,
  cache: new InMemoryCache()
});

export default client