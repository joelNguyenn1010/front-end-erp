import ApolloClient from 'apollo-boost';

import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'http://api.product.ipsupply.net/graphql',
  cache: new InMemoryCache()
});

export default client