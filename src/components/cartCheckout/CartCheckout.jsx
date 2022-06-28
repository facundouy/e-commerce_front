import "./cartCheckout.css";

function CartCheckout({ total }) {
	return (
		<div className='checkout-container'>
			<h2 className='checkout-title'>CART TOTALS</h2>
			<table className='checkout-table'>
				<tr className='checkout-table-row'>
					<td className='checkout-table-cell'>Subtotal</td>
					<td className='checkout-table-cell'>${total}</td>
				</tr>
				<tr className='checkout-table-row'>
					<td className='checkout-table-cell'>Total</td>
					<td className='checkout-table-cell'>${total}</td>
				</tr>
			</table>
			<button className='checkout-btn'>PROCEED TO CHECKOUT</button>
		</div>
	);
}

export default CartCheckout;
