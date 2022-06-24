import ShopBanner from "../shopBanner/ShopBanner";
import SingleProduct from "../singleProduct/SingleProduct";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import "./cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <ShopBanner />
      <div className="container">
        <Table bordered hover className="table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Cart;
