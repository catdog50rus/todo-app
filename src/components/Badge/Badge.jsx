import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

const Badge = ({color, onClick, className})=> (
  <i 
    onClick={onClick} 
    className={classNames('badge', {[`badge__${color}`]: color}, className)}
  ></i>
);

export default Badge;