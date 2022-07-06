import { useSelector } from "react-redux";
import "./checkout.css";
import axios from "axios";

import Table from "react-bootstrap/Table";

function Step3({
	setStep,
	setOrder,
	inputFirstName,
	inputLastName,
	inputEmail,
	inputPhone,
	inputAddress,
}) {
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);

	const totalPrice = cart.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.price * currentValue.quantity,
		0
	);

	async function createOrder(event) {
		const products = [];
		cart.map((product) => {
			products.push({
				name: product.name,
				quantity: product.quantity,
				price: product.price * product.quantity,
			});
		});

		const response = await axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/create/order`,
			{
				products,
				totalPrice: totalPrice,
				user: user.user,
			}
		);
	}

	return (
		<>
			<h3 className='step-title'>REVIEW ORDER</h3>
			<div className='container-billing-details'>
				<Table className='table'>
					<thead>
						<tr>
							<th>CONTACT INFO</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className='contact-info-container'>
									<div>
										{inputFirstName} {inputLastName}
									</div>
									<span>{inputAddress}</span>
									<span>{inputPhone}</span>
									<span>{inputEmail}</span>
								</div>
							</td>
						</tr>
					</tbody>
				</Table>

				<Table className='table'>
					<thead>
						<tr>
							<th>PRODUCT</th>
							<th>QUANTITY</th>
							<th>SUBTOTAL</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((product) => {
							return (
								<tr>
									<td>
										<img
											className='image-item-cart'
											src={`https://tkyarzymrutnhhccfvhu.supabase.co/storage/v1/object/public/images/${product.image}`}
											alt='product'
										/>
										{product.name}
									</td>
									<td>{product.quantity}</td>
									<td>${product.price * product.quantity}</td>
								</tr>
							);
						})}
						<tr>
							<td></td>
							<td>
								<h3 className='step3-total'>TOTAL</h3>
							</td>
							<td>
								<h3 className='step3-total'>${totalPrice}</h3>
							</td>
						</tr>
					</tbody>
				</Table>

				<button
					type='button'
					className='checkout-btn mt-3'
					onClick={() => {
						setStep("2");
					}}>
					PREVIOUS
				</button>

				<button
					type='button'
					className='checkout-btn mt-3 ms-4'
					onClick={() => {
						createOrder();
					}}>
					PLACE ORDER
				</button>
			</div>
		</>
	);
}

export default Step3;
