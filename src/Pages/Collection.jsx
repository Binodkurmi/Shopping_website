import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collection = () => {
  const { products = [] } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]); 
  const [Category, setCategory] = useState([]); 
  const [subCategory, setSubCategory] = useState([]);

  // Toggle Category Selection
  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  // Toggle Subcategory Selection
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  // Apply Filters
  const applyFilter = () => {
    let productsCopy = products.slice();
    
    if (Category.length > 0) { // Fixed 'category' to 'Category'
      productsCopy = productsCopy.filter(item => Category.includes(item.category));
    }

    setFilterProducts(productsCopy);
  };

  // Update filtered products when products change
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Apply filters when Category or subCategory changes
  useEffect(() => {
    applyFilter();
  }, [Category, subCategory]);

  return (
    <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-10 pt-30 pb-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2" onClick={() => setShowFilter(!showFilter)}>
          FILTER
          <img className={h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}} src={assets.dropdown_icon} alt=""/>
        </p>

        {/***Category filter */}
        <div className={border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="men" onChange={toggleCategory}/>Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="women" onChange={toggleCategory}/>Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="kids" onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>

        {/**SUB CATEGORY FILTER */}
        <div className={border border-gray-300 pl-5 py-3 my-5 mt-6 ${showFilter ? "" : "hidden"} sm:block}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Topwear" onChange={toggleSubCategory} />Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Bottomwear" onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Winterwear" onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>

      {/**RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          {/**Products sort */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relevant</option>
            <option value="Low-High">Sort by: Low-High</option>
            <option value="High-Low">Sort by: High-Low</option>
          </select>
        </div>

        {/**Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              ))
            ) : (
              <p className="text-gray-500">No products available.</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;