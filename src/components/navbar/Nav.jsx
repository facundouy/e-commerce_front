import "./nav.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { GiCupcake } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

function NavComp() {
  return (
    <Navbar bg="light" className="nav-container navbar-me-auto " sticky="top">
      <Container fluid className="d-flex justify-content-between">
        <div className="logo-container">
          <Link to="/">
            <Navbar.Brand href="/">
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
                <Nav.Item href="/">HOME</Nav.Item>
              </Link>
              <Link to="/about" className="item-nav-bar">
                <Nav.Item className="item-nav-bar" href="#action2">
                  ABOUT
                </Nav.Item>
              </Link>
              <NavDropdown
                className="item-nav-bar"
                title="CATEGORIES"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Cakes</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Tarts</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Truffles</NavDropdown.Item>
              </NavDropdown>
              <Link to="/shop" className="item-nav-bar">
                <Nav.Item className="item-nav-bar" href="/shop">
                  SHOP
                </Nav.Item>
              </Link>
              <Link to="/contact" className="item-nav-bar">
                <Nav.Item className="item-nav-bar" href="/contact">
                  CONTACT
                </Nav.Item>
              </Link>
              <div className="d-flex">
                <Link to="/login" className="item-nav-bar">
                  <FaRegUser className="item-nav-login" href="/login" />
                </Link>
                <Link to="/cart" className="item-nav-bar">
                  <AiOutlineShopping className="item-nav-cart" href="/cart" />
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavComp;
