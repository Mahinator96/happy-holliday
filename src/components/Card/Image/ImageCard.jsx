import CardBG from '../../../img/card-bg.jpg'

import { useSelector } from "react-redux";


const ImageCard = (props) => {
	const {urlImg} = useSelector(state => state.image);


	return (
		<img src={urlImg || CardBG} width={840} height={520} alt="Фон открытки" />
	)
}

export default ImageCard;