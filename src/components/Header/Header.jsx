import style from './Header.module.css';

import Container from "../Container/Container";
import Choices from './Choices/Choices';
import { useDispatch, useSelector } from 'react-redux';
import { fetchText } from '../../store/textSlice';

const Header = () => {
	const dispath = useDispatch();
	const {holliday} = useSelector(state => state.hollidays);
	

	return (
		<header className={style.header}>
			<Container>
				<div className={style.wrapper}>
					<div className={style.buttons}>
						<button 
							className={style.button}
							disabled={!holliday}

							onClick={() => {

								dispath(fetchText(holliday));
							}}
							>
							Поменять поздравление</button>

						<button className={style.button}>Поменять фон</button>
					</div>

					<Choices/>
				</div>	
			</Container>
		</header>
	)
};

export default Header;