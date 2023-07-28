import React, { useContext, useState, useEffect } from 'react';
import { hollidaysContext } from '../../../context/hollidaysContext';
import style from './Choices.module.css';


const Choices = () => {
	const [isOpenChoices, setIsOpenChoices] = useState(false);
	const {hollidays, holliday, changeHoliday} = useContext(hollidaysContext);

	const toggleChoices = () => {
		setIsOpenChoices(!isOpenChoices);
	};

	return (
		<div className={style.wrapper}>
			<button className={style.button} onClick={toggleChoices}>
				{hollidays[holliday] || 'Выбрать праздник'}
			</button>

			{isOpenChoices && (
				<ul className={style.list}>
					{Object.entries(hollidays).map(item => (
						<li 
							className={style.item} 
							key={item[0]}
							onClick={() => {
								changeHoliday(item[0]);
								toggleChoices();
							}}
						>
							{item[1]}
						</li>
					))}
				</ul>
				)
			}
		</div>
	)
};

export default Choices;