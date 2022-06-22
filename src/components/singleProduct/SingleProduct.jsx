import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import "./singleProduct.css";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  useEffect(() => {
    async function getProduct() {
      try {
        // TODO: Sustituir por variables de entorno.
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/product/${params.id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error cuando trae de la API:", error);
      }
    }
    getProduct();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="">
          {/* TODO: Sustituir por variables de entorno. */}
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
  );
}

export default SingleProduct;
