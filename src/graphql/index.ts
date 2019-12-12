import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://api.product.ipsupply.net/graphql',
});

export default client