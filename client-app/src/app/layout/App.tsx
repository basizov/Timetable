import React from "react";
import { Route } from "react-router";
import HomePage from "../../components/HomePage/HomePage";
import SchedulerPage from "../../components/SchedulerPage/SchedulerPage";
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
              <Route exact path='/scheduler' component={SchedulerPage} />
            </div>
          </>
        )} />
    </>
  );
}

export default  App;