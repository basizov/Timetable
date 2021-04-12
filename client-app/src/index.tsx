import ReactDOM from 'react-dom';
import './app/layout/style.scss';
import App from './app/layout/App';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { store, StoreContext } from './app/stores/store';

export const  history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);