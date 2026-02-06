import { useEffect, useState } from "react";
import CategoryButton from "../components/CategoryButton";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearch } from "../features/menu/menusSlice";
import CustomSelect from "../components/Menu/CustomSelect";
import MenuList from "../components/Menu/MenuList";
import Search from "../components/Search";

const Menu = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.menu);
  const [activeElement, setActiveElement] = useState("All");

  useEffect(() => {
    dispatch(setSearch(''));
    document.title = "CafeLords - Menu";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]); // Added missing dependency array

  const handleClick = (itemname) => {
    dispatch(setCategory(itemname));
    setActiveElement(itemname);
  };

  return (
    <>
      {/* LAYOUT CONTAINER: 
        - flex-col for Mobile (Stacked)
        - lg:flex-row for Desktop (Sidebar + Content) 
      */}
      <section className="bg-theme flex flex-col lg:flex-row relative min-h-screen">
        
        {/* --- LEFT SIDEBAR (CATEGORIES) --- */}
        {/* Mobile: w-full, auto height, stays at top, horizontally scrollable categories
          Desktop: w-[15vw], full height, sticky on left
        */}
        <div className=" sm:text-white
            w-full h-auto relative sm:bg-[#342b16] z-20 px-4 py-4 
            lg:w-[15vw] lg:h-screen lg:sticky lg:top-0 lg:py-2 lg:px-3
        ">
          <h1 className="text-xl lg:text-2xl text-white font-bold mb-3 lg:mb-5 sm:flex hidden">
            Categories
          </h1>
          
          {/* Category List Wrapper */}
          <div className="
              flex flex-row overflow-x-auto gap-3 pb-2 scrollbar-hide
              lg:flex-col lg:overflow-visible lg:gap-0 lg:pl-2 lg:justify-start lg:items-start
          ">
            {categories.map((itemname, idx) => (
              <CategoryButton
                key={idx}
                title={itemname}
                handleonclick={() => handleClick(itemname)}
                isActive={activeElement === itemname}
              />
            ))}
          </div>
        </div>

        {/* --- RIGHT CONTENT AREA --- */}
        {/* Mobile: w-full, normal scroll
           Desktop: w-[85vw], independent scroll
        */}
        <div className="
            w-full mb-5
            lg:w-[85vw] lg:overflow-y-auto lg:max-h-screen
        ">
          
          {/* Search & Filter Header */}
          <div className="
              flex flex-col gap-4 sm:mt-5 px-4 
              md:flex-row md:justify-end md:items-center md:px-4
              lg:mt-5 lg:px-2
          ">
            {/* Search Input Container */}
  
            
            {/* Sort Select Container */}
            <div className="w-full md:w-auto flex justify-end">
              <CustomSelect />
            </div>
          </div>
          <MenuList />
         
        </div>
      </section>
    </>
  );
};

export default Menu;