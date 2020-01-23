import { SALUTATION_ENUM } from './enum/index';
import ApolloClient from 'apollo-boost';

import { InMemoryCache } from 'apollo-cache-inmemory';
import {SubscriptionClient} from 'subscriptions-transport-ws';



const production = 'http://api.product.ipsupply.net/graphql'
const local = 'http://localhost:5000/graphql'


const client = new ApolloClient({
  uri: 'http://api.product.ipsupply.net/graphql',
  cache: new InMemoryCache(),
  typeDefs: SALUTATION_ENUM
});

export default client