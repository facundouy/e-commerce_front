import "./nav.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { GiCupcake } from "react-icons/gi";

function NavComp() {
	return (
		<Navbar bg='light' className='nav-container navbar-me-auto ' sticky='top'>
			<Container fluid className='d-flex justify-content-between'>
				<div>
					<Link to='/' className='item-nav-bar'>
						<Navbar.Brand href='#'>
							<GiCupcake />
						</Navbar.Brand>
					</Link>
				</div>
				<div className='container-nav-items'>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav
							className='me-auto my-2 my-lg-0'
							style={{ maxHeight: "100px" }}
							navbarScroll>
							<Link to='/' className='item-nav-bar'>
								<Nav.Item href='/'>HOME</Nav.Item>
							</Link>
							<Nav.Item className='item-nav-bar' href='#action2'>
								ABOUT
							</Nav.Item>
							<NavDropdown
								className='item-nav-bar'
								title='CATEGORIES'
								id='navbarScrollingDropdown'>
								<NavDropdown.Item href='#action3'>Cakes</NavDropdown.Item>
								<NavDropdown.Item href='#action4'>Tarts</NavDropdown.Item>
								<NavDropdown.Item href='#action5'>Truffles</NavDropdown.Item>
							</NavDropdown>
							<Nav.Item className='item-nav-bar' href='/shop'>
								SHOP
							</Nav.Item>
							<Nav.Item className='item-nav-bar' href='/contact'>
								CONTACT
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Container>
		</Navbar>
	);
}

export default NavComp;
