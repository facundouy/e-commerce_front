import "./nav.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { GiCupcake } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import LoginRegister from "../loginRegister/LoginRegister";
import { useSelector } from "react-redux";

function NavComp() {
  const info = useSelector((state) => state.user);
  const categories = useSelector((state) => state.category);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyBhZG1pbjogdHJ1ZSB9.v74KBM9P78bQZ8T8FDFMCXhABNAuOQAHgtezWL-x4-Y";

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="nav-container">
        <Container className="p-0">
          <Link to="/" className="item-nav-bar">
            <Navbar.Brand>
              <GiCupcake className="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="nav-elements justify-content-end"
          >
            <Nav>
              <Link to="/" className="item-nav-bar">
                <Nav.Item>HOME</Nav.Item>
              </Link>
              <Link to="/about" className="item-nav-bar">
                <Nav.Item>ABOUT</Nav.Item>
              </Link>
              <NavDropdown
                className="item-nav-bar"
                title="CATEGORIES"
                id="basic-nav-dropdown"
              >
                {categories.map((item) => {
                  return (
                    <NavDropdown.Item key={item._id}>
                      <Link
                        to={`/category/${item.name}`}
                        className="dropdown-text"
                      >
                        {item.name}
                      </Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Link to="/shop" className="item-nav-bar">
                <Nav.Item>SHOP</Nav.Item>
              </Link>
              <a href="#footer" className="item-nav-bar">
                <Nav.Item>CONTACT</Nav.Item>
              </a>
              <Nav.Item>
                {info.token === null || Object.keys(info).length === 0 ? (
                  <Link to="#">
                    <FaRegUser
                      className="item-nav-login user-icon"
                      onClick={() => setShowOffCanvas(!showOffCanvas)}
                    />
                  </Link>
                ) : (
                  <Link to="user" className="item-nav-bar">
                    <img
                      src="profile_default.png"
                      alt="profile"
                      className="item-nav-login mx-0 profile-avatar"
                    />
                    <small className="item-nav-login mx-0">
                      Welcome, {info.user.firstname}
                    </small>
                  </Link>
                )}
              </Nav.Item>
              <Nav.Item>
                <Link to="/cart" className="item-nav-bar align-middle">
                  <AiOutlineShopping className="item-nav-cart mx-0" />
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginRegister show={showOffCanvas} setShow={setShowOffCanvas} />
    </>
  );
}

export default NavComp;
