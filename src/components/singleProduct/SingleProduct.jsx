import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function SingleProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get("");
      } catch {}
    }
  });

  return (
    <Container>
      <Row>
        <Col className="bg-success">Culo</Col>
        <Col className="bg-warning">Coso</Col>
      </Row>
    </Container>
  );
}

export default SingleProduct;
