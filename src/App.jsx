import "./App.css";
import Banner from "./components/banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "./components/navbar/Nav";
import Products from "./components/products/Products";
import SingleProduct from "./components/singleProduct/SingleProduct";
import { Routes, Route } from "react-router-dom";
import ShopBanner from "./components/shopBanner/ShopBanner";

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
              <Products />
            </>
          }
        />
         <Route
          path="/shop"
          element={
            <>
              <NavComp />
              <ShopBanner />
              <Products />
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
