import "./products.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function SideContainer() {
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesResponse = await Axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/categories`
        );
        setCategoriesList(categoriesResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <div className="side-container">
      <div className="side-price-filter">
        <h6>PRICE FILTER</h6>
      </div>
      <div className="side-categories">
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
        </div>
        <h6 className="mb-3">CATEGORIES</h6>
        {categoriesList.map((item) => {
          return (
            <ul className="mx-0 px-0">
              <Link
                to={`/category/${item.name}`}
                className="text-decoration-none"
              >
                <li className="list-unstyled categories">{item.name}</li>
              </Link>
            </ul>
          );
        })}
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
        </div>
      </div>
      <div className="side-instagram">
        <h6>INSTRAGRAM</h6>
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
        </div>
      </div>
    </div>
  );
}

export default SideContainer;
