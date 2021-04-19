import React from "react";
import { Route } from "react-router";
import HomePage from "../../components/HomePage/HomePage";
import SchedulerDashboard from "../../components/SchedulerPage/SchedulerDashboard";
import SchedulerFullDetails from "../../components/SchedulerPage/SchedulerDetails/SchedulerFullDetails";
import Navigation from "./Navigation/Navigation";
import Login from "../../components/LoginPage/Login";

const App: React.FC = () => {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navigation />
            <div className="container">
              <Route exact path='/scheduler' component={SchedulerDashboard} />
              <Route exact path='/scheduler/:name' component={SchedulerFullDetails} />
              <Route exact path='/login' component={Login} />
            </div>
          </>
        )} />
    </>
  );
}

export default  App;