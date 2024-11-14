import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import GlobalStyle from "./globalStyle";



function App() {
	return (

		<div className="App-root">
			<GlobalStyle />
			<Header />
			<Main />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
