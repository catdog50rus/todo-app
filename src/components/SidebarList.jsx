import React from 'react';

const SidebarList = ({items}) => {
    return (
      <ul className="sidebar__list">
        {
          items.map(item => 
            (
              <li  className={item.active? 'active': ''}>
                <i>
                  {item.icon? item.icon: <i className={`badge badge--${item.color}`}></i>}
               </i>
                <span>
                  {item.name}
                </span>
              </li>
            )
          )
        } 
      </ul>
    );
}

export default SidebarList;