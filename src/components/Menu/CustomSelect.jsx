import React from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "../../features/menu/menusSlice";

const CustomSelect = ({ className = "" }) => {
  const dispatch = useDispatch();
  
  const sortByHandler = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="relative">
      <select
        defaultValue="" // Matches the value of the disabled option below
        onChange={sortByHandler}
        className={`
          bg-white 
          text-base md:text-xl 
          px-3 py-2 md:px-4 md:py-3 
          rounded-lg shadow 
          focus:outline-none focus:ring-2 focus:ring-yellow-400 
          border-2 border-yellow-300 
          transition-all duration-200 
          cursor-pointer 
          appearance-none
          pr-10
          ${className}
        `}
      >
        <option value="" disabled>Sort By</option>
        <option value="relevance">Relevance</option> {/* Added value */}
        <option value="price-asc">Price low to high</option>
        <option value="price-desc">Price high to low</option>
      </select>
      
      {/* Custom Chevron Arrow for better styling across browsers */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 md:px-3 text-gray-700">
        <svg className="fill-current h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
};

export default CustomSelect;