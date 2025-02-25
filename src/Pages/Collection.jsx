import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collection = () => {
  const { products = [] } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]); 
  const [category, setCategory] = useState([]); 
  const [subCategory, setSubCategory] = useState([]);
const [sortType, setSortType]=useState('relavent')

  // Toggle Category Selection
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
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
    
    if (category.length > 0) { // Fixed 'category' to 'Category'
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
		if(subCategory.length > 0){
			productsCopy= productsCopy.filter(item=> subCategory.includes(item.subCategory));
		}
    setFilterProducts(productsCopy);
  };

	const sortProduct =() =>{
		let fpCopy = filterProducts.slice();

		switch(sortType){
			case 'Low-High':
				setFilterProducts(fpCopy.sort((a,b)=>(a.price -b.price)));
				break;
				case 'High-Low':
					setFilterProducts(fpCopy.sort((a,b)=> (b.price-a.price)));
					break;

					default:
						applyFilter();
						break;
		}
	}

	useEffect(()=>{
		applyFilter();
	},[category, subCategory])

	useEffect(()=>{
		sortProduct()
	},[sortType])

  return (
    <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-10 pt-30 pb-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2" onClick={() => setShowFilter(!showFilter)}>
          FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}`} src={assets.dropdown_icon} alt=""/>
        </p>

        {/***Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory}/>Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>

        {/**SUB CATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleSubCategory} />Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>

      {/**RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          {/**Products sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
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
