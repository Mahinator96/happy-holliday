import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const wrapper = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
}

const btn = {
	display: 'block',
	color: '#fff',
	margin: '20px auto',
	padding: '15px 20px',
	borderRadius: '20px',
	backgroundColor: '#00C78B',
}


const Layout = () => {
	const { text: {idText}, image: {idImg} } = useSelector(state => state);

	return (
		<div style={wrapper}>
			<Header />

			<Outlet />
			{idText && idImg && 
				(<Link style={btn} to={`singleCard/${idText}/${idImg}`}>Поделиться открыткой</Link>)
			}

			<Footer />
		</div>
)};

export default Layout;