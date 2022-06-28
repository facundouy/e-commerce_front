import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import "./singleProduct.css";
import ShopBanner from "../shopBanner/ShopBanner";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const ratingChanged = (newRating) => {};

  function increaseOne() {
    setQuantity(parseInt(quantity) + 1);
  }

  function decreaseOne() {
    setQuantity(quantity - 1);
    if (quantity < 2) {
      setQuantity(1);
    }
  }

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/product/${params.slug}`
        );
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error cuando trae de la API:", error);
      }
    }
    getProduct();
  }, [params.slug]);

  return product ? (
    <>
      <ShopBanner />
      <div className="product-container">
        {" "}
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="column">
              <div className="image-container">
                <img
                  className="image"
                  src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
                  alt={product.name}
                />
              </div>
            </Col>
            <Col xs={12} md={6} className="column product-details">
              <h1 className="product-name">{product.name.toUpperCase()}</h1>
              <div className="price">${product.price}</div>
              <div className="rating-container">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  value={5}
                  activeColor="#c19d56"
                />
                <small className="pt-1 ms-1">(Based on 38 reviews)</small>
              </div>
              <p className="mt-2">{product.description}</p>
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
                  className="count-container"
                >
                  <input
                    className="count"
                    // type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                  <div className="buttons-container">
                    <button
                      className="count-buttons"
                      type="button"
                      onClick={increaseOne}
                    >
                      +
                    </button>
                    <button
                      className="count-buttons"
                      type="button"
                      onClick={decreaseOne}
                    >
                      -
                    </button>
                  </div>
                  <button className="add-button">ADD TO CART</button>
                </form>
              </div>
              <ul className="list-unstyled list mt-3">
                <li>
                  Category:{" "}
                  <Link
                    to={`/category/${product.category.name}`}
                    className="category"
                  >
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
    <BeatLoader color="#c19d56" loading={isLoading} size={15} />
  );
}

export default SingleProduct;
