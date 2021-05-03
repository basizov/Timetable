import React from 'react';
import { Route } from 'react-router';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import News from '../../components/News/News';
import Sidebar from '../../components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route
        path='/(.+)'
        render={() => (
          <>
            <Header />
            <Sidebar />
            <div className="container container--full">
              <Route exact path='/news' component={News} />
              <Route exact path='/login' component={Login} />
            </div>
          </>
        )} />
    </div>
  );
}

export default  App;
