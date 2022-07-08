import "./App.css";
import React from "react";
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
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import { storeProducts } from "./redux/productSlice";
import { storeCategories } from "./redux/categorySlice";
import { useDispatch } from "react-redux";
import UserProfile from "./components/userProfile/UserProfile";
import About from "./components/about/About";
import ThanksScreen from "./components/thanksScreen/ThanksScreen";
import FrontPageModal from "./components/Modal/FrontPageModal";

function App() {
	const [show, setShow] = useState(true);

	const handleShow = () => setShow(true);

	//     <Button variant="primary" onClick={() => setModalShow(true)}>
	//       Launch vertically centered modal
	//     </Button>

	//     <MyVerticallyCenteredModal
	//       show={modalShow}
	//       onHide={() => setModalShow(false)}
	//     />

	const dispatch = useDispatch();
	useEffect(() => {
		const getProducts = async () => {
			try {
				const productsResponse = await Axios.get(
					`${process.env.REACT_APP_BACKEND_URL}/api/products`
				);
				const categoriesResponse = await Axios.get(
					`${process.env.REACT_APP_BACKEND_URL}/api/category`
				);

				dispatch(storeProducts(productsResponse.data));
				dispatch(storeCategories(categoriesResponse.data));
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	});
	return (
		<>
			<NavComp />
			<FrontPageModal show={show} setShow={setShow} />

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
					path='/about'
					element={
						<>
							<About />
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
				<Route
					path='/thanks'
					element={
						<>
							<ThanksScreen />
						</>
					}
				/>
				<Route
					path='/user'
					element={
						<ProtectedRoute>
							<UserProfile />
						</ProtectedRoute>
					}
				/>
				<Route path='/category/:name' element={<Categories />} />
				<Route path='/product/:slug' element={<SingleProduct />} />
				<Route path='/cart' element={<Cart />} />
				<Route
					path='/checkout'
					element={
						<ProtectedRoute>
							<Checkout />
						</ProtectedRoute>
					}
				/>
				<Route path='*' element={<h2>Page not found</h2>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
