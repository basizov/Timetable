import React from 'react';
import { Route, Router } from 'react-router';
import Groups from '../../components/Groups/Groups';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Information from '../../components/Information/Information';
import Login from '../../components/Login/Login';
import News from '../../components/News/News';
import Sidebar from '../../components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <Header />
            <Sidebar />
            <main className="container">
              <Route exact path='/news' component={News} />
              <Route exact path='/info' component={Information} />
              <Route exact path='/groups' component={Groups} />
              <Route exact path='/login' component={Login} />
            </main>
          </>
        )} />
    </div>
  );
}

export default  App;
