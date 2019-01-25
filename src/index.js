import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

const reducers = (state, action) => {
  //cannot mod state or action need to be async and can't call dispatch
  if (action.type === 'init')
    return {name: 'Billy', list: ['Bob'], listEdit: []};
  if (action.type === 'changed text') return {...state, name: action.payload};
  if (action.type === 'addToList')
    return {
      ...state,
      name: ' ',
      list: [...state.list, state.name],
      listEdit: []
    };
  if (action.type === 'enable editting')
    return {
      ...state,
      name: ' ',
      list: [],
      listEdit: [...state.list, state.name]
    };
  else return state;
};
const store = createStore(reducers);

store.subscribe(() => {
  ReactDOM.render(
    <App {...store.getState()} />,
    document.querySelector('#root')
  );
});

store.dispatch({type: 'init'});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export const Dispatch = action => store.dispatch(action);
