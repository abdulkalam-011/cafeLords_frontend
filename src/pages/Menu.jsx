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
      <section className=" flex relative bg-gray-200  h-[100vh] gap-4">
        <div className=" py-2 left w-[20vw] h-full sticky bg-white text-black top-0 left-0 z-10 px-3">
          <h1 className="text-2xl  font-bold mb-5">Categories</h1>
          <div className="flex pl-2 justify-center items-center flex-col">
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
        <div className="right w-[80vw] overflow-y-auto h-full mb-5 relative ">
          <div className="flex justify-between items-center mt-10 px-22 sticky top-0 z-999 bg-gray-200 py-2">
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
