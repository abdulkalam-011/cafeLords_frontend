import React, { useState } from "react";
// Import Icons
import { MdDashboard, MdOutlineBakeryDining } from "react-icons/md";
import {
  FaPizzaSlice,
  FaIceCream,
  FaUtensils,
  FaBreadSlice,
} from "react-icons/fa6";
import { GiNoodles, GiSodaCan, GiBowlOfRice } from "react-icons/gi";
import { BiSolidCoffee } from "react-icons/bi";
import { BiBowlHot } from "react-icons/bi";
import { setCategory } from "../../features/menu/menusSlice";
import { useDispatch } from "react-redux";
import { GiChipsBag } from "react-icons/gi";

const categories = [
  { id: 1, name: "All", icon: <MdDashboard /> },
  { id: 2, name: "Coffee", icon: <BiSolidCoffee/> },
  { id: 3, name: "Snacks", icon:<MdOutlineBakeryDining/>},
  { id: 4, name: "Beverages", icon: <GiSodaCan /> },
  { id: 5, name: "Desserts", icon: <FaIceCream /> },
  { id: 6, name: "Pizza", icon: <FaPizzaSlice /> },
  { id: 7, name: "Pasta", icon: <GiNoodles /> },
  { id: 8, name: "Bakery", icon: <FaBreadSlice /> },
  { id: 9, name: "Meals", icon: <FaUtensils /> },
  { id: 10, name: "Soup", icon: <BiBowlHot /> },
];

const Categories = () => {
  const [selected, setSelected] = useState("All");
  const dispatch = useDispatch();

  const handleclick = (itemname) => {
    dispatch(setCategory(itemname));
    setSelected(itemname);
  };

  return (
    <div className="w-full py-6 md:py-10 md:px-[60px]">
      <div className="container mx-auto px-4">
        {/* Title (Optional) */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 text-center md:text-left">
          Browse by <span className="text-[#C19A6B]">Category</span>
        </h2>

        {/* Scrollable Container */}
        {/* 'scrollbar-hide' is a custom utility. If you don't have it, see CSS below */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 md:gap-6 md:justify-center min-w-max md:min-w-0 px-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleclick(cat.name)}
                className={`
                  group flex flex-col items-center justify-center gap-2 
                  w-20 h-24 md:w-24 md:h-28 
                  rounded-2xl transition-all duration-300 ease-out
                  border border-transparent
                  hover:-translate-y-1
                  ${
                    selected === cat.name
                      ? "bg-[#C19A6B] text-white shadow-[0_0_15px_rgba(193,154,107,0.4)]"
                      : "bg-[#1f1f1f] text-gray-400 hover:border-[#C19A6B] hover:text-[#C19A6B]"
                  }
                `}
              >
                {/* Icon Wrapper */}
                <span
                  className={`text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110`}
                >
                  {cat.icon}
                </span>

                {/* Name */}
                <span className="text-xs md:text-sm font-medium tracking-wide">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* If you want to hide the scrollbar visually but keep functionality, 
         add this to your index.css or style block:
      */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Categories;
