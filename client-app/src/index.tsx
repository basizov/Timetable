import ReactDOM from 'react-dom';
import './app/layout/style.scss';
import App from './app/layout/App';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

export const  history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);