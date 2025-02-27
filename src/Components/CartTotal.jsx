import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';

function CartTotal() {
  const { currency, delivery_fee, getCartAmount, cartItems } = useContext(ShopContext); // ✅ Import `cartItems`

  console.log("Cart Items in CartTotal:", cartItems); // ✅ Debug cart items

  const subtotal = getCartAmount() || 0;  // Ensure subtotal is a valid number
  const total = subtotal + (delivery_fee || 0); // Fixing potential undefined issue

  console.log("Subtotal:", subtotal);
  console.log("Delivery Fee:", delivery_fee);
  console.log("Total:", total);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {subtotal.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee ? delivery_fee.toFixed(2) : "0.00"}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Total</p>
          <b>{currency} {total.toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
