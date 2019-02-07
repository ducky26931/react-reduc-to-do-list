import {assoc, append, pipe, over, lensProp, lensPath, not} from 'ramda';

const initialState = {
  name: 'Billy',
  list: [{name: 'Bob', completed: false}, {name: 'Dave', completed: false}],
  showCompleted: true
};

// propOr, prop, path, assoc, over, lensProp, append, pipe

export const Reducer = (state = initialState, action = {}) => {
  //cannot mod state or action need to be async and can't call dispatch
  if (action.type === 'changed text')
    return assoc('name', action.payload, state);
  if (action.type === 'addToList') {
    const addToList = pipe(
      assoc('name', ' '),
      over(lensProp('list'), append({name: state.name, completed: false}))
    );
    return addToList(state);
  }
  if (action.type === 'toggle') {
    return over(lensPath(['list', action.id, 'completed']), not, state);
  }

  if (action.type === 'toggleCompleted') {
    return over(lensPath(['showCompleted']), not, state);
  }
  return state;
};
