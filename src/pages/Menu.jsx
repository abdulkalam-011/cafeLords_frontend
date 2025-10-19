import { useEffect, useState } from "react";
import CategoryButton from "../components/CategoryButton";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../features/menu/menusSlice";
import CustomSelect from "../components/Menu/CustomSelect";
import MenuList from "../components/Menu/MenuList";
import Search from "../components/Search";


const Menu = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.menu);
  const [activeElement, setActiveElement] = useState("All");

  useEffect(() => {
    document.title = "CafeLords - Menu";
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);

  const handleClick = (itemname) => {
    dispatch(setCategory(itemname));
    setActiveElement(itemname);
  };

  // UI
  return (
    <>
      <section className=" bg-theme flex relative">
        <div className=" py-2 left w-[15vw] h-[100vh] sticky bg-theme-dark top-0 left-0 z-10 px-3">
          <h1 className="text-2xl text-white font-bold mb-5">Categories</h1>
          <div className="flex pl-2 justify-start items-start flex-col text-white">
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
        <div className="right w-[85vw] overflow-y-auto max-h-[100vh] mb-5">
          <div className="flex justify-between items-center mt-10 px-28">
              <Search /> 
            <div>
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
