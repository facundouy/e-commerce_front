import "./App.css";
import Axios from "axios";
import Banner from "./components/banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "./components/navbar/Nav";
import Products from "./components/products/Products";
import SingleProduct from "./components/singleProduct/SingleProduct";
import { Routes, Route } from "react-router-dom";
import ShopBanner from "./components/shopBanner/ShopBanner";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Categories from "./components/categories/Categories";
import AllProducts from "./components/allproducts/AllProducts.jsx";
import Checkout from "./components/checkout/Checkout";
import { useEffect } from "react";
import { storeProducts } from "./redux/productSlice";
import { useDispatch } from "react-redux";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await Axios.get(
					`${process.env.REACT_APP_BACKEND_URL}/api/products`
				);
				dispatch(storeProducts(response.data));
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	});
	return (
		<>
			<NavComp />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Banner />
							<Products />
						</>
					}
				/>
				<Route
					path='/shop'
					element={
						<>
							<ShopBanner bannerTitle={"SHOP"} />
							<AllProducts />
						</>
					}
				/>
				<Route path='/user' element={<UserProfile />} />
				<Route path='/category/:name' element={<Categories />} />
				<Route path='/product/:slug' element={<SingleProduct />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='*' element={<h2>Page not found</h2>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
