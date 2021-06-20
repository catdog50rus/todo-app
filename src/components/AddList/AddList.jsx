import React, {useState} from 'react';
import SidebarList from '../SidebarList/SidebarList'
import AddIcon from '../../asserts/img/add.png';
import CloseIcon from '../../asserts/img/close.png';

import Badge from '../Badge/Badge';

import './AddList.scss';

const AddList = ({colors}) => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const [selectedColor, selectColor] = useState(1);

	console.log(selectedColor);

	return (
		<div className="add__list">
  		<SidebarList
				onClick={()=>setVisiblePopup(!visiblePopup)}
				items = {[
    			{
      			className: 'list__add-button',
      			icon: <img src={AddIcon} alt="list_item" />,
      			name: 'Добавить список',
    			}
  			]} 
			/>
			{visiblePopup && <div className="add__list-popup">
				<img src={CloseIcon} className="add__list-popup-close-btn" alt="" onClick={()=>setVisiblePopup(false)}></img>
				<input className="field" type="text" placeholder="Название списка"/>
				<div className="add__list-popup-colors">
					{
						colors.map((color) => (
							<Badge
								onClick={() => selectColor(color.id)}
								key={color.id} 
								color={color.name}
								className={selectedColor === color.id && 'active'}
							/>
						))
					}
				</div>
				<button className="button">Добавить</button>
			</div>}
		</div>
	);
};

export default AddList;