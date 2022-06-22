import "./App.css";
import Banner from "./components/banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "./components/navbar/Nav";
import Product from "./components/product/Product";
import SingleProduct from "./components/singleProduct/SingleProduct";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavComp />
              <Banner />
              <Product />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <NavComp />
              <SingleProduct />
            </>
          }
        />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
