import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import "./singleProduct.css";
import ShopBanner from "../shopBanner/ShopBanner";

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const ratingChanged = (newRating) => {};

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/product/${params.id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error cuando trae de la API:", error);
      }
    }
    getProduct();
  }, [params.id]);

  return product ? (
    <>
      <ShopBanner />

      <Container>
        <Row>
          <Col className="">
            <img
              className="image"
              src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
              alt={product.name}
            />
          </Col>
          <Col className="">
            <h2>{product.name}</h2>
            <small>${product.price}</small>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              value={5}
              activeColor="#c19d56"
            />
            <small>(Based on 38 reviews)</small>
            <p>{product.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default SingleProduct;
