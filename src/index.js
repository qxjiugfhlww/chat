import './index.css';
import * as serviceWorker from './serviceWorker';

import store from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


let rerender = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(store);

store.subscribe(rerender)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
