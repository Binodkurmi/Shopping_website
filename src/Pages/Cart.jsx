import React, { useContext, useEffect, useState } from 'react';
import Title from '../Components/Title';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updatedQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item], // Store quantity
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-20">
      <div className="text-3xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Product Image and Details */}
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="text-gray-500">Size: {item.size.toUpperCase()}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Input */}
              <input
                className="border max-w-10 px-1 sm:px-2 py-1 text-center"
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => {
                  const value = e.target.value.trim();
                  if (value === '' || value === '0') return;
                  updatedQuantity(item._id, item.size, Number(value));
                }}
              />

              {/* Bin Icon - Properly Aligned */}
              <div className="flex justify-center">
                <img
                  onClick={() => updatedQuantity(item._id, item.size, 0)}
                  className="w-4 sm:w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </div>
            </div>
          );
        })}
				</div>
				<div className='flex justify-end my-20'>
					<div className='w-full sm:w-[450px]'>
						<CartTotal/>
						<div className='w-full text-end'>
						<button onClick={() => navigate('/PlaceOrder')} className="bg-black text-white text-sm my-8 px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300">
								PROCEED TO CHECKOUT
							</button>
						</div>
					</div>
      </div>
    </div>
  );
};

export default Cart;
