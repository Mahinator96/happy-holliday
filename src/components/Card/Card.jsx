import style from './Card.module.css'

import CardBg from '../../img/card-bg.jpg'

import Container from '../Container/Container';
import ImageCard from './Image/ImageCard';
import Felicitation from './Felicitation/Felicitation';

const Card = () => (
	<Container>
		<div className={style.card}>
			<div className={style.wrapper}>
				<div className={style.image}>
					<ImageCard img={CardBg}/>

					<Felicitation />
				</div>
			</div>
		</div>
	</Container>
);

export default Card;