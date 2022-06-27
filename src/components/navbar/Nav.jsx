import "./nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { GiCupcake } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import LoginRegister from "../loginRegister/LoginRegister";

function NavComp() {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  return (
    <>
      <Navbar bg="light" className="nav-container navbar-me-auto " sticky="top">
        <Container fluid className="d-flex justify-content-between">
          <div className="logo-container">
            <Link to="/">
              <Navbar.Brand>
                <GiCupcake className="logo" />
              </Navbar.Brand>
            </Link>
          </div>
          <div className="container-nav-items">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/" className="item-nav-bar">
                  <Nav.Item>HOME</Nav.Item>
                </Link>
                <Link to="/about" className="item-nav-bar">
                  <Nav.Item className="item-nav-bar">ABOUT</Nav.Item>
                </Link>
                <NavDropdown
                  className="item-nav-bar"
                  title="CATEGORIES"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item className="dropdown-text" href="#action3">
                    Cakes
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-text" href="#action4">
                    Tarts
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-text" href="#action5">
                    Truffles
                  </NavDropdown.Item>
                </NavDropdown>
                <Link to="/shop" className="item-nav-bar">
                  <Nav.Item className="item-nav-bar">SHOP</Nav.Item>
                </Link>
                <Link to="/contact" className="item-nav-bar">
                  <Nav.Item className="item-nav-bar">CONTACT</Nav.Item>
                </Link>
                <div className="d-flex align-items-center">
                  <FaRegUser
                    className="item-nav-login"
                    onClick={() => setShowOffCanvas(!showOffCanvas)}
                  />

                  <Link to="/cart" className="item-nav-bar">
                    <AiOutlineShopping className="item-nav-cart" />
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <LoginRegister show={showOffCanvas} setShow={setShowOffCanvas} />
    </>
  );
}

export default NavComp;
