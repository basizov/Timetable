import React from "react";
import { Route } from "react-router";
import HomePage from "../../components/HomePage/HomePage";
import SchedulerDashboard from "../../components/SchedulerPage/SchedulerDashboard";
import SchedulerFullDetails from "../../components/SchedulerPage/SchedulerDetails/SchedulerFullDetails";
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
            <div className="container container_fullpage">
              <Route exact path='/scheduler' component={SchedulerDashboard} />
              <Route exact path='/scheduler/:name' component={SchedulerFullDetails} />
            </div>
          </>
        )} />
    </>
  );
}

export default  App;