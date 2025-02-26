import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { ProductId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!products || products.length === 0) return;

    const foundProduct = products.find((item) => item._id === ProductId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [ProductId, products]);

  return productData ? (
    <div className="border-t-2 pt-20 transition-opacity ease-in duration-500 opacity-100">
      {/** Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/** Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/** Small Images Scroll */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>

          {/** Main Image Fix */}
          <div className="w-full pb-10 sm:w-[50%] flex justify-center items-center">
            {image && <img className="w-full h-auto object-cover" src={image} alt="Product" />}
          </div>
        </div>

        {/*** Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-4 h-4" />
            <img src={assets.star_icon} alt="" className="w-4 h-4" />
            <img src={assets.star_icon} alt="" className="w-4 h-4" />
            <img src={assets.star_icon} alt="" className="w-4 h-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
						<p className="flex items-center pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
					<div className="flex flex-col gap-4 my-8">
						<p>Select Size</p>
						<div className="flex gap-2">
							{productData.sizes.map((item,index)=>(
								<button className={`border py-2 px-4 bg-gray-100`} key={index}>{item}</button>
							))}
						</div>
					</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
