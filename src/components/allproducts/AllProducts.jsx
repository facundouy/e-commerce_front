import "../products/products.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideContainer from "../SideContainer";

function AllProducts() {
	const productList = useSelector((state) => state.product);
	return (
		<div className='products-container'>
			<ul className='products-list'>
				{productList &&
					productList.map((product) => {
						return (
							<div key={product._id} className='card-product'>
								<Link to={`/product/${product.slug}`}>
									<div>
										<img
											src={`https://tkyarzymrutnhhccfvhu.supabase.co/storage/v1/object/public/images/${product.image}`}
											alt='cake cover'
										/>
									</div>
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
				<div className='dummy-view' />
				<div className='dummy-view' />
			</ul>
			<SideContainer />
		</div>
	);
}

export default AllProducts;
