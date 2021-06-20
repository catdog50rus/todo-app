import React from 'react';
import ClassNames from 'classnames';

import './sidebar.scss';

const Sidebar = ({items, isRemovable}) => {
    return (
      <ul className="sidebar__list">
        {
          items.map((item, index) => 
            (
              <li key={index} className={ClassNames(item.className, {'active' : item.active})}>
                <i>
                  {item.icon? item.icon : <i className={`badge badge__${item.color}`}></i>}
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

export default Sidebar;