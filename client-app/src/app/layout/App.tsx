import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Groups from '../../components/Groups/Groups';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Information from '../../components/Information/Information';
import ForgetPassword from '../../components/Login/ForgetPassword';
import Login from '../../components/Login/Login';
import News from '../../components/News/News';
import NotFound from '../../components/NotFound/NotFound';
import ServerError from '../../components/ServerError/ServerError';
import Sidebar from '../../components/Sidebar/Sidebar';
import Timetable from '../../components/Timetable/Timetable';
import Loading from '../../features/Loading/Loading';
import { store } from '../stores/store';
import PrivateRoute from './PrivateRoute';

const App: React.FC = () => {
  const {
    commonStore: { token, setAppLoaded, appLoaded, showSidebar },
    userStore
  } = store;
  
  useEffect(() => {
    if (token) {
      userStore.getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [token, setAppLoaded, userStore]);
  
  if (!appLoaded) return <Loading backgroundColor='#fff' />;
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <Header />
            <Sidebar />
            <main className='container'>
              <div className={`dimmed ${showSidebar && 'active'}`}></div>
              <Switch>
                <PrivateRoute exact path='/news' component={News} />
                <PrivateRoute exact path='/groups' component={Groups} />
                <PrivateRoute exact path='/groups/:id' component={Timetable} />
                <Route exact path='/info' component={Information} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/forget-paswword' component={ForgetPassword} />
                <Route exact path='/server-error' component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </>
        )} />
    </div>
  );
}

export default  observer(App);
