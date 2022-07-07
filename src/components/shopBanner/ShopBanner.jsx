import React from "react";
import "./shop-banner.css";

const ShopBanner = ({ bannerTitle }) => {
  return (
    <div className="shop-banner">
      <h2  className="container">{bannerTitle}</h2>
    </div>
  );
};

export default ShopBanner;
