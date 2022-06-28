import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "../navbar/Nav";
import "./categories.css";

function Categories() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await Axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/${params.name}`
        );
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <Nav />
      <div className="banner">
        <h2>{params.name}</h2>
      </div>
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <>
                <Col xs={12} md={4} className="col">
                  <Link to={`/product/${product.slug}`}>
                    <img
                      className="product-image"
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
                      alt={`${product.name}`}
                    />
                  </Link>

                  <Link to={`/product/${product.slug}`} className="name">
                    <h3 className="p-name">{product.name.toUpperCase()}</h3>
                  </Link>
                  <p className="details">{product.category.name}</p>
                  <p className="details mb-3">${product.price}</p>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Categories;
