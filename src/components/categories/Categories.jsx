import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import SideContainer from "../SideContainer";
import ShopBanner from "../shopBanner/ShopBanner";
import "./categories.css";

function Categories() {
  const params = useParams();
  const productList = useSelector((state) => state.product);
  const filteredProducts = productList.filter((product) => {
    return product.category.name === params.name;
  });
  const config = {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_ADMIN_TOKEN,
    },
  };
  return (
    <>
      <ShopBanner bannerTitle={`${params.name}`} />
      <div className="products-container">
        <ul className="products-list">
          {filteredProducts.map((product) => {
            return (
              <div key={product._id} className="card-product">
                <Link to={`/product/${product.slug}`}>
                  <img
                    src={
                      (`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`,
                      config)
                    }
                    alt="cake cover"
                  />
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
        </ul>
        <SideContainer />
      </div>
    </>
  );
}

export default Categories;
