import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './app/layout/App';
import './app/layout/style.scss';
import { store, StoreContext } from './app/stores/store';
import ScrollToTop from './app/layout/ScrollToTop';

export const  history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <ScrollToTop />
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);
