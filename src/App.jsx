import "./App.css";
import Banner from "./components/banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "./components/navbar/Nav";
import Products from "./components/products/Products";
import SingleProduct from "./components/singleProduct/SingleProduct";
import { Routes, Route } from "react-router-dom";
import ShopBanner from "./components/shopBanner/ShopBanner";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<NavComp />
						<Banner />
						<Products />
						<Footer />
					</>
				}
			/>
			<Route
				path='/shop'
				element={
					<>
						<NavComp />
						<ShopBanner />
						<Products />
						<Footer />
					</>
				}
			/>
			<Route
				path='/product/:id'
				element={
					<>
						<NavComp />
						<SingleProduct />
						<Footer />
					</>
				}
			/>
			<Route
				path='/cart'
				element={
					<>
						{" "}
						<NavComp /> <Cart /> <Footer />
					</>
				}
			/>
			<Route path='*' element={<h2>Page not found</h2>} />
		</Routes>
	);
}

export default App;
