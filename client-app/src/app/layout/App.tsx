import React from 'react';
import { Route } from 'react-router';
import Home from '../../components/HomePage/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <div className="container">
            </div>
          </>
        )} />
    </div>
  );
}

export default  App;
