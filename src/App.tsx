import React from 'react';
import Layout from './components/layout';
import ComponentLayout from './components/componentLayout';
import SearchCreations from './components/searchCreation';

const App: React.FC = () => {



  return (
    <ComponentLayout>
        <SearchCreations />
    </ComponentLayout>
  );
}

export default App;
