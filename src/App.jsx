import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { HollidaysContextProvider } from "./context/hollidaysContext";
import { ImgContextProvider } from "./context/imgContext";
import { TextContextProvider } from "./context/textContext";

const wrapper = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
}

const App = () => {
  return (
		<div style={wrapper}>
			<HollidaysContextProvider>
				<ImgContextProvider>
					<TextContextProvider>

						<Header />
						<Card />
						<Footer />
						
					</TextContextProvider>
				</ImgContextProvider>
			</HollidaysContextProvider>
		</div>
  );
}

export default App;
