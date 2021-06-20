import React from 'react';
import SidebarList from '../SidebarList/SidebarList'
import ListIcon from '../../asserts/img/list.png';

import './AllList.scss';

const AllList = () => (
  <SidebarList items = {
  [
    {
      icon: <img src={ListIcon} alt="list_item" />,
      name: 'Все задачи',
      active: true
    }
  ]} 
	/>
);

export default AllList;