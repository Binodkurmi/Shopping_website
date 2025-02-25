import React from 'react';
import { assets } from '../assets/assets';
import Title from './Title';  

const OurPolicy = () => {
	return (
		<div className='my-10'>
			<div className='text-center text-3xl py-8'>
				<Title text1={'OUR'} text2={'POLICY'} />
				<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
					We prioritize customer satisfaction with our hassle-free exchange, flexible return policies, and 24/7 customer support. Shop with confidence, knowing we’ve got you covered!
				</p>
			</div>

			<div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base text-gray-700'>
				<div>
					<img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='' />
					<p className='font-semibold'>Easy Exchange Policy</p>
					<p className='text-gray-400'>We offer a hassle-free exchange policy.</p>
				</div>
				<div>
					<img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='' />
					<p className='font-semibold'>7 Days Return Policy</p>
					<p className='text-gray-400'>We provide a 7-day free return policy.</p>
				</div>
				<div>
					<img src={assets.support_img} className='w-12 m-auto mb-5' alt='' />
					<p className='font-semibold'>Best Customer Support</p>
					<p className='text-gray-400'>We provide 24/7 customer support.</p>
				</div>
			</div>
		</div>
	);
};

export default OurPolicy;
