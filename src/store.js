import {Reducer} from './reducer.js';
import {createStore} from 'redux';

export const store = createStore(Reducer);

export const Dispatch = action => store.dispatch(action);
