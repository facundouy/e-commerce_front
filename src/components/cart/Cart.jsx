import ShopBanner from "../shopBanner/ShopBanner";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import {
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
} from "../../redux/cartSlice";
import Table from "react-bootstrap/Table";
import "./cart.css";
import CartCheckout from "../cartCheckout/CartCheckout";

function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const totalPrice = cart.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.price * currentValue.quantity,
		0
	);

	return (
		<>
			<ShopBanner bannerTitle={"CART"} />
			<div className='container'>
				<Table className='table'>
					<thead>
						<tr className='table-row table-header'>
							<th className='image-and-name-container'>PRODUCT</th>
							<th className='price-container'>PRICE</th>
							<th className='counter-subtotal-delete-container'>QUANTITY</th>
							<th className=''>SUBTOTAL</th>
						</tr>
						<tr className='table-row table-header-small'>
							<th>YOUR ORDER</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((product) => {
							return (
								<tr key={product._id} className='table-row'>
									<td className='image-and-name-container'>
										{/* IMAGE Y NAME */}
										<Link
											to={`/product/${product.slug}`}
											className='text-decoration-none link'>
											<img
												className='image-item-cart'
												src={`https://tkyarzymrutnhhccfvhu.supabase.co/storage/v1/object/public/images/${product.image}`}
												alt='imagen'
											/>
											{product.name}
										</Link>
									</td>
									<td className='price-container'>
										${product.price}
										{/* PRICE */}
									</td>
									<td className='counter-subtotal-delete-container'>
										{" "}
										{/* COUNTER */}
										<div className='count-container'>
											<input
												value={product.quantity}
												className='input-container'
											/>
											<div className='buttons-container'>
												<button
													onClick={() => {
														dispatch(incrementQuantity({ product }));
													}}
													className='count-buttons'>
													+
												</button>
												<button
													onClick={() => {
														dispatch(decrementQuantity({ product }));
													}}
													className='count-buttons decrease-button'>
													-
												</button>{" "}
											</div>
										</div>
									</td>
									<td className='subtotal-delete-container'>
										{/* SUBTOTAL AND DELETE */}$
										{product.price * product.quantity}
										<span
											onClick={() => {
												dispatch(removeFromCart({ product }));
											}}>
											<AiOutlineDelete />
										</span>
									</td>
									<div className='row-border'></div>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<CartCheckout total={totalPrice} />
			</div>
		</>
	);
}

export default Cart;
