import React from 'react';
import {Dispatch} from '..';

const changeText = event =>
  Dispatch({payload: event.target.value, type: 'changed text'});

const hideAdd = () => Dispatch({type: 'enable editting'});

const addToList = () => Dispatch({type: 'addToList'});

export default ({value}) => (
  <div>
    <h2> Add Item </h2>
    <input placeholder="Name" value={value} onChange={changeText} /> <br />
    <button id="submitBtn" onClick={addToList}>
      Submit
    </button>
    <p> {value} </p>
  </div>
);
