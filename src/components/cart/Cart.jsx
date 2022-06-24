import ShopBanner from "../shopBanner/ShopBanner";
import SingleProduct from "../singleProduct/SingleProduct";

function Cart() {
	return (
		<div>
			<ShopBanner />
			<div className='d-flex justify-content-evenly'>
				<span>PRODUCT</span>
				<span>PRICE</span>
				<span>QUANTITY</span>
				<span>SUBTOTAL</span>
			</div>
		</div>
	);
}

export default Cart;
