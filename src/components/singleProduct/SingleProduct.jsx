import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./singleProduct.css";
import ShopBanner from "../shopBanner/ShopBanner";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Counter from "../counter/Counter";

function SingleProduct() {
	const params = useParams();
	const product = useSelector((state) =>
		state.product.find((item) => params.slug === item.slug)
	);
	console.log(product);
	const [isLoading, setIsLoading] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	return product ? (
		<>
			<ShopBanner />
			<div className='product-container'>
				{" "}
				<Container>
					<Row className='justify-content-center'>
						<Col xs={12} md={6} className='column'>
							<div className='image-container'>
								<img
									className='image'
									src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
									alt={product.name}
								/>
							</div>
						</Col>
						<Col xs={12} md={6} className='column product-details'>
							<h1 className='product-name'>{product.name.toUpperCase()}</h1>
							<div className='price'>${product.price}</div>
							<div className='rating-container'>
								{/* <ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									value={5}
									activeColor='#c19d56'
								/> */}
								<small className='pt-1 ms-1'>(Based on 38 reviews)</small>
							</div>
							<p className='mt-2'>{product.description}</p>
							<div>
								<form
									onSubmit={(e) => {
										e.preventDefault();
										dispatch(
											addToCart({
												product: product,
												qty: quantity,
											})
										);
										setQuantity(1);
										alert("El producto ha sido agregado al carrito!");
									}}
									className='count-container'>
									<Counter quantity={quantity} setQuantity={setQuantity} />
									<button className='add-button'>ADD TO CART</button>
								</form>
							</div>
							<ul className='list-unstyled list mt-3'>
								<li>
									Category:{" "}
									<Link
										to={`/category/${product.category.name}`}
										className='category'>
										{product.category.name}
									</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	) : (
		<BeatLoader color='#c19d56' loading={isLoading} size={15} />
	);
}

export default SingleProduct;
