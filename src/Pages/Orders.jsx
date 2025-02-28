import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className='border-t pt-20'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              {/* Left Section - Product Info */}
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="Product" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                  <p className='mt-2'>Date: <span className='text-gray-400'>25, Jul, 2025</span></p>
                </div>
              </div>

              {/* Right Section - Ready to Ship */}
              <div className='flex items-center gap-2'>
                <p className='w-3 h-3 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to Ship</p>
              </div>
							<button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
