import "./products/products.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import InstaGallery from "./InstaGallery";

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
      <div className="side-categories">
        <h6 className="mb-3">CATEGORIES</h6>
        <ul className="mx-0 px-0">
          {categoriesList.map((item) => {
            return (
              <Link
                to={`/category/${item.name}`}
                className="text-decoration-none"
                key={item._id}
              >
                <li className="list-unstyled categories my-2">{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="image-separator">
        <img
          src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
          alt="Separador"
        />
      </div>
      <div className="side-instagram">
        <h6>INSTRAGRAM</h6>
        <InstaGallery />
      </div>
    </div>
  );
}

export default SideContainer;
