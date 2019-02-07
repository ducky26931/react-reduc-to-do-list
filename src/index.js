import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store, Dispatch} from './store.js';

store.subscribe(() => {
  ReactDOM.render(
    <App {...store.getState()} />,
    document.querySelector('#root')
  );
});
Dispatch({type: 'init'});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
