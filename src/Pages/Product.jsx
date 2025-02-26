import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { ProductId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!products || products.length === 0) return;

    const foundProduct = products.find((item) => item._id === ProductId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [ProductId, products]);

  const handleSizeClick = (selectedSize) => {
    setSize(selectedSize);
    setError(""); // Clear error when size is selected
  };

  const handleAddToCart = () => {
    if (!size) {
      setError("Please select a size before adding to cart!");
      return;
    }

    addToCart({
      id: productData._id,
      name: productData.name,
      price: productData.price,
      image: image,
      size: size,
      quantity: 1,
    });

    console.log("Added to cart:", productData.name, "Size:", size);
  };

  return productData ? (
    <div className="border-t-2 pt-20 transition-opacity ease-in duration-500 opacity-100">
      {/** Product Data Container */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/** Left Side - Product Image */}
        <div className="md:w-1/2 flex gap-4">
          
          {/** Small Images Side Scroll */}
          <div className="flex flex-col gap-3 overflow-y-auto">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-20 h-20 cursor-pointer border rounded-lg hover:opacity-80"
                alt="Product Thumbnail"
              />
            ))}
          </div>

          {/** Main Image */}
          <div className="flex justify-center items-center flex-1">
            {image && <img className="w-full max-w-md h-auto object-cover rounded-lg" src={image} alt="Product" />}
          </div>
        </div>

        {/** Right Side - Product Info */}
        <div className="md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-2xl font-bold">{productData.name}</h1>

          {/** Star Ratings */}
          <div className="flex items-center gap-1">
            <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
            <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
            <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
            <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
            <img src={assets.star_dull_icon} alt="Star Dull" className="w-4 h-4" />
            <p className="pl-2">(122)</p>
          </div>

          {/** Product Price */}
          <p className="text-3xl font-medium">{currency}{productData.price}</p>

          {/** Product Description */}
          <p className="text-gray-500">{productData.description}</p>

          {/** Size Selection */}
          <div className="flex flex-col gap-2 mt-4">
            <p className="font-medium">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes?.map((item, index) => (
                <button
                  onClick={() => handleSizeClick(item)}
                  className={`border py-2 px-4 rounded bg-gray-100 hover:bg-gray-300 transition-all duration-200 ${
                    item === size ? "border-orange-500 bg-orange-200 scale-105" : ""
                  }`}
                  key={index}>
                  {item}
                </button>
              ))}
            </div>
            {size && <p className="text-orange-600 font-medium">Selected Size: {size}</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>

          {/** Add to Cart Button (Margin Removed) */}
          <button
            onClick={handleAddToCart}
            className="bg-gray-900 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition-all duration-200">
            Add to Cart
          </button>

          {/** Policy Section */}
          <div className="text-sm text-gray-500 mt-4 space-y-1">
            <p>✅ 100% Original product.</p>
            <p>✅ Cash on delivery is available.</p>
            <p>✅ Easy return within 7 days.</p>
          </div>
        </div>
      </div>
			{/**-----Description & Review Section------*/}
			<div className="mt-2 mb-5">
				<div className="flex">
					<p className="border px-5 py-3 text-sm">Description</p>
					<p className="border px-5 py-3 text-sm">Reviews (122)</p>
				</div>
				<div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
					<p>This e-commerce website provides a seamless online shopping experience with a user-friendly interface, high-quality products, secure payments, and fast delivery, ensuring customer satisfaction and convenience for all online shoppers.</p>
					<p>It offers great deals, easy navigation, and reliable customer support, making online shopping smooth and enjoyable for everyone.</p>
				</div>
			</div>
			{/** Display related Products */}
			<RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
