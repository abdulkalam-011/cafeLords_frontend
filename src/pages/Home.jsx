import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/ui/Loader";
import Search from "../components/ui/Search";

import Slider from "../components/home/Slider";

import { setCategory, setSearch } from "../features/menu/menusSlice";
import Categories from "../components/home/Categories";

const ProductContainer = lazy(() => import("../components/ProductContainer"));
const MenuList = lazy(() => import("../components/Menu/MenuList"));

const Home = () => {
  const dispatch = useDispatch();
  const { items, search, category } = useSelector((state) => state.menu);

  // set title and scroll to top
  useEffect(() => {
    dispatch(setSearch(""));
    dispatch(setCategory("All"));
    document.title = "CafeLords - Home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  // getting trending now randomly
  const randomIdxStart = Math.floor(Math.random() * items.length);
  const randomIdxEnd = randomIdxStart + 10;
  const trendingNow = items.slice(randomIdxStart, randomIdxEnd);

  // getting today special randomly
  const randomStart = Math.floor(Math.random() * items.length);
  const randomend = randomStart + 5;
  const todaySpecial = items.slice(randomStart, randomend);

  // UI
  return (
    <main className="overflow-hidden pb-10">
      {/* <Hero />
      <OrderSlider/> */}
      <Slider />
      <Categories />
      {search === "" && category == "All" ? (
        <Suspense fallback={<Loader />}>
          <ProductContainer
            productTagTitle="Today Special"
            data={todaySpecial}
          />
          <ProductContainer productTagTitle="trending Now" data={trendingNow} />
        </Suspense>
      ) : (
        <Suspense fallback={<Loader />}>
          <MenuList />
        </Suspense>
      )}
    </main>
  );
};

export default Home;
