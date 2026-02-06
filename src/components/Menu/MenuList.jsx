import React, { lazy, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import SkeletonCard from "../SkeletonCard";

// Lazy load the ProductCard
const ProductCard = lazy(() => import("../ProductCard"));



const MenuList = () => {
  const { search, category, items, sortBy } = useSelector((state) => state.menu);

  // --- FILTER & SORT LOGIC (Optimized) ---
  const filteredItems = useMemo(() => {
    if (!items) return [];

    let result = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
    );

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.final_price - b.final_price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.final_price - a.final_price);
    }

    return result;
  }, [items, search, category, sortBy]);

  // --- LOADING STATE ---
  if (!items) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center text-white">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="w-full h-fit py-10  md:px-8 ">
      
      {filteredItems.length > 0 ? (
        // --- RESPONSIVE GRID ---
        // Mobile: 1 col | Tablet: 2 cols | Laptop: 3 cols | Large: 4 cols
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-8 p-2 items-center">
          
          {filteredItems.map((item) => (
            <div key={item.id} className="w-full h-full">
              <Suspense fallback={<SkeletonCard />}>
                <ProductCard product={item} />
              </Suspense>
            </div>
          ))}

        </div>
//         {/* Parent Container */}
// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-6 p-2 md:p-6">
// //   {filteredItems.map((prod) => (
// //     <ProductCard key={prod.id} product={prod} />
// //   ))}
// // </div>

      ) : (
        // --- EMPTY STATE ---
        <div className="w-full h-[50vh] flex flex-col items-center justify-center text-center gap-4 text-gray-400">
          <p className="text-2xl md:text-3xl font-light">No items found</p>
          <p className="text-lg">
            Search result for: <span className="text-red-500 font-bold">"{search}"</span>
          </p>
        </div>
      )}
    </section>
  );
};

export default MenuList;