import React from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "../../features/menu/menusSlice";

const CustomSelect = ({  className = "" }) => {
  const dispatch = useDispatch()
  const sortByHandler = (e) => {
    dispatch(setSortBy(e.target.value))
  };
  return (
    <select
    defaultValue='Sort By'
      onChange={sortByHandler}
      className={`bg-white text-2xl px-4 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200 ${className}`}
    >
      {/*<option value="" disabled defaultValue='dfj'>Sort By</option>*/}
      <option value="" disabled>Sort By</option>
      <option value="">Relevance</option>
      <option value="price-asc">Price low to high</option>
      <option value="price-desc">Price high to low</option>
    </select>
  );
};

export default CustomSelect;
