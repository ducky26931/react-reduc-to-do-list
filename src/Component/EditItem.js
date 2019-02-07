import React from 'react';
import {Dispatch} from '..';

const EnableListEdit = () => Dispatch({type: 'enable editting'});
const ListItem = ({value}) => <li>{value}</li>;
const ItemList = ({list}) =>
  list.map(value => <ListItem key={value.toString()} value={value} />);

export default ({listEdit}) => (
  <div>
    <button id="editBtn" onClick={EnableListEdit}>
      Edit List
    </button>
    <h2>Item List</h2>
    <ul>
      <ItemList list={listEdit} />
    </ul>
  </div>
);
