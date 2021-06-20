import React from 'react';
// eslint-disable-next-line no-unused-vars
import SidebarList from './components/sidebar/sidebar';
import listIcon from './asserts/img/list.png';
import addIcon from './asserts/img/add.png';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <SidebarList items = {
          [
            {
              icon: <img src={listIcon} alt="list_item" />,
              name: 'Все задачи',
              active: true
            }
          ]} />
        <SidebarList items = {[
          {
            color: 'red',
            name: 'Новая задача 1',
            active: false
          },
          {
            color: 'green',
            name: 'Новая задача 2',
            active: false
          },
          {
            color: 'blue',
            name: 'Новая задача 3',
            active: false
          }
        ]}
          isRemovable
        />
        <SidebarList items = {[
          {
            className: 'list__add-button',
            icon: <img src={addIcon} alt="list_item" />,
            name: 'Добавить список',
            active: false
          }
        ]} />
      </div>
      <div className="todo__tasks">
        tasks
      </div>
    </div>
  );
}

export default App;
