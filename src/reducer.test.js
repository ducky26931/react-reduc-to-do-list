import {Reducer} from './reducer.js';

// it + string + look up jest (mocha and chai is what we use on the actual project)
/*It should return the current state if a null action
  is passed to it*/

it('Should return current state when action is null or empty', () => {
  const testState = {
    name: 'Billy',
    list: [{name: 'Bob', completed: true}, {name: 'Dave', completed: false}]
  };

  const Result = Reducer(testState);
  expect(Result).toEqual(testState);
});

/* It should have any text inputed if the action is 
  'changed text' as the new value of name. */
it('should set the inputed value as the value of name when action is changed text', () => {
  const testAction = {type: 'changed text', payload: 'Billy'};
  const testState = {
    name: '',
    list: [{name: 'Bob', completed: true}, {name: 'Dave', completed: false}]
  };

  const Result = Reducer(testState, testAction);
  expect(Result).toEqual({
    name: 'Billy',
    list: [{name: 'Bob', completed: true}, {name: 'Dave', completed: false}]
  });
});

/* It should take the value of Name and append it to the array list. 
  when action = 'addToList'*/
it('should take name and append it to the array list when action is addTolist', () => {
  const testAction = {type: 'addToList'};
  const testState = {
    name: 'Sam',
    list: [{name: 'Bob', completed: true}, {name: 'Dave', completed: false}]
  };

  const Result = Reducer(testState, testAction);
  expect(Result).toEqual({
    name: ' ',
    list: [
      {name: 'Bob', completed: true},
      {name: 'Dave', completed: false},
      {name: 'Sam', completed: false}
    ]
  });
});

/* It should set complete equal to the opposite value when action type is toggle */
it('It should set complete equal to the opposite value when action type is toggle', () => {
  const testAction = {type: 'toggle', id: 0};
  const testState = {name: ' ', list: [{name: 'Dylan', completed: false}]};

  const Result = Reducer(testState, testAction);
  expect(Result).toEqual({
    name: ' ',
    list: [{name: 'Dylan', completed: true}]
  });
});

/*It should show all completed items when showCompleted is true */
it('It should show all completed items when showCompleted is true', () => {
  const testAction = {type: 'toggleCompleted'};
  const testState = {
    list: [{name: '1', completed: false}, {name: '2', complete: true}],
    showCompleted: true
  };

  const Result = Reducer(testState, testAction);
  expect(Result).toEqual({
    list: [{name: '1', completed: false}, {name: '2', complete: true}],
    showCompleted: true
  });
});

/* It should hide all completed items when showCompleted is false */
it('It should show all completed items when showCompleted is true', () => {
  const testAction = {type: 'toggleCompleted'};
  const testState = {
    list: [{name: '1', completed: false}, {name: '2', complete: true}],
    showCompleted: false
  };

  const Result = Reducer(testState, testAction);
  expect(Result).toEqual({
    list: [{name: '1', completed: false}, {name: '2', complete: false}],
    showCompleted: true
  });
});
