import React from 'react';
import { Route } from 'react-router';
import Home from '../../components/HomePage/Home';
import Scheduler from '../../components/SchedulerPage/Scheduler';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <div className="container">
              <Route exact path='/scheduler' component={Scheduler} />
            </div>
          </>
        )} />
    </div>
  );
}

export default  App;
