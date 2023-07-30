import style from './Choices.module.css';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHollidays } from '../../../store/hollidaysSlice';
import { fetchText } from '../../../store/textSlice';
import { fetchImage } from '../../../store/imgSlice';
import { NavLink, useParams } from 'react-router-dom';


const Choices = () => {
	const [ isOpenChoices, setIsOpenChoices ] = useState(false);
	const { hollidays, loading } = useSelector(state => state.hollidays);
	const dispath = useDispatch();
	const { holliday } = useParams()


	const toggleChoices = () => {
		if (loading !== 'success') return;


		setIsOpenChoices(!isOpenChoices);
	};

	useEffect(() => {
		dispath(fetchHollidays());
		if (holliday) { 
			dispath(fetchText(holliday));
			dispath(fetchImage(holliday))
		}
	}, [dispath, holliday])

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
								toggleChoices();
							}}
						>
							<NavLink 
								className={({isActive}) => (
									isActive ? style.linkActive : ''
								)} 
								to={`card/${item[0]}`}>{item[1]}</NavLink>
						</li>
					))}
				</ul>
				)
			}
		</div>
	)
};

export default Choices;