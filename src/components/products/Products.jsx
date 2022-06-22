import "./products.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Axios from "axios";

function Products() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/api/products");
        setProductList(response.data);
        console.log("-------", productList);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <div className="side-container"></div>
      <div className="products-container">
        <ul className="products-list">
          {productList &&
            productList.map((product) => {
              return (
                <div className="card">
                  <img
                    src={`http://localhost:3001/images/${product.image}`}
                    alt="cake cover"
                  />
                  <div className="movie-info">
                    {product.name}
                    {product.description}
                  </div>
                </div>
                // <ListGroup.Item key={product.id}>
                //   <Card style={{ width: "18rem" }}>
                //     <Card.Img
                //       variant="top"
                //       src={`http://localhost:3001/images/${product.image}`}
                //     />
                //     <Card.Body>
                //       <Card.Title>{product.name}</Card.Title>
                //       <Card.Text>{product.description}</Card.Text>
                //     </Card.Body>
                //   </Card>
                // </ListGroup.Item>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default Products;
