import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';  
import ProductItem from './ProductItem';

const Bestseller = () => {  
	const { products } = useContext(ShopContext);
	const [bestSeller, setBestSeller] = useState([]); // ✅ Lowercase variable name

	useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller);  // ✅ Correct key
            console.log("Filtered Best Sellers:", bestProduct);  // Debugging log
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]);

	return (
		<div className='my-10'>
			<div className='text-center text-3xl py-8'>
				<Title text1={'BEST'} text2={'SELLERS'} />  
				<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
					Discover our top-selling products, handpicked for their quality and popularity. From customer favorites to must-have essentials, explore a collection that guarantees satisfaction and value. Don't miss out on these bestsellers loved by many!
				</p>
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
				{
					bestSeller.map((item, index) => ( 
						<ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
					))
				}
			</div>
		</div>
	);
}

export default Bestseller;
