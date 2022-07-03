import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import SideContainer from "../SideContainer";
import ShopBanner from "../shopBanner/ShopBanner";
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
    <>
      <ShopBanner bannerTitle={`${params.name}`} />
      <div className="products-container">
        <ul className="products-list">
          {products &&
            products.map((product) => {
              return (
                <div key={product._id} className="card-product">
                  <Link to={`/product/${product.slug}`}>
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
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
