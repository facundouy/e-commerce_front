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
			<Navbar bg='light' expand='lg' sticky='top' className='nav-container'>
				<Container>
					<Navbar.Brand>
						<GiCupcake className='logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse
						id='basic-navbar-nav'
						className='justify-content-end'>
						<Nav className='me-auto'>
							<Link to='/' className='item-nav-bar'>
								<Nav.Item>HOME</Nav.Item>
							</Link>
							<Link to='/about' className='item-nav-bar'>
								<Nav.Item className='item-nav-bar'>ABOUT</Nav.Item>
							</Link>
							<NavDropdown
								className='item-nav-bar'
								title='CATEGORIES'
								id='basic-nav-dropdown'>
								<NavDropdown.Item className='dropdown-text' href='#action/3.1'>
									Cakes
								</NavDropdown.Item>
								<NavDropdown.Item className='dropdown-text' href='#action/3.2'>
									Truffles
								</NavDropdown.Item>
								<NavDropdown.Item className='dropdown-text' href='#action/3.3'>
									Tarts
								</NavDropdown.Item>
								<NavDropdown.Item className='dropdown-text' href='#action/3.4'>
									Cups
								</NavDropdown.Item>
							</NavDropdown>
							<Link to='/shop' className='item-nav-bar'>
								<Nav.Item className='item-nav-bar'>SHOP</Nav.Item>
							</Link>
							<Link to='/contact' className='item-nav-bar'>
								<Nav.Item className='item-nav-bar'>CONTACT</Nav.Item>
							</Link>
							<Nav.Item>
								<FaRegUser
									className='item-nav-login'
									onClick={() => setShowOffCanvas(!showOffCanvas)}
								/>
							</Nav.Item>
							<Nav.Item>
								<Link to='/cart' className='item-nav-bar'>
									<AiOutlineShopping className='item-nav-cart' />
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
