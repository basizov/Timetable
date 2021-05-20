import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Route } from 'react-router';
import Groups from '../../components/Groups/Groups';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Information from '../../components/Information/Information';
import Login from '../../components/Login/Login';
import News from '../../components/News/News';
import Sidebar from '../../components/Sidebar/Sidebar';
import Timetable from '../../components/Timetable/Timetable';
import Loading from '../../features/Loading/Loading';
import { store } from '../stores/store';

const App: React.FC = () => {
  const { commonStore, userStore } = store;
  
  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);
  
  if (!commonStore.appLoaded) return <Loading backgroundColor='#fff' />;
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
              <Route exact path='/groups/:id' component={Timetable} />
              <Route exact path='/login' component={Login} />
            </main>
          </>
        )} />
    </div>
  );
}

export default  observer(App);
