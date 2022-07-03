import "./products.css";
import { Link } from "react-router-dom";
import SideContainer from "../SideContainer";
import { useSelector } from "react-redux";

function Products() {
	const productList = useSelector((state) => state.product);

	return (
		<div className='products-container'>
			<ul className='products-list'>
				{productList.map((product) => {
					return (
						<div key={product._id} className='card-product'>
							<Link to={`/product/${product.slug}`}>
								<img
									src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
									alt='cake cover'
								/>
							</Link>

							<div className='product-info'>
								<Link className='title-product' to={`/product/${product.slug}`}>
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
			<SideContainer />
		</div>
	);
}

export default Products;
