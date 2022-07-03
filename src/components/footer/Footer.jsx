import { GiCupcake } from "react-icons/gi";
import React from "react";

import "./footer.css";

const Footer = () => {
	return (
		<>
			<div className='footer-container'>
				<div className='contact-container'>
					<h5>CONTACT</h5>
					<p>Av. Gral. Libertador 0000, Montevideo</p>
					<p>E-mail: hello@cakes.com</p>
					<p>Phone: +598 099 0000 000</p>
				</div>
				<div className='center-container'>
					<div className='logo-center-footer'>
						<GiCupcake className='logo' />
						<span>eat what you love</span>
						<h4>CAKES SHOP</h4>
						<img
							src='https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png'
							alt='Separador'
						/>
						<p>
							1926. - Year of beggining. There are many variations of passa ges
							of Lorem Ipsum avai lable, but the majority suffered alter.
						</p>
					</div>
				</div>
				<div className='map-container-footer'>
					<img src='/map.png' alt='world map' />
				</div>
			</div>
			<div className='footer-bottom'>
				© 2022 Santiago Fantoni, Paulina Irazusta, Facundo Irazusta & Florencia
				Falco.
			</div>
		</>
	);
};

export default Footer;
