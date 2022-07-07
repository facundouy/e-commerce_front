import "../products/products.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideContainer from "../SideContainer";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const productsPerPage = 8;
const firstPage = 0;

function AllProducts() {
  const productList = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(firstPage);

  const numberOfPages =
    productList.length % productsPerPage === 0
      ? productList.length / productsPerPage
      : Math.trunc(productList.length / productsPerPage) + 1;

  return (
    <div className="products-container">
      <ul className="products-list">
        {productList &&
          productList
            .slice(
              currentPage * productsPerPage,
              (currentPage + 1) * productsPerPage
            )
            .map((product) => {
              return (
                <div key={product._id} className="card-product">
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
                </div>
              );
            })}
        <div className="dummy-view" />
        <div className="dummy-view" />
      </ul>
      <div>
        <BsChevronLeft
					onClick={() => {
						if (currentPage > firstPage) {
							setCurrentPage((prevPage) => prevPage - 1)
						}
					}}
				/>
        <ul>
          {[...Array(numberOfPages).keys()].map((number) => (
            <li onClick={() => setCurrentPage(number)}>{number + 1}</li>
          ))}
        </ul>
        <BsChevronRight
          onClick={() => {
						if (currentPage + 1 < numberOfPages) {
							setCurrentPage((prevPage) => prevPage + 1)
						}
					}}
        />
      </div>
      <SideContainer />
    </div>
  );
}

export default AllProducts;
