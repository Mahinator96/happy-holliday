import style from './Card.module.css'

import Container from '../Container/Container';
import ImageCard from './Image/ImageCard';
import Felicitation from './Felicitation/Felicitation';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTextId } from '../../store/textSlice';
import { fetchImageId } from '../../store/imgSlice';

const Card = () => {
	const { idText, idImg } = useParams();
	const dispath = useDispatch();
	
	useEffect(() => {
		if (idText && idImg) {
			dispath(fetchTextId(idText));
			dispath(fetchImageId(idImg));
		}
		}
	)

	return (
		<Container>
		<div className={style.card}>
			<div className={style.wrapper}>
				<div className={style.image}>
					<ImageCard />

					<Felicitation />
				</div>
			</div>
		</div>
	</Container>
)};

export default Card;