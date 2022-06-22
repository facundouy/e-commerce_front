import "./banner.css";
function Banner() {
	return (
		<div className='bg-banner'>
			<div className='title-container'>
				<span>Sweet bites for you</span>
				<h1>TASTEFUL</h1>
				<img
					src='https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png'
					alt=''
				/>
				<p>
					It´s allways good time for sweets! Made with care and prepared with
					love, our sweets are all you might need to make every day special.
					Find your favorite now.
				</p>
				<a className='a-discover' href='#'>
					Discover
				</a>
				<a className='a-shop' href='#'>
					Shop now
				</a>
			</div>
		</div>
	);
}

export default Banner;
