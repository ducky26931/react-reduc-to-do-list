import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AddItem from './Component/AddItem';
import ItemList from './Component/ItemList';

export default ({name, list}) => (
  <div>
    <AddItem value={name} />
    <ItemList list={list} />
  </div>
);
