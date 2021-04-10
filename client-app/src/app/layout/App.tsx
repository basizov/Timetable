import React from "react";
import { Route } from "react-router";
import HomePage from "../../components/HomePage/HomePage";
import SchedulerDashboard from "../../components/SchedulerPage/SchedulerDashboard";
import Navgation from "./Navigation/Navigation";

const App: React.FC = () => {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navgation />
            <div className="container">
              <Route exact path='/scheduler' component={SchedulerDashboard} />
            </div>
          </>
        )} />
    </>
  );
}

export default  App;