import React, { lazy, Suspense, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const ProductCard = lazy(() => import("../ProductCard"));

const MenuList = () => {
  const { search, category, items, sortBy } = useSelector(
    (state) => state.menu
  );
  let filteredItems = [...items].filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
  );
  if (sortBy == "price-asc") {
    filteredItems = filteredItems.sort((a, b) => a.final_price - b.final_price);
  } else if (sortBy == "price-desc") {
    filteredItems = filteredItems.sort((a, b) => b.final_price - a.final_price);
  }

  return (
    <>
      <section className="flex items-start flex-wrap justify-center gap-4 gap-y-8  py-8 w-full h-full">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <div className="w-full h-36 flex items-center justify-center text-3xl gap-4">
            No item Found?{" "}
            <span className="text-red-600 text-4xl"> {search}</span>{" "}
          </div>
        )}
      </section>
    </>
  );
};

export default MenuList;
