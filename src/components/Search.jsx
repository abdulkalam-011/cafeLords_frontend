import  { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/menu/menusSlice";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [searchval, setSearchVal] = useState("");
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.menu);
  // const [isFocused, setIsFocused] = useState(false)

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(setSearch(searchval));
  });

  return (
    <>
      <div
        className={`bg-white text-black flex items-center gap-x-3 text-2xl pl-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200`}
      >
        <input
          className="w-[90%]"
          type="search"
          placeholder={`Search for ${category}`}
          value={searchval}
          onChange={(e) => {
            setSearchVal(e.target.value);
            dispatch(setSearch(e.target.value));
          }}
        />
        <button name="search" className="bg-gray-100 px-4 py-3 rounded-lg">
          <CiSearch />
        </button>
      </div>
    </>
  );
};

export default Search;
