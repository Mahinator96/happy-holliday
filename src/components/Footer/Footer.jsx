import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg'

import Container from '../Container/Container';

const Footer = () => (
	<footer className={style.footer}>
		<Container>
			<div className={style.wrapper}>
				<div className={style.contacts}>
					<p>Design: <a href='https://t.me/Mrshmallowww'>Anastasia Ilina</a></p>
					<p>Сoder: <a href='https://t.me/VasilievDevelop'>Evgeniy Vasiliev</a></p>
					<p>© HBCard, 2022</p>
				</div>

				<ul className={style.social}>
					<li className={style.item}>
						<a className={style.link} href='https://vk.com/id460284285'>
							<VKIcon/>
						</a>
					</li>

					<li className={style.item}>
						<a className={style.link} href='https://t.me/VasilievDevelop'>

						</a>
					</li>

					<li className={style.item}>
						<a className={style.link} href='https://www.pinterest.com/'>

						</a>
					</li>

					<li className={style.item}>
						<a className={style.link} href='https://www.stumb.com/'>

						</a>
					</li>
				</ul>
			</div>
		</Container>
	</footer>
);

export default Footer;