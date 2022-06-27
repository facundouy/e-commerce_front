import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

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
      {products.map((product) => {
        return (
          <ul key={product.id}>
            <li>{product.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Categories;
