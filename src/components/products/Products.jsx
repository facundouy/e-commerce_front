import "./products.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Products() {
	const [productList, setProductList] = useState([]);
	const [categoriesList, setCategoriesList] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const productsResponse = await Axios.get(
					`${process.env.REACT_APP_BACKEND_URL}/api/products`
				);
				const categoriesResponse = await Axios.get(
					`${process.env.REACT_APP_BACKEND_URL}/api/categories`
				);
				setProductList(productsResponse.data);
				setCategoriesList(categoriesResponse.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);
	return (
		<>
			<div className='products-container'>
				<ul className='products-list'>
					{productList &&
						productList.map((product) => {
							return (
								<div key={product._id} className='card-product'>
									<Link to={`/product/${product.slug}`}>
										<img
											src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
											alt='cake cover'
										/>
									</Link>

									<div className='product-info'>
										<Link
											className='title-product'
											to={`/product/${product.slug}`}>
											<h6 className='title-product'>
												{product.name.toUpperCase()}
											</h6>
										</Link>
										<Link
											className='text-decoration-none text-dark'
											to={`category/${product.category.name}`}>
											<span className='product-category'>
												{product.category.name}
											</span>
										</Link>

										<span className='product-price'>${product.price}</span>
									</div>
								</div>
							);
						})}
				</ul>
				<div className='side-container'>
					<div className='side-price-filter'>
						<h6>PRICE FILTER</h6>
					</div>
					<div className='side-categories'>
						<h6>CATEGORIES</h6>
						<div className='image-separator'>
							<img
								src='https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png'
								alt='Separador'
							/>
						</div>

						{categoriesList.map((item) => {
							return (
								<ul className='mx-0 px-0'>
									<Link
										to={`/category/${item.name}`}
										className='text-decoration-none'>
										<li className='list-unstyled categories'>{item.name}</li>
									</Link>
								</ul>
							);
						})}
						<div className='image-separator'>
							<img
								src='https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png'
								alt='Separador'
							/>
						</div>
					</div>
					<div className='side-instagram'>
						<h6>INSTRAGRAM</h6>
						<div className='image-separator'>
							<img
								src='https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png'
								alt='Separador'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Products;
