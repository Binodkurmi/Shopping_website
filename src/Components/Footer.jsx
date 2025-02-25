import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
	return (
		<div className='bg-gray-100 py-10'>
			<div className='container mx-auto px-1 md:px-16'>
				<div className='flex flex-col md:flex-row justify-between items-start gap-10'>

					{/* Left Section - Logo & Description */}
					<div className='w-full md:w-1/3'>
						<img src={assets.logo} className='mb-5 w-15' alt="Logo" />
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
							<li>📧 Shop@Forever.com</li>
							<li>📍 320020 Street, Rajkot, India</li>
						</ul>
					</div>

				</div>
			</div>

			{/* Footer Bottom Section */}
			<div className='border-t border-gray-300'>
				<p className='py-2 text-sm text-center tracking-wide leading-6 text-gray-600'>
					Copyright © 2025 Forever.com - All Rights Reserved.
				</p>
			</div>

		</div>
	);
}

export default Footer;
