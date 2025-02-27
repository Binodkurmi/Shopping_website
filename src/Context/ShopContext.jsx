import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate =useNavigate();


  // ✅ Add item to cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);
  };

  // ✅ Get total cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        totalCount += cartItems[item][size];
      }
    }
    return totalCount;
  };

  // ✅ Update quantity and delete items
  const updatedQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (quantity > 0) {
      cartData[itemId][size] = quantity;
    } else {
      delete cartData[itemId][size];

      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    }

    setCartItems(cartData);
  };

  
	const getCartAmount = () => {
	// ✅ Debug cart items here
	
		let totalAmount = 0;
	
		for (const itemId in cartItems) {
			let itemInfo = products.find((product) => String(product._id) === String(itemId));

			
			if (!itemInfo) {
				console.log(`Product not found for itemId: ${itemId}`); // ✅ Debug missing products
				continue;
			}
	
			for (const size in cartItems[itemId]) {
				try {
					totalAmount += itemInfo.price * cartItems[itemId][size];
				} catch (error) {
					console.error("Error calculating total:", error);
				}
			}
		}
	
		console.log("Calculated Subtotal in getCartAmount:", totalAmount); // ✅ See if this updates
	
		return totalAmount || 0; // Always return a valid number
	};
	

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updatedQuantity,
    getCartAmount,
		navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
