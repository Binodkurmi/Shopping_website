import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets';
import NewsletterBox from '../Components/NewsletterBox';

const Contact =()=> {
	return (
		<div>
			<div className='text-center text-2xl pt-25 border-t'>
				<Title text1={'CONTACT'} text2={' US'}/>
				</div>
				<div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
					<img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=''></img>
					<div className='flex flex-col justify-center iten-start gap-6'>
					<p className='font-semibold text-xl text-gray-600'>Our Store</p>
					<p className='text-gray-500'>360020 Street, Bhavnagar Highway <br/> Rajkot Gujarat  (INDIA)</p>
					<p className='text-gray-500'>Tel: (+91) 9846754213 <br/> Email: Forever@gmail.com</p>
					<p className='font-semibold text-xl text-gray-600'>Careers at Forver</p>
					<p className='text-gary-600'>Learn more about our teams and Job Openings.</p>
					<button className='border border-black px-2 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
				</div>
				</div>
				<NewsletterBox/>
		</div>
	)
}

export default Contact