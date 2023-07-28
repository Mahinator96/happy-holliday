import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const ImageCard = (props) => {
	const img = useContext(imgContext);

	console.log(img);

	return (
		<img src={props.img} width={840} height={520} alt="Фон открытки" />
	)
}

export default ImageCard;