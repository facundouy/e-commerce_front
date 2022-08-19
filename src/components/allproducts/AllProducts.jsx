import "../products/products.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideContainer from "../SideContainer";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./all-products.css";

const productsPerPage = 12;
const firstPage = 0;

function AllProducts() {
  const productList = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(firstPage);

  const numberOfPages =
    productList.length % productsPerPage === 0
      ? productList.length / productsPerPage
      : Math.trunc(productList.length / productsPerPage) + 1;

  return (
    <div className="d-flex ms-5">
      <Container fluid>
        <Row className="products-list">
          {productList &&
            productList
              .slice(
                currentPage * productsPerPage,
                (currentPage + 1) * productsPerPage
              )
              .map((product) => {
                return (
                  product.category && (
                    <Col
                      xs={6}
                      lg={4}
                      xl={3}
                      key={product._id}
                      className="card-product"
                    >
                      <Link to={`/product/${product.slug}`}>
                        <div>
                          <img
                            src={`https://tkyarzymrutnhhccfvhu.supabase.co/storage/v1/object/public/images/${product.image}`}
                            alt="cake cover"
                          />
                        </div>
                      </Link>

                      <div className="product-info">
                        <Link
                          className="title-product"
                          to={`/product/${product.slug}`}
                        >
                          <h6 className="title-product">
                            {product.name.toUpperCase()}
                          </h6>
                        </Link>
                        <Link
                          className="text-decoration-none text-dark"
                          to={`category/${product.category.name}`}
                        >
                          <span className="product-category">
                            {product.category.name}
                          </span>
                        </Link>

                        <span className="product-price">${product.price}</span>
                      </div>
                    </Col>
                  )
                );
              })}
          {/* <div className="dummy-view" />
        <div className="dummy-view" /> */}

          <ul className="pagination-container">
            {currentPage > firstPage && (
              <BsChevronLeft
                className="pagination-arrow"
                onClick={() => {
                  setCurrentPage((prevPage) => prevPage - 1);
                }}
              />
            )}
            {[...Array(numberOfPages).keys()].map((number) => (
              <li
                className={`pagination-li ${
                  number === currentPage ? "pagination-number-selected" : ""
                }`}
                onClick={() => setCurrentPage(number)}
              >
                {number + 1}
              </li>
            ))}

            {currentPage + 1 < numberOfPages && (
              <BsChevronRight
                className="pagination-arrow"
                onClick={() => {
                  setCurrentPage((prevPage) => prevPage + 1);
                }}
              />
            )}
          </ul>
        </Row>
      </Container>
      <SideContainer />
    </div>
  );
}

export default AllProducts;
