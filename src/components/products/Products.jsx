import "./products.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Axios from "axios";

function Products() {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await Axios.get("http://localhost:3001/api/products");
				setProductList(response.data);
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
								<div className='card-product'>
									<img
										src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
										alt='cake cover'
									/>
									<div className='product-info'>
										<h6>{product.name.toUpperCase()}</h6>
										<span className='product-category'>
											{product.category.name}
										</span>
										<span className='product-price'>${product.price}</span>
									</div>
								</div>
							);
						})}
				</ul>
			</div>
			<div className='side-container'>
				<div className='side-price-filter'>
					<h6>PRICE FILTER</h6>
				</div>
				<div className='side-categories'>
					<h6>CATEGORIES</h6>
				</div>
				<div className='side-instagram'>
					<h6>INSTRAGRAM</h6>
				</div>
			</div>
		</>
	);
}

export default Products;
