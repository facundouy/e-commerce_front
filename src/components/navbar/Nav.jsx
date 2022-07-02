import "./nav.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { GiCupcake } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import LoginRegister from "../loginRegister/LoginRegister";

function NavComp() {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesResponse = await Axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/categories`
        );
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

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
                    <NavDropdown.Item
                      className="dropdown-text"
                      href={`/category/${item.name}`}
                      key={item._id}
                    >
                      {item.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Link to="/shop" className="item-nav-bar">
                <Nav.Item>SHOP</Nav.Item>
              </Link>
              <Link to="/contact" className="item-nav-bar">
                <Nav.Item>CONTACT</Nav.Item>
              </Link>
              <Nav.Item>
                <Link to="#" className="item-nav-bar">
                  <FaRegUser
                    className="item-nav-login mx-0"
                    onClick={() => setShowOffCanvas(!showOffCanvas)}
                  />
                </Link>
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
