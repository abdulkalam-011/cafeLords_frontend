
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

// icons import 
import { FaSearch } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";


const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


 const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const finalQuery = query.trim()
    navigate(`/search?q=${encodeURIComponent(finalQuery)}`);
  };


  return (
    <>
      <div
        className={`bg-transparent overflow-hidden  flex items-center gap-x-3 text-2xl pl-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200`}
      > 
        
      <form onSubmit={handleSearch} className=" w-full h-full flex items-center ">
      <input 
        type="text"
        placeholder="Search for items..."
        
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent outline-none w-full  placeholder-gray-500"
      />
     <button type="submit"
          name="search"
          className="bg-gray-100 text-black px-4 py-3"
        >
          <CiSearch />
        </button>
    </form>
        
      </div>
    </>
  );
};

export default Search;
