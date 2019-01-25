import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AddItem from './Component/AddItem';
import ItemList from './Component/ItemList';
import EditItem from './Component/EditItem';

export default ({name, list, listEdit}) => (
  <div>
    <AddItem value={name} />
    <ItemList list={list} />
    <EditItem listEdit={listEdit} />
  </div>
);
