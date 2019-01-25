import React from 'react';

const ListItem = ({value}) => <li>{value}</li>;
const ItemList = ({list}) =>
  list.map(value => <ListItem key={value.toString()} value={value} />);
export default ({list}) => (
  <div>
    <h2>Item List</h2>
    <ul>
      <ItemList list={list} />
    </ul>
  </div>
);
