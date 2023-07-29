import style from './Choices.module.css';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHollidays, setHolliday } from '../../../store/hollidaysSlice';
import { fetchText } from '../../../store/textSlice';


const Choices = () => {
	const [isOpenChoices, setIsOpenChoices] = useState(false);
	const {holliday, hollidays, loading} = useSelector(state => state.hollidays);
	const dispath = useDispatch();

	// const {hollidays} = useContext(hollidaysContext);

	const toggleChoices = () => {
		if (loading !== 'success') return;


		setIsOpenChoices(!isOpenChoices);
	};

	useEffect(() => {
		dispath(fetchHollidays());
	}, [dispath])

	return (
		<div className={style.wrapper}>
			<button className={style.button} onClick={toggleChoices}>
				{loading !== 'success' ? 
					'Загрузка...' :
					hollidays[holliday] || 'Выбрать праздник'}
			</button>

			{isOpenChoices && (
				<ul className={style.list}>
					{Object.entries(hollidays).map(item => (
						<li 
							className={style.item} 
							key={item[0]}
							onClick={() => {
								dispath(setHolliday(item[0]));
								dispath(fetchText(item[0]))
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