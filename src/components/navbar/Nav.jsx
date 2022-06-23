import "./nav.css";

import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Container,
  FormControl,
  Button,
} from "react-bootstrap";

function NavComp() {
  return (
    <Navbar bg="light" className="nav-container" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">Hack Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="item-nav-bar" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="item-nav-bar" href="#action2">
              ABOUT
            </Nav.Link>
            <NavDropdown
              className="item-nav-bar"
              title="CATEGORIES"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Cakes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Tarts</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Truffles</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="item-nav-bar" href="/shop">
              SHOP
            </Nav.Link>
            <Nav.Link className="item-nav-bar" href="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;
