import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title'
import ProductItem from './ProductItem';
const LatestCollection = () => {

	const {products} = useContext(ShopContext);
  const [Latestproducts, setLatestProducts] = useState([]);

	useEffect(()=>{
		setLatestProducts(products.slice(0,10));
	},[])
	return (
		<div className='my-10'>
			<div className='text-center py-8 text3xl'>
				<Title text1={'LATEST'} text2={'COLLECTION'}/>
				<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
				Discover the latest trends in fashion, electronics, home decor, and more, all in one place. Whether you're looking for stylish outfits, cutting-edge gadgets, or unique gifts, we've got you covered.
				</p>
		 </div>
		 {/*renering Products*/}

		 <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
			{
				Latestproducts.map((items, index)=>(
					<ProductItem key ={index} id = {items._id} image={items.image} name={items.name} price={items.price}/>
				))
			}
		 </div>
		</div>
	)
}

export default LatestCollection