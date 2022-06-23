import "./products.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { RangeSlider } from "@appbaseio/reactivesearch";

function Products() {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await Axios.get(
					`${process.env.REACT_APP_BACKEND_URL}/api/products`
				);
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
								<div key={product._id} className='card-product'>
									<Link to={`/product/${product._id}`}>
										<img
											src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
											alt='cake cover'
										/>
									</Link>

									<div className='product-info'>
										<Link
											className='title-product'
											to={`/product/${product.id}`}>
											<h6 className='title-product'>
												{product.name.toUpperCase()}
											</h6>
										</Link>
										<span className='product-category'>
											{product.category.name}
										</span>
										<span className='product-price'>${product.price}</span>
									</div>
								</div>
							);
						})}
				</ul>
				<div className='side-container'>
					<div className='side-price-filter'>
						<h6>PRICE FILTER</h6>
						{/* <RangeSlider
							componentId='RangeSliderSensor'
							dataField='guests'
							title='Guests'
							range={{
								start: 0,
								end: 10,
							}}
						/> */}
					</div>
					<div className='side-categories'>
						<h6>CATEGORIES</h6>
						<img
							src='https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png'
							alt='Separador'
						/>
					</div>
					<div className='side-instagram'>
						<h6>INSTRAGRAM</h6>
						<img
							src='https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png'
							alt='Separador'
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Products;
