import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
	return (
		<div className='bg-gray-100 py-10'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-6 md:px-16 text-gray-700'>

				{/* Left Section - Logo & Description */}
				<div className='w-full md:w-1/3'>
					<img src={assets.logo} className='mb-5 w-32' alt="Logo" />
					<p className='text-gray-600'>
						Your one-stop destination for premium products at unbeatable prices. Explore our latest collections and enjoy a seamless shopping experience with fast delivery and top-notch customer support.
					</p>
				</div>

				{/* Center Section - Quick Links */}
				<div className='w-full md:w-1/3'>
					<p className='text-xl font-medium mb-5'>QUICK LINKS</p>
					<ul className='flex flex-col gap-2 text-gray-600'>
						<li>Home</li>
						<li>About Us</li>
						<li>Delivery</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				{/* Right Section - Get in Touch */}
				<div className='w-full md:w-1/3'>
					<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
					<ul className='flex flex-col gap-2 text-gray-600'>
						<li>📞 +91-7096456378</li>
						<li>📧 Shop@Foreever.com</li>
						<li>📍 123 Street, Rajkot, India</li>
					</ul>
				</div>

			</div>
		</div>
	);
}

export default Footer;
