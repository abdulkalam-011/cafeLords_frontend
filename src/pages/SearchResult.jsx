import { useSearchParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ui/ProductCard";
import SkeletonCard from "../components/ui/SkeletonCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { items } = useSelector((state) => state.menu);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (query) {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredItems(filtered);
    }
    document.title = `CafeLords - ${query}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [query, items]);

  return (
    <div className="mt-4 px-2 sm:px-4 md:px-8 ">
      <h1 className="text-sm sm:text-md md:text-lg lg:text-2xl font-bold mb-6">
        Search Results for: <span className="text-orange-500">"{query}"</span>
      </h1>

      {filteredItems.length === 0 ? (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <p className="text-md sm:text-2xl text-gray-700">No items found </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-1 md:gap-8 p-2 items-center">
          {filteredItems.map((item) => (
            <div key={item.id} className="w-full h-full">
              <Suspense fallback={<SkeletonCard />}>
                <ProductCard product={item} />
              </Suspense>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
