import { Link } from "react-router-dom";

import "./banner.css";

function Banner() {
  return (
    <div className="bg-banner">
      <div className="title-container">
        <span>Sweet bites for you</span>
        <h1>DOLCETTO</h1>
        <img
          src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
          alt="Separador"
        />
        <p>
          It's allways good time for sweets! Made with care and prepared with
          love, our sweets are all you might need to make every day special.
          Find your favorite now.
        </p>
        <div className="buttons-banner">
          <Link to="/" className="a-discover">
            Discover
          </Link>
          <Link to="/shop" className="text-decoration-none">
            <div className="a-shop">Shop now</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
