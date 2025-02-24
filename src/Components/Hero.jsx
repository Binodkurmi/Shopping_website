import React from 'react';
import { assets } from '../assets/assets'; 

function Hero() {
	return (
		<div className="flex flex-col sm:flex-row border border-gray-400 p-6">
			{/* Left Section */}
			<div className="w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0 text-center sm:text-left">
				<div className="text-[#414141]">
					<div className="flex items-center gap-2">
						<div className="w-8 md:w-11 h-[2px] bg-[#414141]"></div>
						<p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
					</div>
				</div>

				{/* Title */}
				<h1 className="prata-regular  text-3xl sm:py-3 lg:text-5xl leading-relaxed text-black">
					Latest Arrivals
				</h1>

				{/* Button */}
				<div className="flex items-center gap-2 mt-4">
					<p className="font-semibold text-sm md:text-base text-black cursor-pointer hover:underline">
						SHOP NOW
					</p>
					<p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
				</div>
			</div>

		
			<div className="w-full sm:w-1/2 flex items-center justify-center">
				<img className='w-full sm:w1/2' src={assets.hero_img} alt="hero"/>
			</div>
		</div>
	);
}

export default Hero;
