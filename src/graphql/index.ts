import { SALUTATION_ENUM } from './enum/index';
import ApolloClient from 'apollo-boost';

import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'http://api.product.ipsupply.net/graphql',
  cache: new InMemoryCache(),
  typeDefs: SALUTATION_ENUM
});

export default client