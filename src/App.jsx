import "./App.css";
import Banner from "./components/banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "./components/navbar/Nav";

function App() {
	return (
		<div className='App'>
			<NavComp />
			<Banner />
		</div>
	);
}

export default App;
