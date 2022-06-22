import "./App.css";
import Banner from "./components/banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "./components/navbar/Nav";
import Product from "./components/product/Product";

function App() {
	return (
		<div className='App'>
			<NavComp />
			<Banner />
			<Product />
		</div>
	);
}

export default App;
