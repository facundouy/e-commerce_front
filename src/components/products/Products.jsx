import "./products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
        <h2>featured products</h2>
      </div>
      <div className="products-container">
        <ul className="products-list p-0">
          {featured.map((product) => {
            return (
              <div key={product._id} className="card-product">
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
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Products;
