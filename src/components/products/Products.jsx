import "./products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

function Products() {
  const productList = useSelector((state) => state.product);
  const featured = productList.filter((item) => item.featured === true);

  return (
    <div className="container d-flex justify-content-center flex-wrap align-items-center">
      <div className="header-container">
        <div>family tradition</div>
        <h3>OUR GOAL</h3>
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
        </div>
        <p>
          Founded in 1926 by John Fitzgerald Doe Sr., Dolcetto was created under
          one single premise: to deliver excelence. A lot has changed through
          the passage of four generations, yet our one goal remains the same.
        </p>
        <span id="featured"></span>
      </div>
      <div className="featured-text">
        <h2>taste our</h2>
        <h3>PRIME SELECTION</h3>
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
        </div>
      </div>
      <div className="products-container">
        <Container fluid className="products-list p-0">
          <Row>
            {" "}
            {featured.map((product) => {
              return (
                product.category && (
                  <Col
                    xs={12}
                    md={6}
                    xxl={4}
                    key={product._id}
                    className="card-product"
                  >
                    <Link to={`/product/${product.slug}`}>
                      <img
                        src={`https://tkyarzymrutnhhccfvhu.supabase.co/storage/v1/object/public/images/${product.image}`}
                        alt="Product"
                      />
                    </Link>

                    <div className="product-info">
                      <Link
                        className="title-product"
                        to={`/product/${product.slug}`}
                      >
                        <h6 className="title-product">{product.name}</h6>
                      </Link>
                    </div>
                  </Col>
                )
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Products;
