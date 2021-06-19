import React from 'react';
// eslint-disable-next-line no-unused-vars
import SidebarList from './components/SidebarList';
import listSvg from './asserts/img/list.png';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <SidebarList items = {
          [
            {
              icon: <img src={listSvg} alt="list_item" />,
              name: 'Все задачи',
              active: true
            }
          ]} />
          <SidebarList items = {
          [
            {
              color: '#42B883',
              name: 'Новая задача 1',
              active: false
            },
            {
              color: '64C4ED',
              name: 'Новая задача 2',
              active: false
            },
            {
              color: '64C4ED',
              name: 'Новая задача 2',
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
