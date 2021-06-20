import React from 'react';
// eslint-disable-next-line no-unused-vars
import SidebarList from './components/SidebarList/SidebarList';
import AddList from './components/AddList/AddList';
import AllList from './components/AllList/AllList';

import DB from './asserts/db.json';


function App() {
  
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <AllList />
        <SidebarList items = {[
          {
            color: 'red',
            name: 'Новая задача 1'
          },
          {
            color: 'green',
            name: 'Новая задача 2'
          },
          {
            color: 'blue',
            name: 'Новая задача 3'
          }
        ]}
          isRemovable
        />
        <AddList colors={DB.colors} />
      </div>
      <div className="todo__tasks">
        
      </div>
    </div>
  );
}

export default App;
