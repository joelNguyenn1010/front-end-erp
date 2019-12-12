import React from 'react';
import ComponentLayout from './components/componentLayout';
import { Content } from './components/searchCreation';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Routing from './router';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql';


const App: React.FC = () => {


  return (
    <Router>
      <ApolloProvider client={client}>
        <ComponentLayout>
          <Routing />
        </ComponentLayout>
      </ApolloProvider>
    </Router>
  );
}

export default App;
