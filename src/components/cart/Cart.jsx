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
      <div className="container">
        <Table className="table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr key={product._id}>
                  <td>
                    <Link
                      to={`/product/${product.slug}`}
                      className="text-decoration-none link"
                    >
                      <img
                        className="image-item-cart"
                        src={`https://tkyarzymrutnhhccfvhu.supabase.co/storage/v1/object/public/${product.image}`}
                        alt="imagen"
                      />
                      {product.name}
                    </Link>
                  </td>
                  <td>${product.price}</td>
                  <td>
                    <div className="count-container">
                      <input
                        value={product.quantity}
                        className="input-container"
                      />
                      <div className="buttons-container">
                        <button
                          onClick={() => {
                            dispatch(incrementQuantity({ product }));
                          }}
                          className="count-buttons"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            dispatch(decrementQuantity({ product }));
                          }}
                          className="count-buttons decrease-button"
                        >
                          -
                        </button>{" "}
                      </div>
                    </div>
                  </td>
                  <td>${product.price * product.quantity}</td>
                  <td>
                    <span
                      onClick={() => {
                        dispatch(removeFromCart({ product }));
                      }}
                    >
                      <AiOutlineDelete />
                    </span>
                  </td>
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
