import React from 'react';
import {Dispatch} from '../store.js';

const onClick = id => Dispatch({type: 'toggle', id});
const hide = false;
const style = 'strikeThrough';
const newStyle = !hide ? 'hideCompleted' : 'strikeThrough';
const ListItem = ({item: {completed, name}, id}) => (
  <li className={completed ? style : ''}>
    <input onChange={() => onClick(id)} type="checkbox" />
    {name}
  </li>
);
const ItemList = ({list = []}) =>
  list.map((item, index) => <ListItem key={index} item={item} id={index} />);

export default ({list}) => (
  <div>
    <h2>Item List</h2>
    <ul>
      <ItemList list={list} />
    </ul>
    <button onClick={newStyle()}>Hide Completed</button>
  </div>
);
